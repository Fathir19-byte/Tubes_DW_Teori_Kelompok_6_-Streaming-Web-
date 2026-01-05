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
    
    // Styling pesan error
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