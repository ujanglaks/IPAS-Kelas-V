function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KeynEPkMSy":
        Script1();
        break;
      case "6hbVG9penap":
        Script2();
        break;
      case "6gTuZd6XYUk":
        Script3();
        break;
      case "60xBk4DCsuw":
        Script4();
        break;
      case "5suIIu68y0w":
        Script5();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musical.mp3";
audio.load();
audio.play();
}

function Script2()
{
  // Storyline Execute JavaScript
var player = GetPlayer();

// Ambil variabel Storyline (sesuaikan nama variabel Anda)
var nama = player.GetVar("nama");         // variabel login nama
var nomor = player.GetVar("nomor");       // variabel nomor urut
var nilai = player.GetVar("nilai");       // variabel nilai

// Siapkan data sebagai form-urlencoded (ini menghindari preflight CORS)
var params = new URLSearchParams();
params.append('nama', nama);
params.append('nomor', nomor);
params.append('nilai', nilai);

// Ganti dengan URL Web App dari Apps Script Anda
var url = "https://script.google.com/macros/s/AKfycbwGsfoBO-LH0k1HyBz1jhqd1SPl27-xEJFpTsRuT6320VC9FT8SFEYaIWFMoNlsCNV-8g/exec";

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: params.toString()
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("Server response:", data);
  // opsional: set variabel Storyline sesuai respon
  if (data && data.status === "success") {
    player.SetVar("kirim_status", "tersimpan");
  } else {
    player.SetVar("kirim_status", "gagal");
  }
})
.catch(function(err) {
  console.error("Error mengirim ke Google:", err);
  player.SetVar("kirim_status", "gagal");
});
}

function Script3()
{
  // Storyline Execute JavaScript
var player = GetPlayer();

// Ambil variabel Storyline (sesuaikan nama variabel Anda)
var nama = player.GetVar("nama");         // variabel login nama
var nomor = player.GetVar("nomor");       // variabel nomor urut
var nilai = player.GetVar("nilai");       // variabel nilai

// Siapkan data sebagai form-urlencoded (ini menghindari preflight CORS)
var params = new URLSearchParams();
params.append('nama', nama);
params.append('nomor', nomor);
params.append('nilai', nilai);

// Ganti dengan URL Web App dari Apps Script Anda
var url = "https://script.google.com/macros/s/AKfycbwGsfoBO-LH0k1HyBz1jhqd1SPl27-xEJFpTsRuT6320VC9FT8SFEYaIWFMoNlsCNV-8g/exec";

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: params.toString()
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("Server response:", data);
  // opsional: set variabel Storyline sesuai respon
  if (data && data.status === "success") {
    player.SetVar("kirim_status", "tersimpan");
  } else {
    player.SetVar("kirim_status", "gagal");
  }
})
.catch(function(err) {
  console.error("Error mengirim ke Google:", err);
  player.SetVar("kirim_status", "gagal");
});
}

function Script4()
{
  // Storyline Execute JavaScript
var player = GetPlayer();

// Ambil variabel Storyline (sesuaikan nama variabel Anda)
var nama = player.GetVar("nama");         // variabel login nama
var nomor = player.GetVar("nomor");       // variabel nomor urut
var nilai = player.GetVar("nilai");       // variabel nilai

// Siapkan data sebagai form-urlencoded (ini menghindari preflight CORS)
var params = new URLSearchParams();
params.append('nama', nama);
params.append('nomor', nomor);
params.append('nilai', nilai);

// Ganti dengan URL Web App dari Apps Script Anda
var url = "https://script.google.com/macros/s/AKfycbwGsfoBO-LH0k1HyBz1jhqd1SPl27-xEJFpTsRuT6320VC9FT8SFEYaIWFMoNlsCNV-8g/exec";

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: params.toString()
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("Server response:", data);
  // opsional: set variabel Storyline sesuai respon
  if (data && data.status === "success") {
    player.SetVar("kirim_status", "tersimpan");
  } else {
    player.SetVar("kirim_status", "gagal");
  }
})
.catch(function(err) {
  console.error("Error mengirim ke Google:", err);
  player.SetVar("kirim_status", "gagal");
});
}

function Script5()
{
  // Storyline Execute JavaScript
var player = GetPlayer();

// Ambil variabel Storyline (sesuaikan nama variabel Anda)
var nama = player.GetVar("nama");         // variabel login nama
var nomor = player.GetVar("nomor");       // variabel nomor urut
var nilai = player.GetVar("nilai");       // variabel nilai

// Siapkan data sebagai form-urlencoded (ini menghindari preflight CORS)
var params = new URLSearchParams();
params.append('nama', nama);
params.append('nomor', nomor);
params.append('nilai', nilai);

// Ganti dengan URL Web App dari Apps Script Anda
var url = "https://script.google.com/macros/s/AKfycbwGsfoBO-LH0k1HyBz1jhqd1SPl27-xEJFpTsRuT6320VC9FT8SFEYaIWFMoNlsCNV-8g/exec";

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: params.toString()
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("Server response:", data);
  // opsional: set variabel Storyline sesuai respon
  if (data && data.status === "success") {
    player.SetVar("kirim_status", "tersimpan");
  } else {
    player.SetVar("kirim_status", "gagal");
  }
})
.catch(function(err) {
  console.error("Error mengirim ke Google:", err);
  player.SetVar("kirim_status", "gagal");
});
}

