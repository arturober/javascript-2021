import productTemplate from '../templates/product.handlebars';
import { ProductsDB } from './products-db.class';

export class Product {
    constructor({ id, name, description, photo }) { // Receives JSON object
        if(id) {
            this.id = id;
        }
        this.name = name;
        this.description = description;
        this.photo = photo;
    }

    static async getAllProducts() {
        let prodDB = await ProductsDB.getDB();
        let products = await prodDB.getAllProducts();
        return products.map(p => new Product(p));
    }

    async post() {
        let prodDB = await ProductsDB.getDB();
        let prod = await prodDB.insertProduct(this);
        return new Product(prod);
    }

    async delete() {
        let prodDB = await ProductsDB.getDB();
        await prodDB.deleteProduct(this.id);
    }

    toHtml() {
        let tr = document.createElement('tr');

        let prodHtml = productTemplate(this);
        tr.innerHTML = prodHtml;
        
        let btnDelete = tr.querySelector('button.delete');
        btnDelete.addEventListener('click', async e => {
            await this.delete();
            tr.remove();
        });
        
        return tr;
    }
}

