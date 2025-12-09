// Ambil elemen form dan input
var form = document.getElementById('myForm');
var inputNama = document.getElementById('nama');
var inputEmail = document.getElementById('email');
var inputJam = document.getElementById('jam');
var inputTujuan = document.getElementById('tujuan');
var inputTiket = document.getElementById('tiket');

// Ambil elemen error message
var errorNama = document.getElementById('errorNama');
var errorEmail = document.getElementById('errorEmail');
var errorJam = document.getElementById('errorJam');
var errorTujuan = document.getElementById('errorTujuan');
var errorTiket = document.getElementById('errorTiket');

// Ambil elemen success message
var successMessage = document.getElementById('successMessage');
var dataRingkasan = document.getElementById('dataRingkasan');

// Fungsi validasi nama
function validasiNama() {
    var nama = inputNama.value.trim();
    
    if (nama === '' || nama.length > 30) {
        inputNama.classList.add('error');
        errorNama.classList.add('show');
        return false;
    } else {
        inputNama.classList.remove('error');
        errorNama.classList.remove('show');
        return true;
    }
}

// Fungsi validasi email
function validasiEmail() {
    var email = inputEmail.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '' || !emailPattern.test(email)) {
        inputEmail.classList.add('error');
        errorEmail.classList.add('show');
        return false;
    } else {
        inputEmail.classList.remove('error');
        errorEmail.classList.remove('show');
        return true;
    }
}

// Fungsi validasi jam
function validasiJam() {
    var jam = inputJam.value;
    
    if (jam === '') {
        inputJam.classList.add('error');
        errorJam.classList.add('show');
        return false;
    } else {
        inputJam.classList.remove('error');
        errorJam.classList.remove('show');
        return true;
    }
}

// Fungsi validasi tujuan
function validasiTujuan() {
    var tujuan = inputTujuan.value;
    
    if (tujuan === '') {
        inputTujuan.classList.add('error');
        errorTujuan.classList.add('show');
        return false;
    } else {
        inputTujuan.classList.remove('error');
        errorTujuan.classList.remove('show');
        return true;
    }
}

// Fungsi validasi tiket
function validasiTiket() {
    var tiket = inputTiket.value;
    
    if (tiket === '' || tiket < 1 || tiket > 10) {
        inputTiket.classList.add('error');
        errorTiket.classList.add('show');
        return false;
    } else {
        inputTiket.classList.remove('error');
        errorTiket.classList.remove('show');
        return true;
    }
}

// Event ketika form disubmit
form.onsubmit = function(e) {
    e.preventDefault(); // Mencegah form submit secara default
    
    // Validasi semua input
    var namaValid = validasiNama();
    var emailValid = validasiEmail();
    var jamValid = validasiJam();
    var tujuanValid = validasiTujuan();
    var tiketValid = validasiTiket();
    
    // Jika semua valid, tampilkan pesan sukses
    if (namaValid && emailValid && jamValid && tujuanValid && tiketValid) {
        // Sembunyikan pesan error
        successMessage.classList.remove('show');
        
        // Tampilkan data yang diinput
        var ringkasan = 
            'Nama: ' + inputNama.value + '<br>' +
            'Email: ' + inputEmail.value + '<br>' +
            'Jam: ' + inputJam.value + '<br>' +
            'Tujuan: ' + inputTujuan.value + '<br>' +
            'Jumlah Tiket: ' + inputTiket.value;
        
        dataRingkasan.innerHTML = ringkasan;
        successMessage.classList.add('show');
        
        // Reset form setelah 5 detik
        setTimeout(function() {
            form.reset();
            successMessage.classList.remove('show');
        }, 5000);
    }
}