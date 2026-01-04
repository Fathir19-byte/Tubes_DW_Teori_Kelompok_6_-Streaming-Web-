const trailerBtn = document.getElementById('btnTrailer');
const heroVideo = document.getElementById('heroVideo');

// Untuk Cek apakah elemen ditemukan sebelum menjalankan
if (trailerBtn && heroVideo) {
    trailerBtn.addEventListener('click', function() {
        if (heroVideo.classList.contains('video-active')) {
            // Matikan Video
            heroVideo.classList.remove('video-active');
            heroVideo.pause();
            trailerBtn.innerHTML = '<i class="fa fa-play"></i> Trailer';
        } else {
            // Nyalakan Video
            heroVideo.classList.add('video-active');
            heroVideo.play();
            trailerBtn.innerHTML = '<i class="fa fa-stop"></i> Stop Trailer';
        }
    });
} else {
    console.error("Tombol atau Video tidak ditemukan! Cek ID di HTML.");
}

document.addEventListener('DOMContentLoaded', () => {
    
    // definisikan elemen
    const searchInput = document.querySelector('.search-box input');
    const movieCards = document.querySelectorAll('.movie-card');
    const movieSection = document.querySelector('.movie-section');

    const noResultMessage = document.createElement('p');
    noResultMessage.textContent = "Yahh, film yang kamu cari tidak ada...";
    
    // Styling pesan error langsung via JS agar sesuai tema
    noResultMessage.style.color = "rgba(255, 255, 255, 0.7)";
    noResultMessage.style.textAlign = "center";
    noResultMessage.style.width = "100%";
    noResultMessage.style.fontSize = "18px";
    noResultMessage.style.marginTop = "20px";
    noResultMessage.style.display = "none";
    
    if (movieSection) {
        movieSection.appendChild(noResultMessage);
    }

    // Logika Pencarian
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            movieCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                
                // ngecek judul mengandung kata kunci pencarian atau engga
                if (title.includes(searchTerm)) {
                    card.style.display = "";
                    visibleCount++;
                } else {
                    card.style.display = "none";
                }
            });

            if (visibleCount === 0) {
                noResultMessage.style.display = "block";
            } else {
                noResultMessage.style.display = "none";
            }
        });
    }
});

// script.js

// 1. Ambil elemen-elemen yang diperlukan menggunakan ID dan Class
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenContent = document.querySelector('.hidden-content');
const showMoreContainer = document.querySelector('.show-more'); // Untuk menyembunyikan tombol

// Cek apakah elemen-elemen ditemukan sebelum menjalankan kode
if (showMoreBtn && hiddenContent) {
    // 2. Tambahkan event listener saat tombol diklik
    showMoreBtn.addEventListener('click', function() {
        
        // Toggle class 'visible' pada elemen yang tersembunyi
        hiddenContent.classList.toggle('visible');

        // Cek apakah konten sudah terlihat (class 'visible' ada)
        if (hiddenContent.classList.contains('visible')) {

            // Pilihan B: Sembunyikan tombol 'Show More' setelah semua konten ditampilkan
            if (showMoreContainer) {
                showMoreContainer.style.display = 'none';
            }
            
        } else {
        }
    });
}