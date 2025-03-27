// cara mengakses data 1 per 1
// bisa dimisalkan sebuah deret
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    console.log(2*(i+1))
}

const nama = 'amir aup'

for (let i = 0; i < nama.length; i++ ) {
    console.log(nama[i])
}

const barang = ['sabun', 'sikat', 'odol']

for (let i = 0; i < barang.length; i++) {
    console.log(barang[i])
}

const sabun = [
    {
        nama: 'lifeboy',
        harga: 2000
    },
    {
        nama: 'nuvo',
        harga: 3000
    },
    {
        nama: 'giv',
        harga: 4000

    },
    {
        nama: 'sinzui',
        harga: 5000
    }
];


for (let i=0; i < sabun.length; i++) {
    console.log(sabun[i])
}

for (let i=0; i < sabun.length; i++) {
    const element = sabun[i].nama;
    console.log(element)
}

const namaku = 'alexio andara'

// mau menghitung banyak huruf a di namaku

let hitungHurufa = 0
for (let i = 0; i < namaku.length; i++) {
    const huruf = namaku[i];

    if(huruf == 'a') {
        hitungHurufa = hitungHurufa + 1;
        console.log('ini huruf a')
    }
}

console.log('Total Huruf A', hitungHurufa)


// hitung total harga
let hitungTotalharga = 0
for (let i = 0; i < sabun.length; i++) {
    const infoSabun = sabun[i];
    console.log(infoSabun.harga)

    hitungTotalharga = infoSabun.harga + hitungTotalharga
}

console.log('Total Harga Sabun', hitungTotalharga)

const sabunMahal = []
const sabunMurah = []

for (let i = 0; i < sabun.length; i++) {
    const namaHargaSabun = sabun[i];
    // console.log(namaHargaSabun.nama)

    // console.log(namaHargaSabun.harga)

    if (namaHargaSabun.harga <= 4000) {
        console.log('sabun murah', namaHargaSabun.nama)
        sabunMurah.push(namaHargaSabun.nama)
    } else if (namaHargaSabun.harga > 4000) {
        console.log('sabun mahal', namaHargaSabun.nama)
        sabunMahal.push(namaHargaSabun.nama)
    }
}

console.log(sabunMurah)

console.log(sabunMahal)

// saya ingin membeli sabun jika harga sabunnya murah
// saya akan membeli 2 item jika harga sabunnya mahal saya akan membeli 3 item
// jika saya punya uang 50.000 berapa uang kembalian untuk membeli semua sabun.
let totalHarusdibayar = 0
const uangPelanggan = 50000

for (let i = 0; i < sabun.length; i++) {
    const namaHargaSabun = sabun[i];
    
    if (namaHargaSabun.harga <= 4000) {
        const itemDibeli = 2
        const hargaPembelianitem = namaHargaSabun.harga* itemDibeli
        totalHarusdibayar = hargaPembelianitem + totalHarusdibayar
        
    } else if (namaHargaSabun.harga > 4000) {
        const itemDibeli = 3
        const hargaPembelianitem = namaHargaSabun.harga* itemDibeli
        totalHarusdibayar = hargaPembelianitem + totalHarusdibayar
        
    } 
    
}

console.log(totalHarusdibayar)
console.log('total kembalian', (uangPelanggan-totalHarusdibayar))

// saat ujian sekolah diketahui beberapa nilai mahasiswa adalah sebagai berikut, arif 85, jafar 90, 
// harya 82, zaid 60, munar 76, izza 75
// dan eriel 50 serta sebas 63. Jika kkm 73, berapa anak yang lulus kkm dan berapa rata rata 
// yg dibawah kkm

const nilaiUjian = [
    {
        nama: 'arif',
        nilai: 85
    },
    {
        nama: 'jafar',
        nilai: 90
    },
    {
        nama: 'harya',
        nilai: 82
    },
    {
        nama: 'zaid',
        nilai: 60
    },
    {
        nama: 'munar',
        nilai: 76
    },
    {
        nama: 'izza',
        nilai: 75
    },
    {
        nama: 'eriel',
        nilai: 50
    },
    {
        nama: 'sebas',
        nilai: 63
    }
]

const kkm = 73
const lulusUjian = []
const gagalUjian = []
let totalnilaiBawahkkm = 0


for (let i = 0; i < nilaiUjian.length; i++) {
    const namaNilai = nilaiUjian[i];
    
    if (namaNilai.nilai > kkm) {
        lulusUjian.push(namaNilai.nama)
        
    } else if (namaNilai.nilai <= kkm) {
        gagalUjian.push(namaNilai.nama)
        
        totalnilaiBawahkkm = namaNilai.nilai + totalnilaiBawahkkm
}
}

console.log('rata-rata nilai dibawah kkm', Math.floor(totalnilaiBawahkkm / gagalUjian.length))

console.log(lulusUjian)

diketahui terdapat 