// 📌📌📌🚨 ----- FUNCTIONS -----

// 📌📌 doAnimation

let animationContainer = document.getElementById('animationContainer');

const doAnimation = () => {
    animationContainer.setAttribute('class', 'slideInAnimation');
}

document.addEventListener('DOMContentLoaded', () => {
    doAnimation();
});

// 📌📌📌🚨 ----- ASSETS -----

const assetList = [{
        id: 'sleep 01',
        name: 'pijama',
        outfit_url: 'assets/img/outfits/sleep_outfit.png',
        portrait_url: 'assets/img/portraits/sleep_01_portrait.png',
        bg_url: 'assets/img/bg_imgs/outfits_bg/swim_bg.png', // 👁‍🗨 include final BG + small BG
        text: 'sleep 01 text',
        button: 'sleep 01 btn'
    },
    {
        id: 'sleep 02',
        name: 'pijama',
        outfit_url: 'assets/img/outfits/sleep_outfit.png',
        portrait_url: 'assets/img/portraits/sleep_02_portrait.png',
        bg_url: 'assets/img/bg_imgs/outfits_bg/swim_bg.png',
        text: 'sleep 02 text',
        button: 'próximo'
    },
    {
        id: 'sleep 03',
        name: 'pijama',
        outfit_url: 'assets/img/outfits/sleep_outfit.png',
        portrait_url: 'assets/img/portraits/sleep_03_portrait.png',
        bg_url: 'assets/img/bg_imgs/outfits_bg/swim_bg.png',
        text: 'sleep 03 text',
        button: 'próximo'
    },
    {
        id: 'sleep 04',
        name: 'pijama',
        outfit_url: 'assets/img/outfits/sleep_outfit.png',
        portrait_url: 'assets/img/portraits/sleep_04_portrait.png',
        bg_url: 'assets/img/bg_imgs/outfits_bg/swim_bg.png',
        text: 'sleep 04 text',
        button: 'sleep 04 btn'
    },
    {
        id: 'everyday',
        name: 'básico',
        outfit_url: 'assets/img/outfits/everyday_outfit.png',
        portrait_url: 'assets/img/portraits/everyday_portrait.png',
        bg_url: 'assets/img/bg_imgs/outfits_bg/swim_bg.png',
        text: 'everyday text',
        button: 'próximo'
    },
    {
        id: 'formal',
        name: 'formal',
        outfit_url: 'assets/img/outfits/formal_outfit.png',
        portrait_url: 'assets/img/portraits/formal_portrait.png',
        bg_url: 'assets/img/bg_imgs/outfits_bg/swim_bg.png',
        text: 'formal text',
        button: 'próximo'

    },
    {
        id: 'party',
        name: 'balada',
        outfit_url: 'assets/img/outfits/party_outfit.png',
        portrait_url: 'assets/img/portraits/party_portrait.png',
        bg_url: 'assets/img/bg_imgs/outfits_bg/swim_bg.png',
        text: 'party text',
        button: 'próximo'

    },
    {
        id: 'swim',
        name: 'piscina',
        outfit_url: 'assets/img/outfits/swim_outfit.png',
        portrait_url: 'assets/img/portraits/swim_portrait.png',
        bg_url: 'assets/img/bg_imgs/outfits_bg/swim_bg.png',
        text: 'swim text',
        button: 'próximo'

    },
    {
        id: 'athletic',
        name: 'esportivo',
        outfit_url: 'assets/img/outfits/athletic_outfit.png',
        portrait_url: 'assets/img/portraits/athletic_portrait.png',
        bg_url: 'assets/img/bg_imgs/outfits_bg/swim_bg.png',
        text: 'athletic text',
        button: 'próximo'

    }
];

// 📌 

// 👁‍🗨 organize and review scope

let changeOutfitBtn = document.getElementById('changeOutfitBtn');

let changeOutfitBox = document.getElementById('changeOutfitBox');
let chooseOutfitBox = document.getElementById('chooseOutfitBox');

let changeOutfitBoxText = document.getElementById('changeOutfitBoxText');
let changeOutfitBtnText = document.getElementById('changeOutfitBtnText');
let changeOutfitBtnIcon = document.getElementById('changeOutfitBtnIcon');

let outfit = document.getElementById('outfit')
let portrait = document.getElementById('portrait');

// 📌📌📌🚨 ----- EVENTS -----

// 📌📌 | CLICK | changeOutfitBtn


changeOutfitBtn.addEventListener('click', () => {

    let changeOutfitBtnValue = Number(changeOutfitBtn.value);
    let asset = assetList[changeOutfitBtnValue];

    animationContainer.removeAttribute('class'); // reset animation

    // 📌

    if (changeOutfitBtnValue < assetList.length) {

        // 📌 update outfit/portrait IMG + changeOutfitBox TEXT

        changeOutfitBoxText.innerText = asset['text'];
        outfit.src = asset['outfit_url'];
        portrait.src = asset['portrait_url'];

        // 📌 update changeOutfitBtn TEXT + ICON

        changeOutfitBtnText.innerText = asset['button'];

        if (changeOutfitBtnText.innerText === 'próximo') {
            changeOutfitBtnIcon.src = 'assets/img/icons/btn_icons/next.png';
        } else {
            changeOutfitBtnIcon.src = 'assets/img/icons/btn_icons/talk.png';
        }

        // 📌 animate portrait (according to frame)

        if (changeOutfitBtnValue > 3) {
            doAnimation();
        }

        // 📌 play audio

        let CASsoundtrack = document.getElementById('CASsoundtrack');
        CASsoundtrack.volume = 0.05;

        if (changeOutfitBtnValue === 4) {
            CASsoundtrack.play();
        }

        // 📌 update changeOutfitBtnValue

        console.log(changeOutfitBtnValue);

        changeOutfitBtnValue++;
        changeOutfitBtn.value = `${changeOutfitBtnValue}`;

        console.log(changeOutfitBtnValue);

    } else {
        chooseOutfitBox.setAttribute('class', 'contentBox');
        changeOutfitBox.setAttribute('class', 'hidden');
    }

});