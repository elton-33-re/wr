document.getElementById('revealButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    const button = document.getElementById('revealButton');
    
    // Menampilkan pesan dengan animasi
    message.classList.remove('hidden');
    setTimeout(() => {
      message.style.opacity = '1';
    }, 100);
    
    // Menghapus tombol setelah ditekan
    button.style.display = 'none';
  });