let fullName = prompt("Lütfen Adınızı Giriniz :")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} <small>${fullName}</small>`


var date = new Date().toLocaleString('tr-TR'); // tarih saati al

let myClock = document.querySelector("#myClock").innerHTML = date; // zaman id'li elemente yazdır
