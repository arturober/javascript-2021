export class Http {
    async ajax<T>(method: string, url: string, headers = {}, body: string = null): Promise<T> {
        const resp = await fetch(url, {method, headers, body});
        if(!resp.ok) throw new Error(resp.statusText);
        if(resp.status == 204) return null;
        return resp.json(); // promise
    }

    get<T>(url: string): Promise<T> {
        return this.ajax('GET', url);
    }

    post<T>(url: string, data: any): Promise<T> {
        return this.ajax('POST', url, {
            'Content-Type': 'application/json'
        }, JSON.stringify(data));
    }

    put<T>(url: string, data: any): Promise<T> {
        return this.ajax('PUT', url, {
            'Content-Type': 'application/json'
        }, JSON.stringify(data));
    }

    delete<T>(url: string): Promise<T> {
        return this.ajax('DELETE', url);
    }
}
