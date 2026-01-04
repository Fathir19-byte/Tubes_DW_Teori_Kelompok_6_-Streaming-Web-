document.addEventListener('DOMContentLoaded', () => {
    
    // Fungsi utama untuk mengganti bahasa
    function setLanguage(lang) {
        // 1. Sembunyikan semua elemen yang memiliki atribut data-lang
        document.querySelectorAll('[data-lang]').forEach(el => {
            el.style.display = 'none';
        });

        // 2. Tampilkan hanya elemen yang sesuai dengan bahasa yang dipilih
        document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
            // Menggunakan display = '' untuk mengembalikan style display elemen ke default (misalnya block/inline)
            el.style.display = ''; 
        });
        
        // 3. Update kelas active pada link bahasa di Language Switcher
        document.querySelectorAll('.lang-option').forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`.lang-option[href*="lang=${lang}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        } else {
            // Jika ada masalah parsing URL, default kembali ke ID
            document.querySelector('.lang-option[href*="lang=id"]').classList.add('active');
        }
    }

    // 4. Tambahkan event listener untuk link bahasa
    document.querySelectorAll('.lang-option').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Ambil parameter 'lang' dari URL link
            const urlParams = new URLSearchParams(link.href.split('?')[1]);
            const lang = urlParams.get('lang');
            
            if (lang) {
                setLanguage(lang);
                // Update URL di browser tanpa reload halaman
                history.pushState(null, '', `?lang=${lang}`);
            }
        });
    });

    // 5. Tentukan bahasa awal saat halaman dimuat (dari URL atau default ke 'id')
    const urlParams = new URLSearchParams(window.location.search);
    const initialLang = urlParams.get('lang') || 'id';
    setLanguage(initialLang);
});