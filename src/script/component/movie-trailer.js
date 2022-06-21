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

    set clickClose(value){
        this._clickClose = value;
        this.render();
    }

    set urlVideo(url) {
        this._urlVideo = url;
        this.render();
    }

    set display(value){
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
            #watching-movie {
                display: ${this._display};
                flex-direction: column;
                position: fixed;
                top:15%;
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
                max-height:30vh;
                flex-basis:50%;
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
                iframe {
                    min-height:50vh;
                }

               
            }

            @media only screen and (max-width: 800px){
                iframe {
                    flex-basis:100%;
                    min-height:43vh;
                }

                .info {
                    flex-basis:100%;
                }

                .watching-movie {
                    flex-direction:column;
                }

                #watching-movie {
                    left:2%;
                }
            }

             @media only screen and (max-width: 650px){
                iframe {
                    flex-basis:100%;
                    min-height:43vh;
                }

                .info {
                    flex-basis:100%;
                }

                .watching-movie {
                    flex-direction:column;
                }

                #watching-movie {
                    left:1%;
                }
            }
        </style>

        <section id="watching-movie">
            <h1 class="mb-3">Movie Trailers</h1>
            <div class="watching-movie">
                <iframe
                    src="${this._urlVideo}">
                </iframe>
                <div class="info">
                    <h2>Overview</h2>
                    <p>${this._overview}</p>
                </div>
            </div>
            <a type="button" id="close">Close</a>
        </section>
        `;

        this._shadowRoot.querySelector('#close').addEventListener('click',this._clickClose);
    }
}

customElements.define('movie-trailer', MovieTrailer);