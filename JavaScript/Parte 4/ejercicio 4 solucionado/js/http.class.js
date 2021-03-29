"use strict";

class Http {
    static async ajax(method, url, headers = {}, body = null) {
       const resp = await fetch(url, { method, headers, body});
        if(!resp.ok) throw new Error(resp.statusText);
        return resp.json(); // promise
   }

   static get(url) {
       return Http.ajax('GET', url);
   }

   static post(url, data) {
        return Http.ajax('POST', url, {
            'Content-Type': 'application/json'
        }, JSON.stringify(data));
   }

   static put(url, data) {
        return Http.ajax('PUT', url, {
            'Content-Type': 'application/json'
        }, JSON.stringify(data));
   }

   static delete(url) {
       return Http.ajax('DELETE', url);
   }
}