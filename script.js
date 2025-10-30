document.addEventListener("DOMContentLoaded", function() {
    
    const switchers = document.querySelectorAll('.project-image-switcher');
    
    switchers.forEach(switcher => {
        const images = switcher.querySelectorAll('.switcher-img');
        const prevBtn = switcher.querySelector('.switcher-btn.prev');
        const nextBtn = switcher.querySelector('.switcher-btn.next');
        
        if (images.length === 0) return; 

        let currentIndex = 0;
        const totalImages = images.length;
        
        // --- FUNGSI BARU YANG LEBIH CANGGIH ---
        function showImage(index) {
            // Dapatkan gambar yang akan aktif
            const activeImage = images[index];
            
            // 1. Dapatkan rasio aspek asli dari gambar
            // (tinggi / lebar)
            const aspectRatio = activeImage.naturalHeight / activeImage.naturalWidth;
            
            // 2. Dapatkan lebar kontainer saat ini
            const containerWidth = switcher.clientWidth;
            
            // 3. Hitung tinggi baru yang ideal berdasarkan rasio
            const newHeight = containerWidth * aspectRatio;
            
            // 4. Terapkan tinggi baru ke bingkai (kontainer)
            // CSS 'transition' akan menganimasikan perubahan ini
            switcher.style.height = newHeight + 'px';
            
            // 5. Sembunyikan semua gambar
            images.forEach(img => {
                img.classList.remove('active');
            });
            
            // 6. Tampilkan gambar yang dipilih
            activeImage.classList.add('active');
        }
        
        // Event listener untuk tombol NEXT
        nextBtn.addEventListener('click', function() {
            currentIndex++;
            if (currentIndex >= totalImages) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        });
        
        // Event listener untuk tombol PREV
        prevBtn.addEventListener('click', function() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalImages - 1;
            }
            showImage(currentIndex);
        });
        
        // --- INISIALISASI SAAT HALAMAN DIMUAT ---
        // Kita harus memastikan gambar pertama sudah dimuat sebelum kita
        // mengukur rasionya.
        const firstImage = images[0];
        if (firstImage.complete) {
            // Jika gambar sudah ada di cache browser
            showImage(currentIndex);
        } else {
            // Jika belum, tunggu gambar dimuat, baru jalankan
            firstImage.addEventListener('load', function() {
                showImage(currentIndex);
            });
        }
    });

});