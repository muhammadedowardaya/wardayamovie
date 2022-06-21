class Navbar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">Wardaya</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#trending">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#popular">Popular</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#top_rated">Top Rated</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#upcoming">Upcoming</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('nav-bar', Navbar);