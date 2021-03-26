class Http {
    ajax(method, url, headers = {}, body = null) {
        return fetch(url, {method, headers, body}).then(resp => {
            if(!resp.ok) throw new Error(resp.statusText);
            if(resp.status == 204) return null;
            return resp.json(); // promise
        });
   }

   get(url) {
       return this.ajax('GET', url);
   }

   post(url, data) {
        return this.ajax('POST', url, {
            'Content-Type': 'application/json'
        }, JSON.stringify(data));
   }

   put(url, data) {
        return this.ajax('PUT', url, {
            'Content-Type': 'application/json'
        }, JSON.stringify(data));
   }

   delete(url) {
       return this.ajax('DELETE', url);
   }
}
