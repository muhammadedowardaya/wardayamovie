import '../component/card-movie.js';
import '../component/navbar.js';
import '../component/movie-trailer.js';

const axios = require('axios').default;

const navLink = document.querySelectorAll('.nav-link');

function hapusActive() {
    for (const list of navLink) {
        if (list.classList.contains('active')) {
            list.classList.remove('active');
        }
    }
}

navLink.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        hapusActive();

        const tujuan = item.getAttribute('href');
        const elementTujuan = document.querySelector(tujuan);

        // scroll keun gaes
        window.scrollTo(0, elementTujuan.offsetTop - 40);

        hapusActive();

        if (!item.classList.contains('active')) {
            item.classList.add('active');
        }

    })

})

const main = () => {

    const renderCardMovie = (responseJson, index, containerId) => {
        const urlImage = 'https://image.tmdb.org/t/p/w400';
        const movie = document.createElement('card-movie');
        const link = `https://api.themoviedb.org/3/movie/${responseJson.data.results[index].id}/videos?api_key=9171a762f85a9876cd40e0eef5a08a83`;
        movie.id = `${responseJson.data.results[index].id}`;
        movie.image = `${urlImage}${responseJson.data.results[index].poster_path}`;
        movie.title = `${responseJson.data.results[index].original_title ? responseJson.data.results[index].original_title : responseJson.data.results[index].original_name}`;
        movie.popularity = `${responseJson.data.results[index].popularity}`;
        movie.overview = `${responseJson.data.results[index].overview}`;
        movie.click = function (e) {
            e.preventDefault();
            axios.get(link).then(function(response){
                const movieTrailer = document.querySelector('movie-trailer');
                movieTrailer.urlVideo = `https://www.youtube.com/embed/${response.data.results[0].key}?controls=1`;
                movieTrailer.overview = movie.overview;
                movieTrailer.display = 'flex';
                movieTrailer.clickClose = function (e) {
                    e.preventDefault();
                    movieTrailer.display = 'none';
                }
            })
        }
        const container = document.querySelector(containerId);
        const div = document.createElement('div');
        div.classList.add('col-lg-3');
        div.classList.add('col-md-4');
        div.classList.add('col-sm-6');

        div.appendChild(movie);
        container.appendChild(div);
    }

    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=9171a762f85a9876cd40e0eef5a08a83&page=2&language=en-Us`)
        .then(function(responseJson){
            if (responseJson.error) {
                alert(responseJson.message);
            } else {
                const urlImage = 'https://image.tmdb.org/t/p/w500';
                const mySlides = document.querySelectorAll('.mySlides');
                mySlides.forEach((item, index) => {
                    item.children[0].setAttribute('src', `${urlImage}${responseJson.data.results[index].poster_path}`);
                    item.children[1].textContent = `${responseJson.data.results[index].original_title}`;

                    const urlVideo = `https://api.themoviedb.org/3/movie/${responseJson.data.results[index].id}/videos?api_key=9171a762f85a9876cd40e0eef5a08a83`;
                    axios.get(`${urlVideo}`).then(function(response){
                        item.children[2].setAttribute('href', `https://www.youtube.com/embed/${response.results[0].key}`);
                    })

                    item.children[2].addEventListener('click', function (e) {
                        const watch = document.querySelector('movie-trailer');
                        watch.urlVideo = item.children[2].getAttribute('href');
                        watch.overview = `${responseJson.data.results[index].overview}`
                        watch.display = 'flex';
                        watch.clickClose = function (e) {
                            e.preventDefault();
                            watch.display = 'none';
                        }

                        e.preventDefault();
                    })
                })

            }
        })

    const getUrlMovie = (url, containerId) => {
        axios.get(url)
            .then(function(responseJson){
                responseJson.data.results.forEach((item, index) => {
                    renderCardMovie(responseJson, index, containerId);
                })
            })
    }

    getUrlMovie(`https://api.themoviedb.org/3/trending/movie/day?api_key=9171a762f85a9876cd40e0eef5a08a83&language=en-US`, '#trending');
    getUrlMovie(`https://api.themoviedb.org/3/movie/upcoming?api_key=9171a762f85a9876cd40e0eef5a08a83&language=en-US&page=1`, '#upcoming');
    getUrlMovie(`https://api.themoviedb.org/3/movie/upcoming?api_key=9171a762f85a9876cd40e0eef5a08a83&language=en-US&page=2`, '#upcoming');
    getUrlMovie(`https://api.themoviedb.org/3/movie/upcoming?api_key=9171a762f85a9876cd40e0eef5a08a83&language=en-US&page=3`, '#upcoming');
    getUrlMovie(`https://api.themoviedb.org/3/movie/popular?api_key=9171a762f85a9876cd40e0eef5a08a83&language=en-US&page=1`, '#popular');
    getUrlMovie(`https://api.themoviedb.org/3/movie/popular?api_key=9171a762f85a9876cd40e0eef5a08a83&language=en-US&page=2`, '#popular');
    getUrlMovie(`https://api.themoviedb.org/3/movie/popular?api_key=9171a762f85a9876cd40e0eef5a08a83&language=en-US&page=3`, '#popular');
    getUrlMovie(`https://api.themoviedb.org/3/movie/top_rated?api_key=9171a762f85a9876cd40e0eef5a08a83&language=en-US&page=1`, '#top_rated');
    getUrlMovie(`https://api.themoviedb.org/3/movie/top_rated?api_key=9171a762f85a9876cd40e0eef5a08a83&language=en-US&page=2`, '#top_rated');


};

export default main;