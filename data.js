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
    nama: 'lux',
    jenis: 'cair',
    ukuran: '100ml',
    harga: 30000
}

// 5. undefined( data yang belom dibuat)
// akan mencari data sabur tp property kemasan

// 6. null (himpunan/ data kosong)
const desa = null

// Mengakses data 
// 1. string -> dengan menggunkan kurung siku diawal dimulai dari 0
const meja = 'Kayu Jati'

console.log(meja[5])
console.log(meja.length)// menghitung panjang, panjang dari 1

// mengakses data terakhir
console.log(meja[meja.length - 1])

// 2. number -> cara mengakses -> operasi math -> dijadikan string
const hargaMinyak = 17500

// diubah jadi string -> tinggal dikasih -> .toString() atau `${}`

console.log('ribuan', hargaMinyak.toString()[1]);
console.log('ratusan', `${hargaMinyak}`[2]);

const angkaPuluhanribu = Math.floor(hargaMinyak/10000);
console.log('puluhanribu', angkaPuluhanribu)

const ribuan = hargaMinyak - angkaPuluhanribu * 10000;
const angkaRibuan = Math.floor(ribuan/1000);
console.log('ribuan', angkaRibuan );

const ratusan = hargaMinyak - (angkaPuluhanribu * 10000 + angkaRibuan * 1000);
const angkaRatusan = Math.floor(ratusan/100);
console.log('ratusan', angkaRatusan)

// modulo = sisa pembagian (menggunkan %)
console.log('puluhan', Math.floor(hargaMinyak % 100/10))

// 3. array -> cara mengakses dgn [] -> dimulai dari 0
const buahFavorit = ['apel', 'pisang', 'durian']

console.log(buahFavorit[2])

// menambahkan data ke array
// a. push -> menambahkan dibelakang
buahFavorit.push('jeruk')

// 4. Object-> dengan menuliskan nama objek disertai titik (.)

console.log('Nama sabun:', sabun.nama)

// menambahkan properti baru
sabun.pembuat = {
    namaPT: 'PT Wings',
    alamat: 'prembun'
}

console.log(sabun.pembuat.namaPT)

// 5. booleam = suatu nilai yg berisikan benar salah
const benar = true
const salah = false

// kondisi dan bernilai benar = B & B => B, selain salah
// kondisi atau bernilai salah = S or S => S, selain benar

// if coonditional
const kondisi = false
if (kondisi) {
    // melakukan aksi hanya jika benar
    console.log('kondisi bernilai benar')
} else {
    // untuk kondisi laiinnya
    console.log('jalanan kondisi lainnya')
}

// pilihan
// if (condition) {
    
// } else if (condition) {
// } else if (condition) {
// } else if (condition) {
// } else if (condition) {
// } else if (condition) {
// } else if (condition) {
// } else if (condition) {
// } else {

// }

// b. menjalankan semua kondisi
// if (condition) {

// }

// if (condition) {

// }

//  c. nested => berkelanjutan
// if (condition) {
// if (condition){

// }
// }

// 6 Comparation (perbandingan)
// bentuk perbandingan spt matematika
// >, <, >=, <=, ==

const nilai = 70

if(nilai == 90) {
    console.log('Nilai Anda adalah:', nilai)
}   else if (nilai <75){
    console.log('Nilai Anda di Bawah KKm')
}