
//Data Mahasiswa (Array of Objects)
const daftarMahasiswa = [
    { nama: "Nami", nim: "130122001", tugas: 85, uts: 80, uas: 88 },
    { nama: "Nico Robin", nim: "130122045", tugas: 90, uts: 85, uas: 95 },
    { nama: "Monkey D. Luffy", nim: "130122110", tugas: 60, uts: 70, uas: 65 },
    { nama: "Roronoa Zoro",  nim: "130122022", tugas: 75, uts: 75, uas: 80 }
];

//LOGIKA (Fungsi untuk menentukan Grade berdasarkan nilai akhir)
const tentukanGrade = (nilai) => {
    if (nilai >= 80) return "A";
    if (nilai >= 70) return "B";
    if (nilai >= 60) return "C";
    return "D";
};

//OUTPUT (Processing & Template Literals)
console.log(`--------------------------------------------------`);
console.log(`    LAPORAN PENILAIAN MAHASISWA ONEPIECE UNIVERSITY `);
console.log(`--------------------------------------------------\n`);

daftarMahasiswa.forEach((mhs, index) => {
    
    const nilaiAkhir = (mhs.tugas * 0.3) + (mhs.uts * 0.3) + (mhs.uas * 0.4);
    
    const grade = tentukanGrade(nilaiAkhir);

    console.log(`${index + 1}. NAMA  : ${mhs.nama}`);
    console.log(`   NIM   : ${mhs.nim}`);
    console.log(`   DETAIL: Tugas(${mhs.tugas}), UTS(${mhs.uts}), UAS(${mhs.uas})`);
    console.log(`   HASIL : ${nilaiAkhir.toFixed(2)} [Grade: ${grade}]`);
    console.log(`--------------------------------------------------`);
});
