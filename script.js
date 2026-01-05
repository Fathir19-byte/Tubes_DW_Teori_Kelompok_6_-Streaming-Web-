document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. DATA FILM LENGKAP (SUDAH DIGABUNG DISINI)
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
            genres: ["Anime", "Sports", "Drama"], 
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
            title: "F1",  
            year: "2025", 
            rating: "7.7/10", 
            desc: "Sonny Hayes, mantan pembalap Formula 1 yang sempat pensiun, kembali ke lintasan untuk menjadi mentor bagi rekan setimnya yang masih muda di tim APXGP.",
            genres: ["Action", "Drama", "Sport"],
            poster: "./Asset/PosterFilm/F1TheMovie.jpg",
            background: "./Asset/BackgroundFilm/F1TheMovieL.jpeg", 
            trailerId: "h1QzGGfrsbk", 
            filmId: "h1QzGGfrsbk"
        }
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
    const heroVideo = document.getElementById('heroVideo'); // Iframe Background
    
    const trailerBtn = document.getElementById('btnTrailer');
    const playBtn = document.getElementById('btnPlay');

    const movieOverlay = document.getElementById('moviePlayerOverlay');
    const movieFrame = document.getElementById('movieFrame');
    const closeBtn = document.getElementById('closeBtn');

    // Button Show More
    const showMoreBtn = document.getElementById('showMoreBtn'); 

    /* =========================================
       3. FUNGSI UPDATE TAMPILAN HERO
       ========================================= */
    function updateHero(movie) {
        heroTitle.textContent = movie.title;
        heroDesc.textContent = movie.desc;
        heroYear.textContent = movie.year;
        heroRating.textContent = movie.rating;
        heroPoster.src = movie.poster;
        
        // Cek background
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

        // SIMPAN ID YOUTUBE KE DATASET
        heroVideo.dataset.trailerId = movie.trailerId || "";
        heroVideo.dataset.filmId = movie.filmId || "";

        // Reset Video saat ganti film
        stopHeroVideo();

        stopHeroVideo();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function stopHeroVideo() {
        heroVideo.classList.remove('video-active');
        heroVideo.src = ""; 
        if (trailerBtn) trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
    }

    /* =========================================
       4. EVENT LISTENER BUTTONS
       ========================================= */
    if (trailerBtn) {
        trailerBtn.addEventListener('click', function() {
            const trailerId = heroVideo.dataset.trailerId;
            if (heroVideo.classList.contains('video-active')) {
                stopHeroVideo();
            } else {
                if (trailerId) {
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
       4. LOGIKA TOMBOL TRAILER (BACKGROUND)
       ========================================= */
    if (trailerBtn) {
        trailerBtn.addEventListener('click', function() {
            const trailerId = heroVideo.dataset.trailerId;

            if (heroVideo.classList.contains('video-active')) {
                stopHeroVideo(); // Matikan
            } else {
                if (trailerId) {
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
       5. LOGIKA TOMBOL PLAY (BIOSKOP)
       ========================================= */
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            const filmId = heroVideo.dataset.filmId;

            if (filmId) {
                stopHeroVideo(); // Matikan trailer background
                if (movieOverlay) movieOverlay.classList.add('active'); // Buka Bioskop
                if (movieFrame) {
                    movieFrame.src = `https://www.youtube.com/embed/${filmId}?autoplay=1&rel=0`;
                }
            } else {
                alert("Maaf, film belum tersedia.");
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
       6. RENDER DAFTAR FILM
       ========================================= */
    const movieContainer = document.getElementById('movieContainer');
    let itemsToShow = 12; // Jumlah awal film yg ditampilkan
    let currentData = movies; // Data yang sedang aktif (bisa hasil filter)

    function renderMovies(data) {
        movieContainer.innerHTML = ''; 

        // PERBAIKAN 1: Definisikan visibleMovies
        const visibleMovies = data.slice(0, itemsToShow);

        if (visibleMovies.length === 0) {
            movieContainer.innerHTML = '<p class="text-center text-white-50 mt-5">Film tidak ditemukan...</p>';
            if(showMoreBtn) showMoreBtn.style.display = 'none';
            return;
        }

        visibleMovies.forEach(movie => {
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

        // Atur tombol Show More
        if(showMoreBtn) {
            if(itemsToShow >= data.length) {
                showMoreBtn.style.display = 'none'; // Sembunyikan jika semua sudah tampil
            } else {
                showMoreBtn.style.display = 'block'; // Tampilkan jika masih ada sisa
            }
        }
    }

    // Tambahkan Logic Tombol Show More (Tadi belum ada)
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            itemsToShow += 6;
            renderMovies(currentData);
        });
    }

    // PERBAIKAN 2: Panggil renderMovies, bukan displayMovies
    renderMovies(movies);
    if(movies.length > 0) updateHero(movies[0]); 


    /* =========================================
       7. LOGIKA FILTER & SEARCH
       ========================================= */
    const genreButtons = document.querySelectorAll('.category-bar span');
    genreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            genreButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const selectedGenre = this.textContent.trim();
            itemsToShow = 12; // Reset jumlah tampilan saat ganti kategori

            if (selectedGenre === "Trending" || selectedGenre === "All Movies") {
                currentData = movies;
            } else {
                currentData = movies.filter(movie => 
                    movie.genres && movie.genres.includes(selectedGenre)
                );
            }
            renderMovies(currentData); // Panggil renderMovies yang benar
        });
    });

    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            itemsToShow = 12; 
            
            currentData = movies.filter(movie => 
                movie.title.toLowerCase().includes(keyword)
            );
            renderMovies(currentData); // Panggil renderMovies yang benar
        });
    }
});


    /* =========================================
       7. LOGIKA FILTER & SEARCH
       ========================================= */
    const genreButtons = document.querySelectorAll('.category-bar span');
    genreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            genreButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const selectedGenre = this.textContent.trim();
            if (selectedGenre === "Trending" || selectedGenre === "All Movies") {
                currentData = movies;
            } else {
                const filteredMovies = movies.filter(movie => 
                    movie.genres && movie.genres.includes(selectedGenre)
                );
            }
            renderMovies(currentData);
        });
   

    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            itemsToShow = 12; // Reset jumlah tampilan saat search
            
            currentData = movies.filter(movie => 
                movie.title.toLowerCase().includes(keyword)
            );
            displayMovies(filteredMovies);
        });
    }
});