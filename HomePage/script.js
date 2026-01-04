document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. DATA FILM LENGKAP (DATABASE)
       ========================================= */
    const movies = [
        { 
            id: 1,
            title: "Spy x Family Code: White", 
            year: "2023", 
            rating: "9.1/10",
            desc: "Loid memutuskan untuk membantu Anya memenangkan kompetisi memasak di Eden Academy dengan membuat makanan kesukaan direktur untuk mencegah penggantiannya dalam Operasi Strix.",
            genres: ["Anime", "Action", "Comedy", "Spy"],
            poster: "../Asset/PosterFilm/Spy_×_Family_Code_White_movie_poster.png",
            background: "../Asset/BackgroundFilm/SpyxFamilyBackground.jpeg",
            trailer: "../Asset/Trailer/SpyXFamily_Trailer.mp4" 
        },
        { 
            id: 2,
            title: "Haikyu!! The Dumpster Battle", 
            year: "2024", 
            rating: "8.8/10",
            desc: "Pertarungan legendaris di tempat sampah! Karasuno vs Nekoma akhirnya bertemu dalam pertandingan resmi yang penuh emosi dan strategi.",
            genres: ["Anime", "Sports", "Drama"],
            poster: "../Asset/PosterFilm/haikyu-the-dumpster-battle.jpeg",
            background: "../Asset/BackgroundFilm/HaikyuBackground.jpg", 
            trailer: "../Asset/Trailer/Haikyu_Trailer.mp4" 
        },
        { 
            id: 3,
            title: "Agak Laen", 
            year: "2024", 
            rating: "7.9/10",
            desc: "Empat sekawan penjaga rumah hantu mencari cara baru menakuti pengunjung demi menyelamatkan bisnis mereka dari kebangkrutan.",
            genres: ["Comedy", "Horror"],
            poster: "../Asset/PosterFilm/Agak_Laen_(2024).jpg",
            background: "../Asset/BackgroundFilm/AgakLaenBackground.jpg",
            trailer: "../Asset/Trailer/AgakLaen_Trailer.mp4" 
        },
        // ... Tambahkan film lain dengan format yang sama ...
    ];
    
    /* =========================================
       2. VARIABEL ELEMEN HERO
       ========================================= */
    const heroSection = document.querySelector('.hero'); // Untuk ganti background
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
        // 1. Ganti Teks
        heroTitle.textContent = movie.title;
        heroDesc.textContent = movie.desc;
        heroYear.textContent = movie.year;
        heroRating.textContent = movie.rating;
        heroPoster.src = movie.poster;

        // 2. Ganti Background CSS
        // Timpa style background-image langsung lewat JS
        heroSection.style.backgroundImage = `url('${movie.background}')`;

        // 3. Ganti Genre (Looping span baru)
        heroGenres.innerHTML = ''; // Hapus genre lama
        movie.genres.forEach(genre => {
            const span = document.createElement('span');
            span.textContent = genre;
            heroGenres.appendChild(span);
        });

        // 4. Ganti Sumber Video Trailer
        const videoSource = heroVideo.querySelector('source');
        videoSource.src = movie.trailer;
        heroVideo.load(); // Wajib direload agar video baru terbaca

        // 5. Reset Tombol Trailer (Matikan video jika sedang nyala)
        if (heroVideo.classList.contains('video-active')) {
            heroVideo.classList.remove('video-active');
            heroVideo.pause();
            heroVideo.muted = true;
            trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
        }

        // 6. Scroll ke Atas dengan Mulus agar user lihat perubahannya
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    /* =========================================
       4. RENDER DAFTAR FILM (BOOTSTRAP + CLICK EVENT)
       ========================================= */
    const movieContainer = document.getElementById('movieContainer');
    const searchInput = document.querySelector('.search-box input');

    function displayMovies(data) {
        movieContainer.innerHTML = ''; 

        if (data.length === 0) {
            movieContainer.innerHTML = '<p class="text-center text-white-50">Yahh, film tidak ditemukan...</p>';
            return;
        }

        data.forEach(movie => {
            // Kita bungkus kartunya dalam elemen DIV baru
            const colDiv = document.createElement('div');
            colDiv.className = "col-6 col-md-4 col-lg-2 mb-3";
            
            // Isi HTML Kartu
            colDiv.innerHTML = `
                <div class="movie-card h-100" style="cursor: pointer;">
                    <img src="${movie.poster}" alt="${movie.title}" style="width:100%; border-radius:12px;">
                    <h3 style="font-size:15px; margin-top:10px;">${movie.title}</h3>
                    <p style="opacity:0.6; font-size:13px;">${movie.year}</p>
                </div>
            `;

            // --- BAGIAN PENTING: TAMBAH EVENT KLIK ---
            // Saat kartu ini diklik, jalankan fungsi updateHero()
            colDiv.addEventListener('click', () => {
                updateHero(movie);
            });

            movieContainer.appendChild(colDiv);
        });
    }

    // Jalankan pertama kali
    displayMovies(movies);
    
    // Set Default Hero (Pakai data film pertama)
    if(movies.length > 0) {
        updateHero(movies[0]); 
    }


    /* =========================================
       5. LOGIKA TOMBOL TRAILER (SAMA SEPERTI DULU)
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

    /* =========================================
       6. LOGIKA SEARCH
       ========================================= */
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