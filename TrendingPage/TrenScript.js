document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. DATA FILM LENGKAP
       ========================================= */
    const movies = [
        {
            id: 1,
            title: "Bullet Train Explosion",
            director: "Shinji Higuchi",
            year: 2025,
            rating: "N/A",
            desc: "Ledakan kereta cepat yang memicu kekacauan besar.",
            genres: ["Action"],
            poster: "../Asset/PosterFilm/bulletTrainExplosion.jpg",
            background: "../Asset/BackgroundFilm/bulletTrainExplosionL.jpg"
        },
        {
            id: 2,
            title: "Migration",
            director: "Benjamin Renner",
            year: 2023,
            rating: "6.7/10",
            desc: "Keluarga bebek bermigrasi ke Jamaika.",
            genres: ["Adventure"],
            poster: "../Asset/PosterFilm/Migration.jpg",
            background: "../Asset/BackgroundFilm/MigrationL.jpg"
        },
        {
            id: 3,
            title: "Cowboy Bebop",
            director: "Shinichirō Watanabe",
            year: 1998,
            rating: "8.9/10",
            desc: "Petualangan pemburu hadiah di luar angkasa.",
            genres: ["Anime"],
            poster: "../Asset/PosterFilm/cowboyBebop.jpg",
            background: "../Asset/BackgroundFilm/cowboyBebopL.jpg"
        },
        {
            id: 4,
            title: "The Terminal",
            director: "Steven Spielberg",
            year: 2004,
            rating: "7.4/10",
            desc: "Seorang pria terjebak tinggal di bandara JFK.",
            genres: ["Comedy"],
            poster: "../Asset/PosterFilm/theTerminal.jpg",
            background: "../Asset/BackgroundFilm/theTerminalL.jpg"
        },
        {
            id: 5,
            title: "The Social Network",
            director: "David Fincher",
            year: 2010,
            rating: "7.8/10",
            desc: "Kisah berdirinya Facebook dan konflik hukum di baliknya.",
            genres: ["Drama"],
            poster: "../Asset/PosterFilm/theSocialNetwork.jpg",
            background: "../Asset/BackgroundFilm/theSocialNetworkL.jpg"
        },
        {
            id: 6,
            title: "Transformers One",
            director: "Josh Cooley",
            year: 2024,
            rating: "N/A",
            desc: "Asal usul Optimus Prime dan Megatron.",
            genres: ["Fantasy"],
            poster: "../Asset/PosterFilm/transformerOne.jpg",
            background: "../Asset/BackgroundFilm/transformerOneL.jpg"
        },
        {
            id: 7,
            title: "Mama",
            director: "Andy Muschietti",
            year: 2013,
            rating: "6.2/10",
            desc: "Dua gadis kecil diasuh oleh entitas misterius.",
            genres: ["Horror"],
            poster: "../Asset/PosterFilm/mama.jpg",
            background: "../Asset/BackgroundFilm/mamaL.jpg"
        },
        {
            id: 8,
            title: "More Than Blue",
            director: "Won Tae-yeon",
            year: 2009,
            rating: "7.5/10",
            desc: "Kisah cinta tragis yang menguras air mata.",
            genres: ["K-Drama"],
            poster: "../Asset/PosterFilm/moreThanBlue.jpg",
            background: "../Asset/BackgroundFilm/moreThanBlueL.jpg"
        },
        {
            id: 9,
            title: "Prisoners",
            director: "Denis Villeneuve",
            year: 2013,
            rating: "8.1/10",
            desc: "Seorang ayah mencari putrinya yang diculik.",
            genres: ["Mystery"],
            poster: "../Asset/PosterFilm/prisoners.jpg",
            background: "../Asset/BackgroundFilm/prisonersL.jpg"
        },
        {
            id: 10,
            title: "Titanic",
            director: "James Cameron",
            year: 1997,
            rating: "7.9/10",
            desc: "Cinta bersemi di kapal yang akan tenggelam.",
            genres: ["Romance"],
            poster: "../Asset/PosterFilm/Titanic.jpg",
            background: "../Asset/BackgroundFilm/TitanicL.jpg"
        },
        {
            id: 11,
            title: "Film belum dipilih",
            genres: ["Slice of Life"],
        },
         {
            id: 12,
            title: "Film belum dipilih",
            genres: ["Sci-Fi"],
        },
        { 
            id: 13,
            title: "Haikyu!! The Dumpster Battle", 
            year: "2024", 
            rating: "8.8/10",
            desc: "Pertarungan legendaris di tempat sampah! Karasuno vs Nekoma akhirnya bertemu dalam pertandingan resmi yang penuh emosi dan strategi.",
            genres: ["Sport"], 
            poster: "./Asset/PosterFilm/haikyu-the-dumpster-battle.jpeg",
            background: "./Asset/BackgroundFilm/haikyu-the-dumpster-battleL.jpeg", 
        },
        {
            id: 41,
            title: "Fight Club",
            director: "David Fincher",
            year: 1999,
            rating: "8.8/10",
            desc: "Pria insomnia membentuk klub pertarungan bawah tanah.",
            genres: ["Thriller"],
            poster: "Asset/PosterFilm/fightClub.jpg",
            background: "Asset/BackgroundFilm/fightClubL.jpg"
        },
    ];

    /* =========================================
       2. DEFINISI ELEMEN (SELECTOR)
       ========================================= */
    const heroSection = document.querySelector('.hero');
    const heroTitle = document.getElementById('heroTitle');
    const heroDesc = document.getElementById('heroDesc');
    const heroYear = document.getElementById('heroYear');
    const heroRating = document.getElementById('heroRating');
    const heroGenres = document.getElementById('heroGenres');
    const heroPoster = document.getElementById('heroPoster');
    const heroVideo = document.getElementById('heroVideo'); 
    
    const trailerBtn = document.getElementById('btnTrailer');
    const playBtn = document.getElementById('btnPlay');

    const movieOverlay = document.getElementById('moviePlayerOverlay');
    const movieFrame = document.getElementById('movieFrame');
    const closeBtn = document.getElementById('closeBtn');

    const movieContainer = document.getElementById('movieContainer');
    const genreButtons = document.querySelectorAll('.category-bar span');
    const searchInput = document.querySelector('.search-box input');

    /* =========================================
       3. FUNGSI UPDATE TAMPILAN HERO
       ========================================= */
    function updateHero(movie) {
        if (!movie) return;

        heroTitle.textContent = movie.title;
        heroDesc.textContent = movie.desc;
        heroYear.textContent = movie.year;
        heroRating.textContent = movie.rating;
        heroPoster.src = movie.poster;
        
        // Update Background (dengan gradient agar teks terbaca)
        const bgImage = movie.background ? movie.background : movie.poster;
        heroSection.style.backgroundImage = `url('${bgImage}')`;

        // Update Genre
        heroGenres.innerHTML = '';
        if(movie.genres) {
            movie.genres.forEach(genre => {
                const span = document.createElement('span');
                span.textContent = genre;
                heroGenres.appendChild(span);
            });
        }

        // Simpan ID ke dataset untuk digunakan tombol Play/Trailer
        heroVideo.dataset.trailerId = movie.trailerId || "";
        heroVideo.dataset.filmId = movie.filmId || "";

        // Stop video jika sedang berjalan saat ganti film
        stopHeroVideo();
    }

    function stopHeroVideo() {
        if (heroVideo) {
            heroVideo.classList.remove('video-active');
            heroVideo.src = ""; 
        }
        if (trailerBtn) trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
    }


    /* =========================================
       4. LOGIKA TOMBOL TRAILER & PLAY
       ========================================= */
    if (trailerBtn) {
        trailerBtn.addEventListener('click', function() {
            const trailerId = heroVideo.dataset.trailerId;
            if (heroVideo.classList.contains('video-active')) {
                stopHeroVideo();
            } else {
                if (trailerId) {
                    heroVideo.src = `https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=0&controls=0&loop=1&playlist=${trailerId}`;
                    heroVideo.classList.add('video-active');
                    trailerBtn.innerHTML = '<i class="fa fa-stop"></i> Stop Trailer';
                } else {
                    alert("Trailer belum tersedia.");
                }
            }
        });
    }

    if (playBtn) {
        playBtn.addEventListener('click', function() {
            const filmId = heroVideo.dataset.filmId;
            if (filmId) {
                stopHeroVideo();
                if (movieOverlay) movieOverlay.classList.add('active');
                if (movieFrame) movieFrame.src = `https://www.youtube.com/embed/${filmId}?autoplay=1`;
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (movieOverlay) movieOverlay.classList.remove('active');
            if (movieFrame) movieFrame.src = ""; 
        });
    }


    /* =========================================
       5. RENDER DAFTAR FILM
       ========================================= */
    function displayMovies(data) {
        if (!movieContainer) return;
        movieContainer.innerHTML = ''; 

        if (data.length === 0) {
            movieContainer.innerHTML = '<p class="text-center text-white-50 mt-5">Film tidak ditemukan...</p>';
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
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            movieContainer.appendChild(colDiv);
        });
    }


    /* =========================================
   7. LOGIKA FILTER KATEGORI (VERSI ANTI-ERROR)
   ========================================= */
    genreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Pindahkan class active
            genreButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Ambil teks tombol dan ubah ke huruf kecil
            const selectedGenre = this.textContent.trim().toLowerCase();
            
            let filteredMovies = [];

            if (selectedGenre === "all movies" || selectedGenre === "trending") {
                filteredMovies = movies;
            } else {
                // Kita cek genre film juga dengan huruf kecil agar cocok
                filteredMovies = movies.filter(movie => {
                    return movie.genres && movie.genres.some(g => g.toLowerCase() === selectedGenre);
                });
            }

            // Tampilkan daftar film
            displayMovies(filteredMovies);

            // Update Hero ke film pertama hasil filter
            if (filteredMovies.length > 0) {
                updateHero(filteredMovies[0]);
            }
        });
    });


    /* =========================================
       7. LOGIKA SEARCH
       ========================================= */
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            const filteredMovies = movies.filter(movie => 
                movie.title.toLowerCase().includes(keyword)
            );
            displayMovies(filteredMovies);
            if (filteredMovies.length > 0) {
                updateHero(filteredMovies[0]);
            }
        });
    }

    // Inisialisasi Tampilan Awal
    displayMovies(movies);
    if(movies.length > 0) updateHero(movies[0]); 

});