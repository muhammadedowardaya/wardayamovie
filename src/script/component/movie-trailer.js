class MovieTrailer extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
    }

    connectedCallback() {
        this.urlVideo = 'https://www.youtube.com/embed/c28QZ24ImnA';
        this.display = 'none';
        this.render();
    }

    set clickClose(value) {
        this._clickClose = value;
        this.render();
    }

    set urlVideo(url) {
        this._urlVideo = url;
        this.render();
    }

    set display(value) {
        this._display = value;
        this.render();
    }

    set overview(text) {
        this._overview = text;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `

        <style>
            #container {
                display: ${this._display};
                flex-direction: column;
                position: fixed;
                top:8%;
                left:3%;
                background: #6639A6;
                height: max-content;
                width: 90%;
                padding: 20px;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                border-top-right-radius: 20px;
            }

            #watching-movie {
                overflow-y:scroll;
            }

            h1 {
                font-size: 2em;
                text-align: center;
                color:#fff;
            }

            #close {
                cursor: pointer;
                background: red;
                color: #fff;
                display: block;
                position: absolute;
                right: 0;
                padding: 4px 25px;
            }
            .watching-movie {
                display: flex;
                width: 100%;
                justify-content: between;
                color: #fff;
                height: max-content;
            }
            
            iframe {
                flex-basis:80%;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                border-top-right-radius: 20px;
            }

            .info {
                flex-basis:50%;
                margin-left:20px;
            }

            .info p {
                font-size:18px;
            }


            @media only screen and (min-width: 1000px){
                #container {
                    min-height: 46vh;
                    top:10%;
                }

                .watching-movie {
                    height: 36vh;
                }
            }
            @media only screen and (max-width: 800px){

                .info {
                    flex-basis:100%;
                }

                .info p {
                    height: 13vh;
                    overflow-y: scroll;
                }

                .watching-movie {
                    flex-direction:column;
                }

                #container {
                    left: 2%;
                    height: 42vh;
                    overflow-y: scroll;
                }
            }

             @media only screen and (max-width: 650px){

                .info {
                    flex-basis:100%;
                }

                .info h2 {
                    margin:10px 0;
                }

                .info p {
                    font-size:12px;
                }

                .watching-movie {
                    flex-direction:column;
                }

                #container {
                    left: 3vw;
                    top: 9%;
                    height: max-content;
                    width: 86vw;
                    overflow-y:scroll;
                }
            }

            @media only screen and (max-width: 400px){

                .info {
                    flex-basis:100%;
                }

                .info p {
                    font-size:12px;
                }

                h2 {
                    margin:10px 0;
                }

                .watching-movie {
                    flex-direction:column;
                }

                #container {
                    left:1%;
                    width: 86vw;
                    top: 11vh;
                    overflow-y:scroll;
                }
            }
        </style>

        <div id="container">
            <h1 class="mb-3">Movie Trailers</h1>
            <section id="watching-movie">
                <div class="watching-movie">
                    <iframe
                        src="${this._urlVideo}">
                    </iframe>
                    <div class="info">
                        <h2>Overview</h2>
                        <p>${this._overview}</p>
                    </div>
                </div>
            </section>
            <a type="button" id="close">Close</a>
        </div>
        `;

        this._shadowRoot.querySelector('#close').addEventListener('click', this._clickClose);
    }
}

customElements.define('movie-trailer', MovieTrailer);