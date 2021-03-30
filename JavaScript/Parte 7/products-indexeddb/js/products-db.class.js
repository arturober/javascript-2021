let db = null;

export class ProductsDB {
    constructor() {}

    static _openDB() {
        return new Promise((resolve, reject) => {
            let openReq = indexedDB.open('products', 1);

            openReq.addEventListener('upgradeneeded', e => {
                const db = e.target.result;

                if (!db.objectStoreNames.contains('products')) {
                    db.createObjectStore('products', { autoIncrement: true, keyPath: 'id' });
                }
            });

            openReq.addEventListener('success', e => resolve(e.target.result));
            openReq.addEventListener('error', e => reject('Error opening database!')); // Throw error
            openReq.addEventListener('blocked', e => reject('Database is already open')); // Throw error
        });    
    }

    static async getDB() {
        if(db === null) {
            db = await ProductsDB._openDB();
        }
        return new ProductsDB();
    }

    insertProduct(product) {
        const store = db.transaction('products', 'readwrite').objectStore('products');
        const addReq = store.add(product);
        return new Promise((resolve, reject) => {
            addReq.addEventListener('success', e => resolve(e.target.result)); // Returns product
            addReq.addEventListener('error', e => reject('could not add the product'));
        });
    }

    getAllProducts() {
        const store = db.transaction('products', 'readonly').objectStore('products');
        const getReq = store.getAll();
        return new Promise((resolve, reject) => {
            getReq.addEventListener('success', e => resolve(e.target.result)); // Returns all objects
            getReq.addEventListener('error', e => reject('could not get products'));
        });
    }

    getProduct(key) {
        const store = db.transaction('products', 'readonly').objectStore('products');
        const getReq = store.get(key);
        return new Promise((resolve, reject) => {
            getReq.addEventListener('success', e => resolve(e.target.result)); // Returns object
            getReq.addEventListener('error', e => reject(`could not get product ${key}`));
        });
    }

    updateProduct(product, key = null) {
        const store = db.transaction('products', 'readwrite').objectStore('products');
        // key is only required when the store has no keypath
        const updateReq = key ? store.put(product, key) : store.put(product);
        return new Promise((resolve, reject) => {
            updateReq.addEventListener('success', e => resolve(e.target.result)); // Returns product
            updateReq.addEventListener('error', e => reject('could not update product'));
        });
    }

    deleteProduct(key) {
        const store = db.transaction('products', 'readwrite').objectStore('products');
        const delReq = store.delete(key);
        return new Promise((resolve, reject) => {
            delReq.addEventListener('success', e => resolve());
            delReq.addEventListener('error', e => reject(`could not remove the product ${key}`));
        });
    }

    static async deleteDatabase() {
        if(db !== null) {
            db.close();
            db = null;
        }
        return new Promise((resolve, reject) => {
            const deleteReq = indexedDB.deleteDatabase('products');
            deleteReq.addEventListener('success', e => resolve()); // Deleted
            deleteReq.addEventListener('error', e => reject('Error deleting database')); // error
            deleteReq.addEventListener('blocked', e => reject('Database must be closed before deleting')); // error
        });
    }
}