class CardMovie extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
    }

    set click(value){
        this._click = value;
        this.render();
    }

    set id(value) {
        this._id = value;
        this.render();
    }

    set image(value) {
        this._image = value;
        this.render();
    }

    set title(value) {
        this._title = value;
        this.render();
    }

    set popularity(value) {
        this._popularity = value;
        this.render();
    }


    render() {
        this._shadowRoot.innerHTML = `

            <style>
                a {
                    text-decoration:none;
                    color:unset;
                    cursor:pointer;
                }
                .card-movie {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: max-content;
                }
                .card-movie img {
                    width:100%;
                    border-top-right-radius: 20px;
                    border-top-left-radius: 20px;
                    border-bottom-right-radius: 20px;
                    border-bottom-left-radius: 20px;
                }

                .card-movie .info {
                    margin-bottom:20px;
                }
                .card-movie .info h4 {
                    margin:0;
                }

                .card-movie .info p {
                    margin:0;
                }
                
                .card-movie .info a {
                    background: #4d4fff;
                    color: #fff;
                    display: block;
                    text-align: center;
                    padding: 10px;
                    border-top-right-radius: 8px;
                    border-top-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                    border-bottom-left-radius: 8px;
                    margin-top: 10px;
                }

            </style>

            <div class="card-movie" data-id='${this._id}'>
                <div class="card-movie-image">
                    <img src="${this._image}" alt="">
                </div>
                <div class='info'>
                    <h4>${this._title}</h4>
                    <p>Popularity : ${this._popularity}</p>
                    <a type="button">Movie Trailer</a>
                </div>
            </div>
        `;

        this._shadowRoot.querySelector('.info a').addEventListener('click',this._click);
    }
}

customElements.define('card-movie', CardMovie);