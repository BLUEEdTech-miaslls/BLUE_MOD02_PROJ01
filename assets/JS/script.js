const sleep01 = "Noooosa, que sono!";
const sleep02 = "Ah, oi! Não tinha te visto aí!";
const sleep03 = "Nossa, olha minha cara, meu cabelo, minha roupa...";
const sleep04 = "Será que você pode me ajudar a escolher uma roupa?";
const everyday = "Everyday text";
const formal = "Formal text";
const party = "Party text";
const swim = "Swim text";
const athletic = "Athletic text";

const imgList = [
    ["url('assets/img/outfits/sleep_outfit.png')", "assets/img/portraits/sleep_01_portrait.png", sleep01],
    ["url('assets/img/outfits/sleep_outfit.png')", "assets/img/portraits/sleep_02_portrait.png", sleep02],
    ["url('assets/img/outfits/sleep_outfit.png')", "assets/img/portraits/sleep_03_portrait.png", sleep03],
    ["url('assets/img/outfits/sleep_outfit.png')", "assets/img/portraits/sleep_04_portrait.png", sleep04],
    ["url('assets/img/outfits/everyday_outfit.png')", "assets/img/portraits/everyday_portrait.png", everyday],
    ["url('assets/img/outfits/formal_outfit.png')", "assets/img/portraits/formal_portrait.png", formal],
    ["url('assets/img/outfits/party_outfit.png')", "assets/img/portraits/party_portrait.png", party],
    ["url('assets/img/outfits/swim_outfit.png')", "assets/img/portraits/swim_portrait.png", swim],
    ["url('assets/img/outfits/athletic_outfit.png')", "assets/img/portraits/athletic_portrait.png", athletic]
]

let changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {

    let contentText = document.getElementById('contentText');
    let changeBtnText = document.getElementById('changeBtnText');
    let changeBtnIcon = document.getElementById('changeBtnIcon');
    let portrait = document.getElementById('portrait');
    let changeBtnValue = parseInt(changeBtn.value);

    if (changeBtnValue > imgList.length - 1) {
        changeBtnValue = 0;
    }

    document.body.style.backgroundImage = imgList[changeBtnValue][0];
    portrait.src = imgList[changeBtnValue][1];
    contentText.innerText = imgList[changeBtnValue][2];

    if (changeBtnValue == 0) {
        changeBtnText.innerText = "\"Bom dia!\"";
    } else if (changeBtnValue == 3) {
        changeBtnText.innerText = "\"Bora!\"";
    } else if (changeBtnValue == imgList.length - 1) {
        changeBtnText.innerText = "RECOMEÇAR!";
    } else {
        changeBtnText.innerText = "próximo";
    }

    if (changeBtnText.innerText == "próximo") {
        changeBtnIcon.src = "assets/img/btnIcons/next.png";
    } else if (changeBtnText.innerText == "RECOMEÇAR!") {
        changeBtnIcon.src = "assets/img/btnIcons/restart.png";
    } else {
        changeBtnIcon.src = "assets/img/btnIcons/talk.png";
    }

    changeBtnValue++;
    changeBtn.value = `${changeBtnValue}`

});