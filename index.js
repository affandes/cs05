/**
 * File ini tidak perlu diubah.
 * Silahkan ubah file cari-angka-genap.js
 */

const Cari = require('./cari-angka-genap');

let koleksi = [35,27,13,3,12,25,45];
let cari = new Cari();
let hasil = cari.angkaGenap(koleksi);
console.log(hasil);