document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. DATA FILM LENGKAP (SUDAH DIGABUNG DISINI)
       ========================================= */
    const movies = [
        { 
            id: 1,
            title: "Spy x Family Code: White", 
            year: "2023", 
            duration: "1h 50m", 
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
            duration: "1h 25m", 
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
            duration: "1h 59m", 
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
            duration: "1h 48m", 
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
            duration: "3h 1m", 
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
            duration: "2h 5m", 
            rating: "7.7/10", 
            desc: "Sonny Hayes, mantan pembalap Formula 1 yang sempat pensiun, kembali ke lintasan untuk menjadi mentor bagi rekan setimnya yang masih muda di tim APXGP.",
            genres: ["Action", "Drama", "Sport"],
            poster: "./Asset/PosterFilm/F1TheMovie.jpg",
            background: "./Asset/BackgroundFilm/F1TheMovieL.jpeg", 
            trailerId: "h1QzGGfrsbk", 
            filmId: "h1QzGGfrsbk"
        },
        {
            id: 7,
            title: "Joker", 
            year: "2019", 
            duration: "2h 2m", 
            rating: "8.4/10", 
            desc: "Arthur Fleck, seorang komedian gagal yang merasa terasing di Kota Gotham, perlahan jatuh ke dalam kegilaan dan memicu revolusi kriminal yang mengubah nasib kota tersebut selamanya.",
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
            desc: "Seorang remaja petualang berlayar dalam misi berbahaya untuk menyelamatkan rakyatnya, dibantu oleh demigod Maui, demi mengembalikan jantung Te Fiti dan memulihkan keseimbangan lautan.",
            genres: ["Adventure","Comedy", "Family"],
            poster: "./Asset/PosterFilm/Moana.jpeg",
            background: "./Asset/BackgroundFilm/MoanaL.jpg", 
            trailerId: "LKFuXETZUsI",
            filmId: "LKFuXETZUsI"
        },
        {
            id: 9,
            title: "The Migration", 
            year: "2023", 
            duration: "1h 23m",
            rating: "7.2/10", 
            desc: "Keluarga bebek yang protektif akhirnya memutuskan untuk pergi berpetualang dan bermigrasi ke Jamaika, namun rencana mereka berantakan saat mereka tersesat di tengah hiruk-pikuk kota New York.",
            genres: ["Adventure", "Comedy", "Family"],
            poster: "./Asset/PosterFilm/The Migration Poster.webp",
            background: "./Asset/BackgroundFilm/MigrationL.jpg", 
            trailerId: "LZbTMiPpBIo",
            filmId: "LZbTMiPpBIo"
        },
        {
            id: 10,
            title: "Fast & Furious 8", 
            year: "2017", 
            duration: "2h 16m",
            rating: "6.7/10", 
            desc: "Saat Dom dan Letty sedang menikmati bulan madu, seorang wanita misterius memaksa Dom untuk mengkhianati keluarganya dan kembali ke dunia kejahatan yang tidak bisa ia hindari.",
            genres: ["Action", "Thriller"],
            poster: "./Asset/PosterFilm/Fast & Furious 8.jpeg",
            background: "./Asset/BackgroundFilm/Fast&Furious8L.jpg", 
            trailerId: "NxhEZG0k9_w",
            filmId: "NxhEZG0k9_w"
        },
        {
            id: 11,
            title: "Ra.One", 
            year: "2011", 
            duration: "2h 36m",
            rating: "6.2/10", 
            desc: "Seorang desainer game menciptakan tokoh penjahat super yang tak terkalahkan bernama Ra.One. Kekacauan terjadi ketika Ra.One melarikan diri ke dunia nyata, memaksa G.One sang pahlawan game untuk ikut keluar demi menyelamatkan keluarga penciptanya.",
            genres: ["Action", "Adventure", "Sci-Fi"],
            poster: "./Asset/PosterFilm/Ra_One (2011).jpeg",
            background: "./Asset/BackgroundFilm/Ra_OneL.jpeg", 
            trailerId: "prRdhKyGRm8",
            filmId: "prRdhKyGRm8"
        },
        {
            id: 12,
            title: "Despicable Me 4", 
            year: "2024", 
            duration: "1h 34m",
            rating: "6.3/10", 
            desc: "Gru menyambut anggota baru di keluarganya, Gru Jr., yang berniat menyiksa ayahnya. Namun, keluarga mereka terpaksa melarikan diri ketika musuh baru, Maxime Le Mal, muncul untuk membalas dendam.",
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
            desc: "Batman, Letnan Gordon, dan Jaksa Wilayah Harvey Dent bersekutu untuk membongkar sindikat kriminal Gotham, namun mereka dihadang oleh dalang kriminal anarkis yang dikenal sebagai The Joker.",
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
            desc: "Seorang pemuda rela berhenti bekerja demi merawat neneknya yang sakit keras, dengan motif tersembunyi untuk menjadi pewaris tunggal harta kekayaannya, namun ia justru menemukan hal yang lebih berharga daripada uang.",
            genres: ["Drama", "Family"],
            poster: "./Asset/PosterFilm/Before grandma dies poster.jpg",
            background: "./Asset/BackgroundFilm/Before grandma diesL.jpeg", 
            trailerId: "0lpXPWKpSY4",
            filmId: "0lpXPWKpSY4"
        },
        {
        id: 15,
        title: "The Shining", 
        year: "1980", 
        duration: "2h 26m",
        rating: "8.4/10", 
        desc: "Jack Torrance menerima pekerjaan sebagai penjaga musim dingin di Hotel Overlook yang terisolasi, namun kehadiran roh jahat di hotel tersebut perlahan mendorongnya ke dalam kegilaan dan membahayakan istri serta putranya.",
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
            desc: "Seorang aristokrat berusia 17 tahun jatuh cinta dengan seniman miskin namun baik hati di atas kapal R.M.S. Titanic yang mewah namun bernasib malang.",
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
            desc: "Dua sahabat yang telah berteman selama 20 tahun harus tinggal bersama dalam satu rumah selama dua minggu untuk menulis lirik lagu, di mana perasaan cinta perlahan mulai tumbuh di antara mereka.",
            genres: ["K-Drama", "Romance"],
            poster: "./Asset/PosterFilm/Soundtrack-1-001 Poster.jpeg",
            background: "./Asset/BackgroundFilm/Soundtrack #1L.jpeg", 
            trailerId: "jcQhT_HZx8s",
            filmId: "jcQhT_HZx8s"
        },
        {
            id: 18,
            title: "The Angel Next Door Spoils Me Rotten", 
            year: "2023", 
            duration: "12 Episode", 
            rating: "7.9/10", 
            desc: "Amane Fujimiya tinggal sendirian dengan gaya hidup berantakan, sampai gadis populer di sekolahnya, Mahiru Shiina (Si Malaikat), yang tinggal tepat di sebelah apartemennya, mulai merawat dan memasakkan makanan untuknya.",
            genres: ["Anime", "Romance", "Slice of Life"],
            poster: "./Asset/PosterFilm/Otonari no Tenshi Sama Poster.webp",
            background: "./Asset/BackgroundFilm/Otonari-no-Tenshi-SamaL.jpeg", 
            trailerId: "F7Uvx8zWYRU",
            filmId: "F7Uvx8zWYRU"
        },
        {
            id: 19,
            title: "No Time to Die", 
            year: "2021", 
            duration: "2h 43m", 
            rating: "7.3/10", 
            desc: "James Bond yang telah pensiun terpaksa kembali beraksi ketika teman lamanya dari CIA meminta bantuan, menuntunnya ke jejak penjahat misterius yang memegang teknologi senjata biologis berbahaya.",
            genres: ["Action", "Adventure", "Thriller"],
            poster: "./Asset/PosterFilm/NoTimeToDie.jpeg",
            background: "./Asset/BackgroundFilm/NoTimetoDie.jpg", 
            trailerId: "BIhNsAtPbPI",
            filmId: "BIhNsAtPbPI"
        },
        {
            id: 20,
            title: "A Man Called Otto",
            year: "2022",
            duration: "2h 6m",
            rating: "7.5/10",
            desc: "Otto, seorang pria pemarah yang menyerah pada kehidupan setelah kehilangan istrinya, perlahan berubah ketika sebuah keluarga muda pindah ke seberang rumahnya.",
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
            desc: "Sebuah robot bernama ROZZUM unit 7134 terdampar di pulau tak berpenghuni dan harus belajar beradaptasi dengan lingkungan keras serta membangun hubungan dengan hewan-hewan liar.",
            genres: ["Animation", "Adventure", "Sci-Fi"],
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
            desc: "Truman Burbank menjalani kehidupan yang tampak sempurna, tanpa menyadari bahwa ia sebenarnya adalah bintang utama dari sebuah acara reality show yang ditonton seluruh dunia.",
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
            desc: "Kehidupan para penjaga penjara hukuman mati berubah selamanya ketika mereka kedatangan narapidana misterius bernama John Coffey yang memiliki kekuatan penyembuhan ajaib.",
            genres: ["Crime", "Drama", "Fantasy"],
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
            desc: "Seorang pencuri amatir beralih profesi menjadi jurnalis kriminal lepas di Los Angeles, namun ambisinya membuatnya menghalalkan segala cara demi mendapatkan rekaman berita paling sensasional.",
            genres: ["Crime", "Drama", "Thriller"],
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
            desc: "Sekelompok anak-anak yang di-bully bersatu untuk memusnahkan monster berubah wujud yang menyamar sebagai badut bernama Pennywise dan memangsa anak-anak di kota Derry.",
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
            desc: "Seorang imigran Tionghoa paruh baya terseret ke dalam petualangan gila di mana ia harus menyelamatkan dunia dengan menjelajahi alam semesta lain dan menghubungkan dirinya dengan versi lain dari hidupnya.",
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
            desc: "Seorang hacker komputer belajar dari para pemberontak misterius tentang sifat sebenarnya dari realitasnya dan perannya dalam perang melawan pengendalinya.",
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
            desc: "Di masa depan yang jauh, sebuah robot pengumpul sampah kecil secara tidak sengaja memulai perjalanan luar angkasa yang pada akhirnya akan menentukan nasib umat manusia.",
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
            desc: "Carl Fredricksen yang berusia 78 tahun bepergian ke Paradise Falls dengan rumahnya yang dilengkapi balon, tanpa sengaja membawa serta seorang pramuka muda.",
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
            desc: "Seorang teller bank menemukan bahwa dia sebenarnya adalah karakter non-pemain (NPC) di dalam video game dunia terbuka yang brutal dan memutuskan untuk menjadi pahlawan dalam ceritanya sendiri.",
            genres: ["Action", "Adventure", "Comedy"],
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
            desc: "Setelah menjadi lumpuh akibat kecelakaan paralayang, seorang bangsawan kaya mempekerjakan seorang pemuda dari perumahan kumuh sebagai pengasuhnya.",
            genres: ["Biography", "Comedy", "Drama"],
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
            desc: "Seorang drummer jazz muda yang menjanjikan mendaftar di konservatorium musik yang kejam di mana impiannya akan kehebatan dimentori oleh instruktur yang menakutkan.",
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
            desc: "Keserakahan dan diskriminasi kelas mengancam hubungan simbiosis yang baru terbentuk antara keluarga Park yang kaya dan klan Kim yang miskin.",
            genres: ["Drama", "Thriller"],
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
            desc: "Seorang guru kimia sekolah menengah yang didiagnosis menderita kanker paru-paru yang tidak dapat dioperasi beralih ke pembuatan dan penjualan metamfetamin demi masa depan keluarganya.",
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
    const heroDuration = document.getElementById('heroDuration'); 
    
    const trailerBtn = document.getElementById('btnTrailer');
    const playBtn = document.getElementById('btnPlay');

    const movieOverlay = document.getElementById('moviePlayerOverlay');
    const movieFrame = document.getElementById('movieFrame');
    const closeBtn = document.getElementById('closeBtn');


    /* =========================================
       3. FUNGSI UPDATE TAMPILAN HERO
       ========================================= */
    function updateHero(movie) {
        heroTitle.textContent = movie.title;
        heroDesc.textContent = movie.desc;
        heroYear.textContent = movie.year;
        heroDuration.textContent = movie.duration;
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

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function stopHeroVideo() {
        heroVideo.classList.remove('video-active');
        heroVideo.src = ""; 
        if (trailerBtn) trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
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

    function displayMovies(data) {
        movieContainer.innerHTML = ''; 

        if (data.length === 0) {
            // Kalau data kosong, muncul pesan ini
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
            });

            movieContainer.appendChild(colDiv);
        });
    }

    displayMovies(movies);
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
            if (selectedGenre === "Trending" || selectedGenre === "All Movies") {
                displayMovies(movies);
            } else {
                const filteredMovies = movies.filter(movie => 
                    movie.genres && movie.genres.includes(selectedGenre)
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
});