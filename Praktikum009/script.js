// Ambil elemen HTML
var dropdown = document.getElementById('pilihanGambar');
var tempatGambar = document.getElementById('tempatGambar');
var kotakAlert = document.getElementById('kotakAlert');
var overlay = document.getElementById('overlay');
var pesanAlert = document.getElementById('pesanAlert');

// Ketika dropdown berubah
dropdown.onchange = function() {
    var pilihan = dropdown.value;
    
    // Kalau tidak ada yang dipilih
    if (pilihan === '') {
        tempatGambar.innerHTML = '<p>Pilih gambar dari dropdown</p>';
        return;
    }

    // Tampilkan gambar
    tempatGambar.innerHTML = '<img src="image/' + pilihan + '.jpg">';

    // Tampilkan alert
    pesanAlert.innerHTML = 'Ini gambar ' + pilihan + '.jpg';
    kotakAlert.style.display = 'block';
    overlay.style.display = 'block';
};

// Fungsi untuk tutup alert
function tutupAlert() {
    kotakAlert.style.display = 'none';
    overlay.style.display = 'none';
}