function alertx(data) {
  var nim = (document.data.nim.value);
  var nama = (document.data.nama.value);

  var ket = "";
  if (document.data.wanita.checked == true) {
    ketx = "Wanita";
  }
  if (document.data.wanita.checked == false && document.data.Wanita.checked == false || document.data.alamat.value == false) {
    ketx = "";
  }
  else if (document.data.Wanita.checked == true) {
    ketx = "Pria";
  }
  var no_hp = (document.data.no_hp.value);
  var alamat = (document.data.alamat.value);
  var peminatan = (document.data.peminatan.value);
  
  var yakin = confirm("Apakah Anda sudah yakin untuk menyimpan?");
  if (yakin) {
      yakin = "";
  } else {
    window.location = ("/UAS/UASpendaftaran.html");
  }

  {
    if (document.data.nim.value === false || document.data.nama.value == false) {
      alert("NIM atau Nama atau Alamat belum terisi dengan benar, CEK KEMBALI!!!");
    } else {
      alert("NIM                       : " + nim + "\nNama                     : " + nama + "\nJenis Kelamin        : "
        + ketx + "\nNo Hp                   : " + no_hp + "\nAlamat                  : "
        + alamat + "\nPeminatan            : " + peminatan);
    } 
  }
  document.write("Berikut hasil cetak biodata anda!","<br>")
  document.write("============================================", "<br>");
  document.write("NIM               :", nim, "<br>");
  document.write("Nama Lengkap      :", nama, "<br>");
  document.write("No_HP             :", no_hp, "<br>");
  document.write("Alamat            :", alamat, "<br>");
  document.write("Minat             :", peminatan, "<br>");
  document.write("============================================", "<br>");
}