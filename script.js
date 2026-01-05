/* script.js */
document.addEventListener('DOMContentLoaded', () => {

    // Pengecekan pada file moviesData.js jika sudah terpanggil
    let movies = [];
    if (typeof allMoviesData !== 'undefined') {
        movies = allMoviesData;
    } else {
        console.error("ERROR: moviesData.js belum dimuat! Pastikan script src urutannya benar.");
    }

    const heroSection = document.querySelector('.hero');
    const heroTitle = document.getElementById('heroTitle');
    const heroDesc = document.getElementById('heroDesc');
    const heroYear = document.getElementById('heroYear');
    const heroRating = document.getElementById('heroRating');
    const heroGenres = document.getElementById('heroGenres');
    const heroPoster = document.getElementById('heroPoster');
    const heroVideo = document.getElementById('heroVideo');
    const trailerBtn = document.getElementById('btnTrailer');



    function updateHero(movie) {
        heroTitle.textContent = movie.title;
        heroDesc.textContent = movie.desc ? movie.desc : "Sinopsis belum tersedia untuk film ini.";
        heroYear.textContent = movie.year;
        heroRating.textContent = movie.rating ? movie.rating : "N/A";
        
        const bgImage = movie.background ? movie.background : movie.poster;
        heroPoster.src = movie.poster;
        heroSection.style.backgroundImage = `url('${bgImage}')`;

        heroGenres.innerHTML = '';
        if (movie.genres && movie.genres.length > 0) {
            movie.genres.forEach(genre => {
                const span = document.createElement('span');
                span.textContent = genre;
                heroGenres.appendChild(span);
            });
        }

        const videoSource = heroVideo.querySelector('source');
        if (videoSource) {
            videoSource.src = movie.trailer ? movie.trailer : "";
        }
        heroVideo.load();

        if (heroVideo.classList.contains('video-active')) {
            heroVideo.classList.remove('video-active');
            heroVideo.pause();
            heroVideo.muted = true;
            trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
            
            if (!movie.trailer) {
                trailerBtn.style.display = 'none';
            } else {
                trailerBtn.style.display = 'flex';
            }
        } else {
            if (!movie.trailer) {
                trailerBtn.style.display = 'none';
            } else {
                trailerBtn.style.display = 'flex';
            }
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    const movieContainer = document.getElementById('movieContainer');

    function displayMovies(data) {
        movieContainer.innerHTML = ''; 

        if (data.length === 0) {
            movieContainer.innerHTML = '<p class="text-center text-white-50 mt-5">Yahh, belum ada film di genre ini...</p>';
            return;
        }

        data.forEach(movie => {
            const colDiv = document.createElement('div');
            colDiv.className = "col-6 col-md-4 col-lg-2 mb-4"; 
            
            colDiv.innerHTML = `
                <div class="movie-card h-100" style="cursor: pointer;">
                    <img src="${movie.poster}" alt="${movie.title}" style="width:100%; border-radius:12px; object-fit: cover; aspect-ratio: 2/3;">
                    <h3 style="font-size:15px; margin-top:10px; color: white;">${movie.title}</h3>
                    <p style="opacity:0.6; font-size:13px; color: #ccc;">${movie.year}</p>
                </div>
            `;

            colDiv.addEventListener('click', () => {
                updateHero(movie);
            });

            movieContainer.appendChild(colDiv);
        });
    }

    displayMovies(movies);
    
    if(movies.length > 0) {
        updateHero(movies[0]); 
    }

    const genreButtons = document.querySelectorAll('.category-bar span');

    genreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            genreButtons.forEach(b => b.classList.remove('active'));
            
            this.classList.add('active');

            const selectedGenre = this.textContent.trim();

            if (selectedGenre === "Trending" || selectedGenre === "All Movies") {
                displayMovies(movies);
            } else {
                const filteredMovies = movies.filter(movie => 
                    movie.genres.includes(selectedGenre)
                );
                displayMovies(filteredMovies);
            }
        });
    });

    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            const filteredMovies = movies.filter(movie => 
                movie.title.toLowerCase().includes(keyword)
            );
            displayMovies(filteredMovies);
        });
    }

    if (trailerBtn && heroVideo) {
        trailerBtn.addEventListener('click', function() {
            if (heroVideo.classList.contains('video-active')) {
                heroVideo.classList.remove('video-active');
                heroVideo.pause();
                heroVideo.muted = true;
                trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
            } else {
                const videoSource = heroVideo.querySelector('source').src;
                if(videoSource && videoSource !== window.location.href) { 
                   heroVideo.muted = false;
                   heroVideo.volume = 1.0;
                   heroVideo.classList.add('video-active');
                   heroVideo.play();
                   trailerBtn.innerHTML = '<i class="fa fa-stop"></i> Stop Trailer';
                } else {
                   alert("Maaf, trailer belum tersedia untuk film ini.");
                }
            }
        });
    }

});