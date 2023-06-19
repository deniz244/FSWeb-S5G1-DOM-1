const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

// top nav ekle
const nava = document.querySelectorAll(".container a");

for (let i = 0; i < nava.length; i++) {
  nava[i].innerHTML = Object.values(siteContent.nav)[i];
}

// img src ekle

document.getElementById("logo-img").src = Object.values(siteContent.images)[0]; ///mocks/img/logo.png -- çalışmıyor

//h1 text
document.querySelector(".cta-text h1").innerHTML = Object.values(
  siteContent.cta
)[0];

//cta-text button
document.querySelector(".cta-text button").innerHTML = Object.values(
  siteContent.cta
)[1];

//cta-img src
document.getElementById("cta-img").src = Object.values(siteContent.images)[1]; ///mocks/img/cta.png --- çalışmıyor

//middle img src
document.getElementById("middle-img").src = Object.values(
  siteContent.images
)[2];

//main content -- text content
const txt = document.querySelectorAll(".text-content h4");
const prg = document.querySelectorAll(".text-content p");
const cArr = Object.values(siteContent["ana-içerik"]);
const baslik = [];
const pr = [];

for (let i = 0; i < cArr.length; i++) {
  if (cArr[i].length < 11) {
    baslik.push(cArr[i]);
  } else {
    pr.push(cArr[i]);
  }
}

for (let j = 0; j < txt.length; j++) {
  txt[j].innerHTML = baslik[j];
}

for (let k = 0; k < prg.length; k++) {
  prg[k].innerHTML = pr[k];
}

//section contact h4
document.querySelector(".contact h4").innerHTML = Object.values(
  siteContent.iletisim
)[0];

//section contact p
const pler = document.querySelectorAll(".contact p");
for (let i = 0; i < pler.length; i++) {
  pler[i].innerHTML = Object.values(siteContent.iletisim)[i + 1];
}

//top nav'a italic class ekle
const elements = document.querySelectorAll("nav a");
for (let i = 0; i < elements.length; i++) {
  elements[i].classList.add("italic");
}
/*for yerine foreach'le elements.forEach((element) => {
  element.classList.add('italic');
});*/

//footer link bold class ekle
document.querySelector("footer a").classList.add("bold");

//footer link içerik
document.querySelector("footer a").innerHTML = Object.values(
  siteContent.footer
);
