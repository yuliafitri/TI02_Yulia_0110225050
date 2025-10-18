<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Ambil data dari form
    $nama = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);
    $barang = htmlspecialchars($_POST['barang']);
    $jumlah = intval($_POST['jumlah']);
    $alamat = htmlspecialchars($_POST['alamat']);
    
    // Hitung total harga sederhana (contoh harga)
    $harga = 0;
    if ($barang == 'Laptop') $harga = 10000000;
    elseif ($barang == 'Smartphone') $harga = 5000000;
    elseif ($barang == 'Tablet') $harga = 3000000;
    $total = $harga * $jumlah;
    
    // Simpan data ke file teks (sebagai log sederhana)
    $data = "Pemesanan Baru - " . date('Y-m-d H:i:s') . "\n";
    $data .= "Nama: $nama\n";
    $data .= "Email: $email\n";
    $data .= "Barang: $barang\n";
    $data .= "Jumlah: $jumlah\n";
    $data .= "Total Harga: Rp " . number_format($total) . "\n";
    $data .= "Alamat: $alamat\n";
    $data .= "----------------------------------------\n";
    
    file_put_contents('pesanan.txt', $data, FILE_APPEND | LOCK_EX);
    
    // Redirect kembali ke index dengan pesan sukses
    header('Location: index.php?status=success');
    exit();
} else {
    // Jika akses langsung, redirect ke index
    header('Location: index.php');
    exit();
}
?>