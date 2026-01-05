document.addEventListener('DOMContentLoaded', () => {
    
    if (typeof allMoviesData === 'undefined') {
        console.error("Error: moviesData.js belum dimuat!");
        return;
    }

    const movies = allMoviesData;
    const movieGrid = document.getElementById('moviesGrid');
    const genreButtons = document.querySelectorAll('.category-bar span');
    const searchInput = document.getElementById('movieSearchInput');

    function displayMovies(data) {
        movieGrid.innerHTML = ''; 

        if (data.length === 0) {
            movieGrid.innerHTML = `
                <div class="col-12 text-center mt-5" style="min-height: 200px;">
                    <h4 class="text-white-50">Film tidak ditemukan :(</h4>
                </div>`;
            return;
        }

        data.forEach(movie => {
            const col = document.createElement('div');
            col.className = "col-6 col-md-4 col-lg-2";

            const mainGenre = movie.genres && movie.genres.length > 0 ? movie.genres[0] : 'Movie';
            
            const correctPoster = "../" + movie.poster;

            col.innerHTML = `
                <div class="movie-card">
                    <div class="poster-wrapper">
                        <img src="${correctPoster}" alt="${movie.title}" loading="lazy">
                    </div>
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <div class="movie-meta">
                            <span>${movie.year}</span>
                            <span class="badge-genre">${mainGenre}</span>
                        </div>
                    </div>
                </div>
            `;
            
            col.addEventListener('click', () => {
                console.log(`Mengklik film: ${movie.title}`);
            });

            movieGrid.appendChild(col);
        });
    }

    genreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            genreButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const selectedGenre = this.textContent.trim();

            if (selectedGenre === "All") {
                displayMovies(movies);
            } else {
                const filtered = movies.filter(movie => 
                    movie.genres.includes(selectedGenre)
                );
                displayMovies(filtered);
            }
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            const filtered = movies.filter(movie => 
                movie.title.toLowerCase().includes(keyword)
            );
            displayMovies(filtered);
        });
    }

    displayMovies(movies);
});