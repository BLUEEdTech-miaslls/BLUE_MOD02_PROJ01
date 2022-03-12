const sleep01 = "Noooosa, que sono!";
const sleep02 = "Ah, oi! Não tinha te visto aí!";
const sleep03 = "Nossa, olha minha cara, meu cabelo, minha roupa...";
const sleep04 = "Será que você pode me ajudar a escolher o que vestir?";
const everyday = "Que tal esse look básico? Perfeito pro dia-a-dia!";
const formal = "Ou esse mais formal, inspirado na Audrey Hepburn?";
const party = "Esse aqui também é uma graça! Olha essas mangas!";
const swim = "Posso também tentar moda praia...";
const athletic = "... ou fitness fashion!";

const assetList = [
    ["assets/img/outfits/sleep_outfit.png", "assets/img/portraits/sleep_01_portrait.png", sleep01],
    ["assets/img/outfits/sleep_outfit.png", "assets/img/portraits/sleep_02_portrait.png", sleep02],
    ["assets/img/outfits/sleep_outfit.png", "assets/img/portraits/sleep_03_portrait.png", sleep03],
    ["assets/img/outfits/sleep_outfit.png", "assets/img/portraits/sleep_04_portrait.png", sleep04],
    ["assets/img/outfits/everyday_outfit.png", "assets/img/portraits/everyday_portrait.png", everyday],
    ["assets/img/outfits/formal_outfit.png", "assets/img/portraits/formal_portrait.png", formal],
    ["assets/img/outfits/party_outfit.png", "assets/img/portraits/party_portrait.png", party],
    ["assets/img/outfits/swim_outfit.png", "assets/img/portraits/swim_portrait.png", swim],
    ["assets/img/outfits/athletic_outfit.png", "assets/img/portraits/athletic_portrait.png", athletic]
]

let changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {

    let contentText = document.getElementById('contentText');
    let changeBtnText = document.getElementById('changeBtnText');
    let changeBtnIcon = document.getElementById('changeBtnIcon');
    let outfit = document.getElementById('outfit')
    let portrait = document.getElementById('portrait');
    let changeBtnValue = parseInt(changeBtn.value);

    if (changeBtnValue > assetList.length - 1) {
        changeBtnValue = 0;
    }

    outfit.src = assetList[changeBtnValue][0];
    portrait.src = assetList[changeBtnValue][1];
    contentText.innerText = assetList[changeBtnValue][2];

    if (changeBtnValue == 0) {
        changeBtnText.innerText = "\"Bom dia!\"";
    } else if (changeBtnValue == 3) {
        changeBtnText.innerText = "\"Bora!\"";
    } else if (changeBtnValue == assetList.length - 1) {
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