"use strict";

class Evento {
    constructor({id, title, date, description, image, price}) {
        this.id          = id;
        this.title       = title;
        this.date        = date;
        this.description = description;
        this.image       = image;
        this.price       = +price;
    }

    static async getEvents() { // Devuelve Promise<Array<Evento>> con el array de eventos
        const response = await Http.get(`${SERVER}/eventos`);
        return response.eventos.map(e => new Evento(e));
    }

    async post() { // Devuelve Promise<Evento> 
        const response = await Http.post(`${SERVER}/eventos`, this);

        this.id = response.evento.id;
        this.image = response.evento.image;
        return this;
    }

    delete() { // Returns Promise<true>
        return Http.delete(`${SERVER}/eventos/${this.id}`);
    }

    toHTML() {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = this.image;
        card.appendChild(img);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        let cardTitle = document.createElement("h4");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = this.title;
        cardBody.appendChild(cardTitle);


        let cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = this.description;
        cardBody.appendChild(cardText);

        let delButton = document.createElement("button");
        delButton.className = "btn btn-danger";
        delButton.innerText = "Delete";
        cardBody.appendChild(delButton);

        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
        card.appendChild(cardFooter);

        let footerText = document.createElement("small");
        footerText.classList.add("text-muted");
        const date = new Date(this.date);
        footerText.textContent = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        cardFooter.appendChild(footerText);

        let priceText = document.createElement("span");
        priceText.classList.add("float-right");
        priceText.textContent = this.price.toFixed(2) + "€";
        footerText.appendChild(priceText);

        return card;
    }
}
