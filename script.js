document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. DATA FILM LENGKAP (MERGED & FIXED)
       ========================================= */
    const movies = [
        // --- DATA ASLI KAMU (ID 1-19) ---
        { 
            id: 1,
            title: "Spy x Family Code: White", 
            year: "2023", 
            duration: "1h 50m", 
            rating: "9.1/10",
            desc: "Perjalanan liburan keluarga Forger ke wilayah Frigis agar Anya bisa mencicipi makanan khas untuk memenangkan kompetisi memasak di Akademi Eden.",
            genres: ["Anime", "Action", "Comedy", "Family"], 
            poster: "./Asset/PosterFilm/Spy_x_Family_Code_White.jpg",
            background: "./Asset/BackgroundFilm/SpyxFamilyBackground.jpg",
            trailerId: "6Gx7EG8sBdw",
            filmId: "6Gx7EG8sBdw" 
        },
        { 
            id: 2,
            title: "Haikyu!! The Dumpster Battle", 
            year: "2024", 
            duration: "1h 25m", 
            rating: "8.8/10",
            desc: "Pertarungan legendaris di tempat sampah! Karasuno vs Nekoma akhirnya bertemu dalam pertandingan resmi.",
            genres: ["Anime", "Sports", "Drama"], 
            poster: "./Asset/PosterFilm/haikyu-the-dumpster-battle.jpeg",
            background: "./Asset/BackgroundFilm/haikyu-the-dumpster-battleL.jpg", 
            trailerId: "H51vnZt1ctU",
            filmId: "H51vnZt1ctU"
        },
        { 
            id: 3,
            title: "Agak Laen", 
            year: "2024", 
            duration: "1h 59m", 
            rating: "7.9/10",
            desc: "Empat sekawan penjaga rumah hantu yang sepi pengunjung dan hampir bangkrut menemukan keuntungan tak terduga.",
            genres: ["Comedy", "Horror"], 
            poster: "./Asset/PosterFilm/Agak_Laen_(2024).jpg",
            background: "./Asset/BackgroundFilm/Agak_Laen_(2024)L.jpg", 
            trailerId: "0YLSPyGA4h0",
            filmId: "0YLSPyGA4h0"
        },
        {
            id: 4,
            title: "Zootopia", 
            year: "2016", 
            duration: "1h 48m", 
            rating: "8.0/10",
            desc: "Judy Hopps, kelinci polisi pemula, harus bekerja sama dengan rubah penipu Nick Wilde.",
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
            duration: "3h 1m", 
            rating: "8.4/10",
            desc: "Para Avengers yang tersisa harus berkumpul kembali dan melakukan perjalanan waktu untuk membatalkan tindakan Thanos.",
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
            duration: "2h 5m", 
            rating: "7.7/10", 
            desc: "Sonny Hayes, mantan pembalap F1, kembali ke lintasan untuk menjadi mentor bagi rekan setimnya yang masih muda.",
            genres: ["Action", "Drama", "Sport"],
            poster: "./Asset/PosterFilm/F1TheMovie.jpg",
            background: "./Asset/BackgroundFilm/F1TheMovieL.jpg", 
            trailerId: "h1QzGGfrsbk", 
            filmId: "h1QzGGfrsbk"
        },
        {
            id: 7,
            title: "Joker", 
            year: "2019", 
            duration: "2h 2m", 
            rating: "8.4/10", 
            desc: "Arthur Fleck perlahan jatuh ke dalam kegilaan dan memicu revolusi kriminal di Gotham.",
            genres: ["Action", "Drama", "Thriller"],
            poster: "./Asset/PosterFilm/Joker.jpeg",
            background: "./Asset/BackgroundFilm/Joker.jpg", 
            trailerId: "zAGVQLHvwOY",
            filmId: "zAGVQLHvwOY"
        },
        {
            id: 8,
            title: "Moana", 
            year: "2016", 
            duration: "1h 47m", 
            rating: "7.6/10", 
            desc: "Seorang remaja petualang berlayar dalam misi berbahaya untuk menyelamatkan rakyatnya dibantu demigod Maui.",
            genres: ["Adventure","Comedy", "Family"],
            poster: "./Asset/PosterFilm/Moana.jpeg",
            background: "./Asset/BackgroundFilm/MoanaL.jpg", 
            trailerId: "LKFuXETZUsI",
            filmId: "LKFuXETZUsI"
        },
        {
            id: 9,
            title: "Migration", 
            year: "2023", 
            duration: "1h 23m",
            rating: "7.2/10", 
            desc: "Keluarga bebek Mallard bermigrasi ke Jamaika namun tersesat di hiruk-pikuk kota New York.",
            genres: ["Adventure", "Comedy", "Family"],
            poster: "./Asset/PosterFilm/The Migration Poster.webp", 
            background: "./Asset/BackgroundFilm/MigrationL.jpg", 
            trailerId: "cQfo0HJhCnE",
            filmId: "cQfo0HJhCnE"
        },
        {
            id: 10,
            title: "Fast & Furious 8", 
            year: "2017", 
            duration: "2h 16m",
            rating: "6.7/10", 
            desc: "Dom dipaksa mengkhianati keluarganya oleh seorang wanita misterius.",
            genres: ["Action", "Thriller"],
            poster: "./Asset/PosterFilm/Fast & Furious 8.jpeg", 
            background: "./Asset/BackgroundFilm/Fast&Furious8L.jpg", 
            trailerId: "E4pv3NaJRiM",
            filmId: "E4pv3NaJRiM"
        },
        {
            id: 11,
            title: "Ra.One", 
            year: "2011", 
            duration: "2h 36m",
            rating: "6.2/10", 
            desc: "Tokoh penjahat super game melarikan diri ke dunia nyata.",
            genres: ["Action", "Adventure", "Sci-Fi"],
            poster: "./Asset/PosterFilm/Ra_one.jpg",
            background: "./Asset/BackgroundFilm/Ra_OneL.jpg", 
            trailerId: "dweZuCAqgN4",
            filmId: "dweZuCAqgN4"
        },
        {
            id: 12,
            title: "Despicable Me 4", 
            year: "2024", 
            duration: "1h 34m",
            rating: "6.3/10", 
            desc: "Gru dan keluarga barunya menghadapi musuh baru Maxime Le Mal.",
            genres: ["Adventure", "Comedy", "Family"],
            poster: "./Asset/PosterFilm/Despicable-Me-4 Poster.jpg",
            background: "./Asset/BackgroundFilm/Despicable-Me-4L.jpeg", 
            trailerId: "qQlr9-rF32A",
            filmId: "qQlr9-rF32A"
        },
        {
            id: 13,
            title: "The Dark Knight", 
            year: "2008", 
            duration: "2h 32m",
            rating: "9.0/10", 
            desc: "Batman menghadapi ancaman anarkis dari Joker.",
            genres: ["Action", "Crime", "Drama"],
            poster: "./Asset/PosterFilm/theDarkKnight.jpg",
            background: "./Asset/BackgroundFilm/theDarkKnightL.jpeg", 
            trailerId: "EXeTwQWrcwY",
            filmId: "EXeTwQWrcwY"
        },
        {
            id: 14,
            title: "How to Make Millions Before Grandma Dies", 
            year: "2024", 
            duration: "2h 7m",
            rating: "8.2/10", 
            desc: "Seorang pemuda merawat neneknya demi warisan namun menemukan hal yang lebih berharga.",
            genres: ["Drama", "Family"],
            poster: "./Asset/PosterFilm/Before grandma dies poster.jpg",
            background: "./Asset/BackgroundFilm/Before grandma diesL.jpeg", 
            trailerId: "72a5y3-yC7I",
            filmId: "72a5y3-yC7I"
        },
        {
            id: 15,
            title: "The Shining", 
            year: "1980", 
            duration: "2h 26m",
            rating: "8.4/10", 
            desc: "Jack Torrance didorong ke dalam kegilaan di Hotel Overlook.",
            genres: ["Horror", "Drama"],
            poster: "./Asset/PosterFilm/theShining.jpg",
            background: "./Asset/BackgroundFilm/theShiningL.jpg", 
            trailerId: "S014oGZiSdI",
            filmId: "S014oGZiSdI"
        },
        {
            id: 16,
            title: "Titanic", 
            year: "1997", 
            duration: "3h 14m", 
            rating: "7.9/10", 
            desc: "Cinta bersemi di kapal yang akan tenggelam.",
            genres: ["Drama", "Romance"],
            poster: "./Asset/PosterFilm/Titanic.jpeg",
            background: "./Asset/BackgroundFilm/TitanicL.jpeg", 
            trailerId: "CHekzSiZjrY",
            filmId: "CHekzSiZjrY"
        },
        {
            id: 17,
            title: "Soundtrack #1", 
            year: "2022", 
            duration: "4 Episode", 
            rating: "7.8/10", 
            desc: "Dua sahabat tinggal bersama dan menemukan cinta.",
            genres: ["K-Drama", "Romance"],
            poster: "./Asset/PosterFilm/Soundtrack-1-001 Poster.jpeg",
            background: "./Asset/BackgroundFilm/Soundtrack #1L.jpeg", 
            trailerId: "3JjO4wbLg60",
            filmId: "3JjO4wbLg60"
        },
        {
            id: 18,
            title: "The Angel Next Door", 
            year: "2023", 
            duration: "12 Episode", 
            rating: "7.9/10", 
            desc: "Kisah cinta manis tetangga apartemen.",
            genres: ["Anime", "Romance", "Slice of Life"],
            poster: "./Asset/PosterFilm/Otonari no Tenshi Sama Poster.webp",
            background: "./Asset/BackgroundFilm/Otonari-no-Tenshi-SamaL.jpeg", 
            trailerId: "HSnC_tC0HjM",
            filmId: "HSnC_tC0HjM"
        },
        {
            id: 19,
            title: "No Time to Die", 
            year: "2021", 
            duration: "2h 43m", 
            rating: "7.3/10", 
            desc: "James Bond kembali beraksi menghadapi penjahat dengan senjata biologis.",
            genres: ["Action", "Adventure", "Thriller"],
            poster: "./Asset/PosterFilm/NoTimetoDie.jpg",
            background: "./Asset/BackgroundFilm/NoTimeToDie.jpeg", 
            trailerId: "BIhNsAtPbPI",
            filmId: "BIhNsAtPbPI"
        },

        // --- DATA TEMAN (ID 20-34) YANG SUDAH DIPERBAIKI (Added: Duration, Trailer, Path) ---
        {
            id: 20,
            title: "A Man Called Otto",
            year: "2022",
            duration: "2h 6m",
            rating: "7.5/10",
            desc: "Otto, pria pemarah yang menyerah pada kehidupan, berubah saat keluarga muda pindah ke dekatnya.",
            genres: ["Comedy", "Drama"],
            poster: "./Asset/PosterFilm/aManCalledOtto.jpg",
            background: "./Asset/BackgroundFilm/aManCalledOttoL.jpg",
            trailerId: "eFYUX9l-m5I",
            filmId: "eFYUX9l-m5I"
        },
        {
            id: 21,
            title: "The Wild Robot",
            year: "2024",
            duration: "1h 42m",
            rating: "8.3/10",
            desc: "Robot ROZZUM terdampar di pulau dan belajar hidup bersama hewan liar.",
            genres: ["Animation", "Adventure"],
            poster: "./Asset/PosterFilm/theWildRobot.jpg",
            background: "./Asset/BackgroundFilm/theWildRobotL.jpg",
            trailerId: "67vbA5ZJdKQ",
            filmId: "67vbA5ZJdKQ"
        },
        {
            id: 22,
            title: "The Truman Show",
            year: "1998",
            duration: "1h 43m",
            rating: "8.2/10",
            desc: "Seorang pria menyadari bahwa seluruh hidupnya adalah acara reality show TV.",
            genres: ["Comedy", "Drama"],
            poster: "./Asset/PosterFilm/theTrumanShow.jpg",
            background: "./Asset/BackgroundFilm/theTrumanShowL.jpg",
            trailerId: "dlnmQbPGuls",
            filmId: "dlnmQbPGuls"
        },
        {
            id: 23,
            title: "The Green Mile",
            year: "1999",
            duration: "3h 9m",
            rating: "8.6/10",
            desc: "Keajaiban misterius terjadi di blok penjara hukuman mati.",
            genres: ["Mystery", "Drama", "Fantasy"],
            poster: "./Asset/PosterFilm/theGreenMile.jpg",
            background: "./Asset/BackgroundFilm/theGreenMileL.jpg",
            trailerId: "Ki4haFrq0sg",
            filmId: "Ki4haFrq0sg"
        },
        {
            id: 24,
            title: "Nightcrawler",
            year: "2014",
            duration: "1h 57m",
            rating: "7.8/10",
            desc: "Sisi gelap jurnalisme kriminal di Los Angeles.",
            genres: ["Thriller", "Drama", "Crime"],
            poster: "./Asset/PosterFilm/nightcrawler.jpg",
            background: "./Asset/BackgroundFilm/nightcrawlerL.jpg",
            trailerId: "u1uP_8VJkDQ",
            filmId: "u1uP_8VJkDQ"
        },
        {
            id: 25,
            title: "It",
            year: "2017",
            duration: "2h 15m",
            rating: "7.3/10",
            desc: "Teror badut Pennywise menghantui kota Derry.",
            genres: ["Horror"],
            poster: "./Asset/PosterFilm/it.jpg",
            background: "./Asset/BackgroundFilm/itL.jpg",
            trailerId: "FnCdOQsX5kc",
            filmId: "FnCdOQsX5kc"
        },
        {
            id: 26,
            title: "Everything Everywhere All At Once",
            year: "2022",
            duration: "2h 19m",
            rating: "7.8/10",
            desc: "Petualangan melintasi multiverse untuk menyelamatkan dunia.",
            genres: ["Action", "Adventure", "Sci-Fi"],
            poster: "./Asset/PosterFilm/eeaao.jpg",
            background: "./Asset/BackgroundFilm/eeaaoL.jpg",
            trailerId: "wxN1T1uxQ2g",
            filmId: "wxN1T1uxQ2g"
        },
        {
            id: 27,
            title: "The Matrix",
            year: "1999",
            duration: "2h 16m",
            rating: "8.7/10",
            desc: "Seorang hacker menemukan kebenaran tentang realitasnya.",
            genres: ["Action", "Sci-Fi"],
            poster: "./Asset/PosterFilm/theMatrix.jpg",
            background: "./Asset/BackgroundFilm/theMatrixL.jpg",
            trailerId: "vKQi3bBA1y8",
            filmId: "vKQi3bBA1y8"
        },
        {
            id: 28,
            title: "WALL·E",
            year: "2008",
            duration: "1h 38m",
            rating: "8.4/10",
            desc: "Robot pembersih sampah memulai perjalanan antargalaksi.",
            genres: ["Animation", "Adventure", "Family"],
            poster: "./Asset/PosterFilm/wallE.jpg",
            background: "./Asset/BackgroundFilm/wallEL.jpg",
            trailerId: "cz1D_3Z5Tqc",
            filmId: "cz1D_3Z5Tqc"
        },
        {
            id: 29,
            title: "Up",
            year: "2009",
            duration: "1h 36m",
            rating: "8.3/10",
            desc: "Pria tua menerbangkan rumahnya menuju Paradise Falls.",
            genres: ["Animation", "Adventure", "Comedy"],
            poster: "./Asset/PosterFilm/up.jpg",
            background: "./Asset/BackgroundFilm/upL.jpg",
            trailerId: "ORFWdXl_zJ4",
            filmId: "ORFWdXl_zJ4"
        },
        {
            id: 30,
            title: "Free Guy",
            year: "2021",
            duration: "1h 55m",
            rating: "7.1/10",
            desc: "NPC dalam video game menyadari bahwa ia hidup di dalam game.",
            genres: ["Comedy", "Action", "Adventure"],
            poster: "./Asset/PosterFilm/free guy.jpg",
            background: "./Asset/BackgroundFilm/freeGuyL.jpg",
            trailerId: "X2m-08cOAbc",
            filmId: "X2m-08cOAbc"
        },
        {
            id: 31,
            title: "The Intouchables",
            year: "2011",
            duration: "1h 52m",
            rating: "8.5/10",
            desc: "Persahabatan unik antara bangsawan lumpuh dan pengasuhnya.",
            genres: ["Comedy", "Drama", "Biography"],
            poster: "./Asset/PosterFilm/theIntouchables.jpg",
            background: "./Asset/BackgroundFilm/theIntouchablesL.jpg",
            trailerId: "34WIbmXkewU",
            filmId: "34WIbmXkewU"
        },
        {
            id: 32,
            title: "Whiplash",
            year: "2014",
            duration: "1h 46m",
            rating: "8.5/10",
            desc: "Drummer muda didorong hingga batasnya oleh instruktur kejam.",
            genres: ["Drama", "Music"],
            poster: "./Asset/PosterFilm/whiplash.jpg",
            background: "./Asset/BackgroundFilm/whiplashL.jpg",
            trailerId: "7d_jQycdQGo",
            filmId: "7d_jQycdQGo"
        },
        {
            id: 33,
            title: "Parasite",
            year: "2019",
            duration: "2h 12m",
            rating: "8.5/10",
            desc: "Keluarga miskin menyusup ke kehidupan keluarga kaya.",
            genres: ["Thriller", "Drama"],
            poster: "./Asset/PosterFilm/parasite.jpg",
            background: "./Asset/BackgroundFilm/parasiteL.jpg",
            trailerId: "5xH0HfJHsaY",
            filmId: "5xH0HfJHsaY"
        },
        {
            id: 34,
            title: "Breaking Bad",
            year: "2008",
            duration: "5 Seasons",
            rating: "9.5/10",
            desc: "Guru kimia beralih profesi menjadi raja narkoba.",
            genres: ["Crime", "Drama", "Thriller"],
            poster: "./Asset/PosterFilm/breakingBad.jpg",
            background: "./Asset/BackgroundFilm/breakingBadL.jpg",
            trailerId: "HhesaQXLuRY",
            filmId: "HhesaQXLuRY"
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
    const heroVideo = document.getElementById('heroVideo'); 
    const heroDuration = document.getElementById('heroDuration'); // Pastikan ini ada di HTML
    
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
        if(!movie) return; // Mencegah error jika data kosong

        heroTitle.textContent = movie.title;
        heroDesc.textContent = movie.desc;
        heroYear.textContent = movie.year;
        
        // Cek jika elemen duration ada di HTML
        if(heroDuration) heroDuration.textContent = movie.duration || "-";
        
        heroRating.textContent = movie.rating;
        heroPoster.src = movie.poster;
        
        const bgImage = movie.background ? movie.background : movie.poster;
        heroSection.style.backgroundImage = `url('${bgImage}')`;

        heroGenres.innerHTML = '';
        if(movie.genres) {
            movie.genres.forEach(genre => {
                const span = document.createElement('span');
                span.textContent = genre;
                heroGenres.appendChild(span);
            });
        }

        heroVideo.dataset.trailerId = movie.trailerId || "";
        heroVideo.dataset.filmId = movie.filmId || "";

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

    if (playBtn) {
        playBtn.addEventListener('click', function() {
            const filmId = heroVideo.dataset.filmId;
            if (filmId) {
                stopHeroVideo();
                if (movieOverlay) movieOverlay.classList.add('active');
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
       5. RENDER FILM & SHOW MORE LOGIC
       ========================================= */
    const movieContainer = document.getElementById('movieContainer');
    let itemsToShow = 12; // Jumlah awal film yg ditampilkan
    let currentData = movies; // Data yang sedang aktif (bisa hasil filter)

    function renderMovies(data) {
        movieContainer.innerHTML = ''; 

        // Ambil hanya sebagian data sesuai itemsToShow
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

    // Logic Tombol Show More
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            itemsToShow += 6; // Tambah 6 film lagi saat diklik
            renderMovies(currentData);
        });
    }

    /* =========================================
       6. LOGIKA FILTER & SEARCH
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
            renderMovies(currentData);
        });
    });

    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            itemsToShow = 12; // Reset jumlah tampilan saat search
            
            currentData = movies.filter(movie => 
                movie.title.toLowerCase().includes(keyword)
            );
            renderMovies(currentData);
        });
    }

    // Inisialisasi awal
    renderMovies(movies);
    if(movies.length > 0) updateHero(movies[0]); 
});