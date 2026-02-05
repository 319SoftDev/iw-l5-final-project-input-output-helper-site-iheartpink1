
const arcane = document.querySelector("#arcane");
const castlevania = document.querySelector("#castlevania");
const crimsonpeak = document.querySelector("#crimsonpeak");
const dexter = document.querySelector("#dexter");
const dracula = document.querySelector("#dracula");
const hannibal = document.querySelector("#hannibal");
const  iwav= document.querySelector("#iwav");
const nosferatu = document.querySelector("#nosferatu");
const pto = document.querySelector("#pto");
const twilight = document.querySelector("#twilight");

const caption = document.querySelector("#caption");

const reset = document.querySelector("#reset");
const calculate = document.querySelector("#calculate");

const arcanegif = document.querySelector("#arcanegif");
const castlevaniagif = document.querySelector("#castlevaniagif");
const crimsonpeakgif = document.querySelector("#crimsonpeakgif");
const dextergif = document.querySelector("#dextergif");
const draculagif = document.querySelector("#draculagif");
const hannibalgif = document.querySelector("#hannibalgif");
const nosferatugif = document.querySelector("#nosferatugif");
const  iwavgif= document.querySelector("#iwavgif");
const ptogif = document.querySelector("#ptogif");
const twilightgif = document.querySelector("#twilightgif");
 
let count = 0
console.log(count);
const counter = ()=> {
    count+=1
    console.log(count)
}

let ac = false;
let ca = false;
let cp = false;
let de = false;
let dr = false;
let ha = false;
let it = false;
let no = false;
let pt = false;
let tw = false;

const arcaneclick= () => {
    if (ac == false){
        counter();
    }
    ac = true;
    arcanegif.classList.remove("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")

    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")
    
    arcane.classList.add("img-green")
}

arcane.addEventListener("click", arcaneclick);

const castlevaniaclick= () => {
    if (ca == false){
        counter();
    }
    ca = true;
    arcanegif.classList.add("hidden")
    castlevaniagif.classList.remove("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")

    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")
    castlevania.classList.add("img-green")
}

castlevania.addEventListener("click", castlevaniaclick);

const crimsonpeakclick= () => {
    if (cp == false){
        counter();
    }
    cp= true;
    arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.remove("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")

    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")

    crimsonpeak.classList.add("img-green")
}

crimsonpeak.addEventListener("click", crimsonpeakclick);

const dexterclick= () => {
    if (de == false){
        counter();
    }
    de = true;
    arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.remove("hidden")
    draculagif.classList.add("hidden")

    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")

    dexter.classList.add("img-green")
}

dexter.addEventListener("click", dexterclick);


const draculaclick= () => {
    if (dr == false){
        counter();
    }
    dr = true;
    arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.remove("hidden")

    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")
    dracula.classList.add("img-green")
}

dracula.addEventListener("click", draculaclick);


const hannibalclick= () => {
    if (ha == false){
        counter();
    }
    ha = true;
 arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")

    hannibalgif.classList.remove("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")
    hannibal.classList.add("img-green")
}

hannibal.addEventListener("click", hannibalclick);

const iwavclick= () => {
    if (it == false){
        counter();
    }
    it = true;
 arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")

    hannibalgif.classList.add("hidden")
    iwavgif.classList.remove("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")
    iwav.classList.add("img-green")
}

iwav.addEventListener("click", iwavclick);

const nosferatuclick= () => {
    if (no == false){
        counter();
    }
    no = true;
    arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")

    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.remove("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")
    nosferatu.classList.add("img-green")
}

nosferatu.addEventListener("click", nosferatuclick);

const ptoclick= () => {
  if (pt == false){
        counter();
    }
    pt = true;
 arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")

    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.remove("hidden")
    twilightgif.classList.add("hidden")
    pto.classList.add("img-green")
}

pto.addEventListener("click", ptoclick);


const twilightclick= () => {
      if (tw == false){
        counter();
    }
    tw = true;
    arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")

    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.remove("hidden")
    twilight.classList.add("img-green")
    }

twilight.addEventListener("click", twilightclick);

const resetclick= () => {
    arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")
    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")

    arcane.classList.remove("img-green")
    castlevania.classList.remove("img-green")
    crimsonpeak.classList.remove("img-green")
    dexter.classList.remove("img-green")
    dracula.classList.remove("img-green")
    hannibal.classList.remove("img-green")
    iwav.classList.remove("img-green")
    nosferatu.classList.remove("img-green")
    pto.classList.remove("img-green")
    twilight.classList.remove("img-green")
    caption.classList.add("hidden")
    }
reset.addEventListener("click", resetclick);

const calculateclick= () => {
      if (count == 5){
        caption.classList.remove("hidden")
    }

      if (count > 5){
        caption.classList.remove("hidden")
    }

      if (count < 5){
        caption.classList.remove("hidden")
    }
    arcanegif.classList.add("hidden")
    castlevaniagif.classList.add("hidden")
    crimsonpeakgif.classList.add("hidden")
    dextergif.classList.add("hidden")
    draculagif.classList.add("hidden")
    hannibalgif.classList.add("hidden")
    iwavgif.classList.add("hidden")
    nosferatugif.classList.add("hidden")
    ptogif.classList.add("hidden")
    twilightgif.classList.add("hidden")
}
     calculate.addEventListener("click", calculateclick);
