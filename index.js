import { GYUMOLCSOK } from "./adatok.js";
letrehozTablazat();
osszesit();
vasarol();
torolEsemeny();

const vasarolt = [];

// 1. feladat
function letrehozTablazat() {
    let txt = "<table>"
    for (let index = 0; index < GYUMOLCSOK.length; index++) {
        const ELEMENT = GYUMOLCSOK[index];
        txt += `<tr><td>${ELEMENT.nev}</td><td>${ELEMENT.tomeg}</td><td>${ELEMENT.ar}</td></tr>`
    }
    txt += "</table>"
    console.log(txt)
    const ELSO = document.querySelector("#feladat_1")
    ELSO.innerHTML += txt
}

// 2. feladat
function osszesit() {
    let osszeadas = 0;
    let osszeadas2 = 0;
    for (let index = 0; index < GYUMOLCSOK.length; index++) {
        const ELEMENT = GYUMOLCSOK[index]['tomeg'];
        const ELEMENT2 = GYUMOLCSOK[index]['ar'];
        osszeadas = osszeadas + ELEMENT;
        osszeadas2 = osszeadas2 + ELEMENT2;
    }
    let txt = `<p>A gyümölcsök súlya összesen: ${osszeadas}g</p>`
    txt += `<p>A gyümölcsök ára összesen: ${osszeadas2} Ft</p>`
    console.log(txt)
    const MASODIK = document.querySelector("#feladat_2")
    MASODIK.innerHTML += txt
}

// 3. feladat
function vasarol(zoldseg) {
    //zoldseg = GYUMOLCSOK['nev']
    zoldseg = document.querySelectorAll("#feladat_1 tr")
    const HARMADIKFELADAT = document.querySelectorAll("#feladat_1 tr")
    const FELTOLTES = document.querySelector("#feladat_3")
    for (let index = 0; index < zoldseg.length; index++) {
        HARMADIKFELADAT[index].addEventListener("click", function(){
            FELTOLTES.innerHTML += `${GYUMOLCSOK[index].nev}<br>`
        })   
    }
}


// 4. feladat
function torolEsemeny() {
    const FELTOLTES = document.querySelector("#feladat_3")
    const GOMBLETREHOZ = document.querySelector("#feladat_4")
    GOMBLETREHOZ.innerHTML += "<br><button>Töröl</button>";
    GOMBLETREHOZ.addEventListener("click", function(){
        FELTOLTES.innerHTML = "";
        const TORLESELEM = document.querySelector("#torles")
        TORLESELEM.classList.remove("hide");
    })
    //console.log(TORLESELEM)
    //console.log(TORLESELEM.classList.contains("hide"));
}