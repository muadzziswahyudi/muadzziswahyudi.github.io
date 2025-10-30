// Menjalankan skrip setelah semua konten HTML dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Memilih SEMUA image switcher yang ada di halaman
    const switchers = document.querySelectorAll('.project-image-switcher');
    
    // Menjalankan fungsi setup untuk setiap switcher
    switchers.forEach(switcher => {
        const images = switcher.querySelectorAll('.switcher-img');
        const prevBtn = switcher.querySelector('.switcher-btn.prev');
        const nextBtn = switcher.querySelector('.switcher-btn.next');
        
        // Jika tidak ada gambar, hentikan fungsi
        if (images.length === 0) return; 

        let currentIndex = 0; // Melacak gambar yang sedang aktif
        const totalImages = images.length;
        
        // Fungsi untuk menampilkan gambar berdasarkan index
        function showImage(index) {
            // 1. Sembunyikan semua gambar di dalam switcher INI
            images.forEach(img => {
                img.classList.remove('active');
            });
            
            // 2. Tampilkan gambar yang dipilih
            images[index].classList.add('active');
        }
        
        // Event listener untuk tombol NEXT
        nextBtn.addEventListener('click', function() {
            currentIndex++;
            if (currentIndex >= totalImages) {
                currentIndex = 0; // Kembali ke gambar pertama
            }
            showImage(currentIndex);
        });
        
        // Event listener untuk tombol PREV
        prevBtn.addEventListener('click', function() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalImages - 1; // Pergi ke gambar terakhir
            }
            showImage(currentIndex);
        });
        
        // Tampilkan gambar pertama saat halaman dimuat
        showImage(currentIndex);
    });

});