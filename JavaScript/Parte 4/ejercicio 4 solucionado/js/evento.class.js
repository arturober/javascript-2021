"use strict";

class EventoService {
    constructor() {
        this.http = new Http();
    }

    async getEvents() { // Devuelve Promise<Array<Evento>> con el array de eventos
        const response = await this.http.get(`${SERVER}/eventos`);
        return response.eventos;
    }

    async post(evento) { // Devuelve Promise<Evento> 
        const response = await this.http.post(`${SERVER}/eventos`, evento);
        return response.evento;
    }

    async delete(id) { // Returns Promise<true>
        await this.http.delete(`${SERVER}/eventos/${id}`);
    }
}
