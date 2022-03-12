// 📌📌🚨 ----- ANIMATION -----

doAnimation = () => {

    let portrait = document.getElementById('portrait');
    portrait.setAttribute('class', 'slideInAnimation');
}

document.addEventListener('DOMContentLoaded', () => {
    doAnimation();
});

// 📌📌🚨 ----- ASSETS -----

const sleep01 = 'Noooosa, que sono!';
const sleep02 = 'Ah, DagDag! Não tinha te visto aí!'; // TODO: Add SIMLISH TEXT
const sleep03 = 'Nossa, olha minha cara, meu cabelo, minha roupa...';
const sleep04 = 'Será que você pode me ajudar a escolher o que vestir?';
const everyday = 'Que tal esse look básico? Perfeito pro dia-a-dia!';
const formal = 'Ou esse mais formal, inspirado na Audrey Hepburn?';
const party = 'Esse aqui também é uma graça! Olha essas mangas!';
const swim = 'Posso também tentar moda praia...';
const athletic = '... ou fitness fashion!';

const assetList = [
    ['assets/img/outfits/sleep_outfit.png', 'assets/img/portraits/sleep_01_portrait.png', sleep01],
    ['assets/img/outfits/sleep_outfit.png', 'assets/img/portraits/sleep_02_portrait.png', sleep02],
    ['assets/img/outfits/sleep_outfit.png', 'assets/img/portraits/sleep_03_portrait.png', sleep03],
    ['assets/img/outfits/sleep_outfit.png', 'assets/img/portraits/sleep_04_portrait.png', sleep04],
    ['assets/img/outfits/everyday_outfit.png', 'assets/img/portraits/everyday_portrait.png', everyday],
    ['assets/img/outfits/formal_outfit.png', 'assets/img/portraits/formal_portrait.png', formal],
    ['assets/img/outfits/party_outfit.png', 'assets/img/portraits/party_portrait.png', party],
    ['assets/img/outfits/swim_outfit.png', 'assets/img/portraits/swim_portrait.png', swim],
    ['assets/img/outfits/athletic_outfit.png', 'assets/img/portraits/athletic_portrait.png', athletic]
]

// 📌📌🚨 ----- CLICK EVENT -----

let changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {

    let contentText = document.getElementById('contentText');
    let changeBtnText = document.getElementById('changeBtnText');
    let changeBtnIcon = document.getElementById('changeBtnIcon');
    let changeBtnValue = Number(changeBtn.value);
    let outfit = document.getElementById('outfit')
    let portrait = document.getElementById('portrait');

    portrait.removeAttribute('class');

    /* 🦋 equivalent to below (only valid for +1 increments)

    if (changeBtnValue > assetList.length - 1) {
        changeBtnValue = 0;
    } */

    changeBtnValue = changeBtnValue % assetList.length;

    // 📌 update images, text

    const asset = assetList[changeBtnValue];

    outfit.src = asset[0];
    portrait.src = asset[1];
    contentText.innerText = asset[2];

    // 📌 update button text

    const assetLastIndex = assetList.length - 1;

    switch (changeBtnValue) {
        case 0:
            changeBtnText.innerText = `"SulSul!"`;
            break;
        case 3:
            changeBtnText.innerText = `"Bora!"`;
            break;
        case assetLastIndex:
            changeBtnText.innerText = 'RECOMEÇAR!';
            break;
        default:
            changeBtnText.innerText = 'próximo';
    }

    // 📌 update button icon

    switch (changeBtnText.innerText) {
        case 'próximo':
            changeBtnIcon.src = 'assets/img/btnIcons/next.png';
            break;
        case 'RECOMEÇAR!':
            changeBtnIcon.src = 'assets/img/btnIcons/restart.png';
            break;
        default:
            changeBtnIcon.src = 'assets/img/btnIcons/talk.png';
    }

    // 📌 animate portrait (according to frame)

    if (changeBtnValue > 3 || changeBtnValue === 0) {
        doAnimation();
    }

    changeBtnValue++;
    changeBtn.value = `${changeBtnValue}`;
});