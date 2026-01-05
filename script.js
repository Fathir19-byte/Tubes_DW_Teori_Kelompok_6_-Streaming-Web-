document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. DATA FILM UTAMA
       ========================================= */
    const movies = [
        { 
            id: 1,
            title: "Spy x Family Code: White", 
            year: "2023", 
            rating: "9.1/10",
            desc: "Perjalanan liburan keluarga Forger ke wilayah Frigis agar Anya bisa mencicipi makanan khas untuk memenangkan kompetisi memasak di Akademi Eden, namun liburan itu berubah menjadi misi penyelamatan dunia.",
            genres: ["Anime", "Action", "Comedy", "Family"], 
            poster: "./Asset/PosterFilm/Spy_×_Family_Code_White_movie_poster.png",
            background: "./Asset/BackgroundFilm/SpyxFamilyBackground.jpeg",
            trailerId: "6Gx7EG8sBdw",
            filmId: "6Gx7EG8sBdw" 
        },
        { 
            id: 2,
            title: "Haikyu!! The Dumpster Battle", 
            year: "2024", 
            rating: "8.8/10",
            desc: "Pertarungan legendaris di tempat sampah! Karasuno vs Nekoma akhirnya bertemu dalam pertandingan resmi yang penuh emosi dan strategi.",
            genres: ["Anime", "Sport", "Drama"], 
            poster: "./Asset/PosterFilm/haikyu-the-dumpster-battle.jpeg",
            background: "./Asset/BackgroundFilm/haikyu-the-dumpster-battleL.jpeg", 
            trailerId: "H51vnZt1ctU",
            filmId: "H51vnZt1ctU"
        },
        { 
            id: 3,
            title: "Agak Laen", 
            year: "2024", 
            rating: "7.9/10",
            desc: "Empat sekawan penjaga rumah hantu yang sepi pengunjung dan hampir bangkrut, yang akhirnya menemukan keuntungan tak terduga saat salah satu pengunjung meninggal karena kaget.",
            genres: ["Comedy", "Horror"], 
            poster: "./Asset/PosterFilm/Agak_Laen_(2024).jpg",
            background: "./Asset/BackgroundFilm/Agak_Laen_(2024)L.jpeg", 
            trailerId: "0YLSPyGA4h0",
            filmId: "0YLSPyGA4h0"
        },
        {
            id: 4,
            title: "Zootopia", 
            year: "2016", 
            rating: "8.0/10",
            desc: "Di kota hewan antropomorfik, Judy Hopps, seekor kelinci polisi pemula, harus bekerja sama dengan rubah penipu bernama Nick Wilde untuk memecahkan misteri konspirasi.",
            genres: ["Adventure", "Comedy", "Family"],
            poster: "./Asset/PosterFilm/Zootopia.jpg",
            background: "./Asset/BackgroundFilm/ZootopiaL.jpg", 
            trailerId: "jWM0ct-OLsM",
            filmId: "jWM0ct-OLsM"
        },
        {
            id: 5,
            title: "Avengers: Endgame", 
            year: "2019", 
            rating: "8.4/10",
            desc: "Setelah peristiwa Thanos yang melenyapkan setengah populasi alam semesta, para Avengers yang tersisa harus berkumpul kembali dan melakukan perjalanan waktu.",
            genres: ["Action", "Adventure", "Sci-Fi"],
            poster: "./Asset/PosterFilm/endgame.jpeg",
            background: "./Asset/BackgroundFilm/EndgameL.jpg", 
            trailerId: "TcMBFSGVi1c",
            filmId: "TcMBFSGVi1c"
        },
        {
            id: 6,
            title: "F1: The Movie", 
            year: "2025", 
            rating: "7.7/10", 
            desc: "Sonny Hayes, mantan pembalap Formula 1 yang sempat pensiun, kembali ke lintasan untuk menjadi mentor bagi rekan setimnya yang masih muda di tim APXGP.",
            genres: ["Action", "Drama", "Sport"],
            poster: "./Asset/PosterFilm/F1TheMovie.jpg",
            background: "./Asset/BackgroundFilm/F1TheMovieL.jpeg", 
            trailerId: "h1QzGGfrsbk",
            filmId: "h1QzGGfrsbk"
        },
    ];


    /* =========================================
       2. VARIABEL ELEMEN (SELECTOR)
       ========================================= */
    // Hero Section
    const heroSection = document.querySelector('.hero');
    const heroTitle = document.getElementById('heroTitle');
    const heroDesc = document.getElementById('heroDesc');
    const heroYear = document.getElementById('heroYear');
    const heroRating = document.getElementById('heroRating');
    const heroGenres = document.getElementById('heroGenres');
    const heroPoster = document.getElementById('heroPoster');
    const heroVideo = document.getElementById('heroVideo'); 
    
    // Tombol Hero
    const trailerBtn = document.getElementById('btnTrailer');
    const playBtn = document.getElementById('btnPlay');

    // Overlay Bioskop (Mode Nonton)
    const movieOverlay = document.getElementById('moviePlayerOverlay');
    const movieFrame = document.getElementById('movieFrame'); 
    const closeBtn = document.getElementById('closeBtn');


    /* =========================================
       3. FUNGSI GANTI HERO (UPDATE HERO)
       ========================================= */
    function updateHero(movie) {
        // Ganti Teks & Gambar
        heroTitle.textContent = movie.title;
        heroDesc.textContent = movie.desc;
        heroYear.textContent = movie.year;
        heroRating.textContent = movie.rating;
        heroPoster.src = movie.poster;
        heroSection.style.backgroundImage = `url('${movie.background}')`;

        // Ganti Genre di Hero
        heroGenres.innerHTML = '';
        movie.genres.forEach(genre => {
            const span = document.createElement('span');
            span.textContent = genre;
            heroGenres.appendChild(span);
        });

        // Simpan ID Video ke dataset 
        heroVideo.dataset.trailerId = movie.trailerId;
        heroVideo.dataset.filmId = movie.filmId;

        // Reset: Matikan trailer background jika sedang nyala
        stopHeroVideo();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function stopHeroVideo() {
        heroVideo.classList.remove('video-active');
        heroVideo.src = ""; // Stop YouTube
        if (trailerBtn) trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
    }


    /* =========================================
       4. LOGIKA TOMBOL TRAILER (Background Mode)
       ========================================= */
    if (trailerBtn) {
        trailerBtn.addEventListener('click', function() {
            const trailerId = heroVideo.dataset.trailerId;

            // Cek apakah video sedang nyala?
            if (heroVideo.classList.contains('video-active')) {
                // Kalau nyala, matikan
                stopHeroVideo();
            } else {
                // Kalau mati, nyalakan
                if (trailerId) {
                    // URL YouTube Autoplay Background
                    const url = `https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=0&controls=0&loop=1&playlist=${trailerId}&showinfo=0&rel=0`;
                    heroVideo.src = url;
                    heroVideo.classList.add('video-active');
                    trailerBtn.innerHTML = '<i class="fa fa-stop"></i> Stop Trailer';
                } else {
                    alert("Maaf, trailer belum tersedia.");
                }
            }
        });
    }


    /* =========================================
       5. LOGIKA TOMBOL PLAY (Cinema Mode / Bioskop)
       ========================================= */
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            const filmId = heroVideo.dataset.filmId;

            if (filmId) {
                // 1. Matikan Trailer Background dulu biar suara gak tabrakan
                stopHeroVideo();

                // 2. Munculkan Layar Hitam (Overlay)
                if (movieOverlay) movieOverlay.classList.add('active');

                // 3. Putar Film di Iframe Bioskop
                if (movieFrame) {
                    movieFrame.src = `https://www.youtube.com/embed/${filmId}?autoplay=1&rel=0`;
                }
            } else {
                alert("Maaf, film belum tersedia.");
            }
        });
    }

    // Tombol Close Bioskop
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // Tutup Layar Hitam
            if (movieOverlay) movieOverlay.classList.remove('active');
            
            // Matikan Video Film
            if (movieFrame) movieFrame.src = "";
        });
    }


    /* =========================================
       6. RENDER DAFTAR FILM & CLICK EVENT
       ========================================= */
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

            // Saat kartu diklik -> Update Hero ke film tersebut
            colDiv.addEventListener('click', () => {
                updateHero(movie);
            });

            movieContainer.appendChild(colDiv);
        });
    }

    displayMovies(movies);
    if(movies.length > 0) updateHero(movies[0]); 


    /* =========================================
       7. LOGIKA FILTER GENRE & SEARCH
       ========================================= */
    const genreButtons = document.querySelectorAll('.category-bar span');
    genreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            genreButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const selectedGenre = this.textContent.trim();

            if (selectedGenre === "All Movies" || selectedGenre === "Trending") {
                displayMovies(movies);
            } else {
                // Filter film berdasarkan genre
                const filteredMovies = movies.filter(movie => 
                    movie.genres.includes(selectedGenre)
                );
                displayMovies(filteredMovies);
            }
        });
    });

    // Search
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

});