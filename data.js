// belajar basic data
// 1. membuat variable (const, let)
// const suatu data tidak dapat diubah lagi
// let suatu data dapat/yg bisa diubah lagi
const nama = 'aup'
let alamat = 'wonocolo'

console.log(nama)
console.log(alamat)

alamat = 'prembun'
console.log(alamat)

// nama ='amir hafiz' keterangan akan terjadi error jika di run
// console.log(nama)

// jenis data
// 1. string (kalimat, kata, huruf)
// harus dibungkus dgn menggunakan ',",`
const masjid = "nurul hid'yah"
const nomorrumah = '3'

console.log (nomorrumah + 2)

// 2. number (angka yg bisa dioperasikan menggunakan kaidah matematika)
const jumlahPenduduk = 2005

console.log (jumlahPenduduk - 2)
console.log (Math.floor(jumlahPenduduk/5)) //pembulatan bilangan ke bawah, ceil ke atas

// 3. array (kumpulan beberapa data) >kurung siku
const pemudaWonocolo = ['amir', 'anggita', nama ]

console.log(pemudaWonocolo)

// 4. Object (data yg mempunyai properti) > kurung kurawal
const sabun = {
    nama: 'lux'
    jenis: 'cair'
    ukuran: '100ml'
    harga: 30000
}

// 5. undefined( data yang belom dibuat)
// akan mencari data sabur tp property kemasan

// 6. null (himpunan/ data kosong)
const desa = null