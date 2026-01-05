document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. DATA FILM LENGKAP
       ========================================= */
    const movies = [
        { 
            id: 1,
            title: "Spy x Family Code: White", 
            year: "2023", 
            rating: "9.1/10",
            desc: "Perjalanan liburan keluarga Forger ke wilayah Frigis agar Anya bisa mencicipi makanan khas untuk memenangkan kompetisi memasak di Akademi Eden, namun liburan itu berubah menjadi misi penyelamatan dunia saat Anya menemukan rahasia yang mengancam perdamaian.",
            genres: ["Anime", "Action", "Comedy", "Family"], 
            poster: "./Asset/PosterFilm/Spy_×_Family_Code_White_movie_poster.png",
            background: "./Asset/BackgroundFilm/SpyxFamilyBackground.jpeg",
            trailer: "./Asset/Trailer/SpyXFamily_Trailer.mp4" 
        },
        { 
            id: 2,
            title: "Haikyu!! The Dumpster Battle", 
            year: "2024", 
            rating: "8.8/10",
            desc: "Meskipun menghadapi persaingan yang ketat, tim voli SMA Karasuno berhasil melaju dari babak penyisihan turnamen Harutaka di prefektur Miyagi untuk mencapai babak ketiga.",
            genres: ["Anime", "Sports", "Drama"], 
            poster: "./Asset/PosterFilm/haikyu-the-dumpster-battle.jpeg",
            background: "./Asset/BackgroundFilm/haikyu-the-dumpster-battleL.jpeg",
            trailer: "./Asset/Trailer/HAIKYU!! THE DUMPSTER BATTLE 🏐 - Cinépolis Indonesia (1).mp4"
        },
        { 
            id: 3,
            title: "Agak Laen", 
            year: "2024", 
            rating: "7.9/10",
            desc: "Empat sekawan penjaga rumah hantu yang sepi pengunjung dan hampir bangkrut, yang akhirnya menemukan keuntungan tak terduga saat salah satu pengunjung meninggal karena kaget, lalu mereka menyembunyikan mayatnya dan rumah hantu mereka jadi viral.",
            genres: ["Comedy", "Horror"], 
            poster: "./Asset/PosterFilm/Agak_Laen_(2024).jpg",
            background: "./Asset/BackgroundFilm/Agak_Laen_(2024)L.jpeg",
            trailer: "./Asset/Trailer/Agak Laen Trailer.mp4" 
        },
        {
            id: 4,
            title: "Zootopia", 
            year: "2016", 
            rating: "8.0/10",
            desc: "Di kota hewan antropomorfik, Judy Hopps, seekor kelinci polisi pemula, harus bekerja sama dengan rubah penipu bernama Nick Wilde untuk memecahkan misteri konspirasi yang mengancam keharmonisan kota.",
            genres: ["Adventure", "Comedy", "Family"],
            poster: "./Asset/PosterFilm/Zootopia.jpg",
            background: "./Asset/BackgroundFilm/ZootopiaL.jpg",
            trailer: "./Asset/Trailer/ZootopiaTrailer.mp4"
        },
        {
            id: 5,
            title: "Avengers: Endgame", 
            year: "2019", 
            rating: "8.4/10",
            desc: "Setelah peristiwa Thanos yang melenyapkan setengah populasi alam semesta, para Avengers yang tersisa harus berkumpul kembali dan melakukan perjalanan waktu untuk membatalkan tindakan Thanos demi memulihkan keteraturan alam semesta.",
            genres: ["Action", "Adventure", "Sci-Fi"],
            poster: "./Asset/PosterFilm/endgame.jpeg",
            background: "./Asset/BackgroundFilm/EndgameL.jpg",
            trailer: "./Asset/Trailer/Endgametrailer.mp4"
        }
    ];

    
    /* =========================================
       2. VARIABEL ELEMEN HERO
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


    /* =========================================
       3. FUNGSI GANTI HERO (UPDATE HERO)
       ========================================= */
    function updateHero(movie) {
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

        // Ganti Trailer
        const videoSource = heroVideo.querySelector('source');
        if (videoSource) videoSource.src = movie.trailer;
        heroVideo.load();

        // Reset Video Player
        if (heroVideo.classList.contains('video-active')) {
            heroVideo.classList.remove('video-active');
            heroVideo.pause();
            heroVideo.muted = true;
            trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    /* =========================================
       4. RENDER DAFTAR FILM
       ========================================= */
    const movieContainer = document.getElementById('movieContainer');

    function displayMovies(data) {
        movieContainer.innerHTML = ''; 

        if (data.length === 0) {
            // Pesan jika genre kosong
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

    // Tampilkan semua film saat pertama kali buka
    displayMovies(movies);
    if(movies.length > 0) updateHero(movies[0]); 


    /* =========================================
       5. LOGIKA FILTER GENRE 
       ========================================= */
    const genreButtons = document.querySelectorAll('.category-bar span');

    genreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // 1. Hapus class 'active' dari semua tombol dulu
            genreButtons.forEach(b => b.classList.remove('active'));
            
            // 2. Tambahkan class 'active' ke tombol yang diklik (biar ada garis merah)
            this.classList.add('active');

            // 3. Ambil nama genre dari teks tombol
            const selectedGenre = this.textContent.trim();

            // 4. Logika Filtering
            if (selectedGenre === "Trending") {
                // Kalau klik Trending, tampilkan SEMUA film
                displayMovies(movies);
            } else {
                // Kalau klik genre lain, cari film yang punya genre tersebut
                const filteredMovies = movies.filter(movie => 
                    movie.genres.includes(selectedGenre)
                );
                displayMovies(filteredMovies);
            }
        });
    });


    /* =========================================
       6. LOGIKA SEARCH
       ========================================= */
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


    /* =========================================
       7. LOGIKA TRAILER BUTTON
       ========================================= */
    if (trailerBtn && heroVideo) {
        trailerBtn.addEventListener('click', function() {
            if (heroVideo.classList.contains('video-active')) {
                heroVideo.classList.remove('video-active');
                heroVideo.pause();
                heroVideo.muted = true;
                trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
            } else {
                heroVideo.muted = false;
                heroVideo.volume = 1.0;
                heroVideo.classList.add('video-active');
                heroVideo.play();
                trailerBtn.innerHTML = '<i class="fa fa-stop"></i> Stop Trailer';
            }
        });
    }

});