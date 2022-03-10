const images = [
    ["url('assets/img/outfits/sleep_outfit.png')", "url('assets/img/portraits/sleep_01_portrait.png')"],
    ["url('assets/img/outfits/sleep_outfit.png')", "url('assets/img/portraits/sleep_02_portrait.png')"],
    ["url('assets/img/outfits/sleep_outfit.png')", "url('assets/img/portraits/sleep_03_portrait.png')"],
    ["url('assets/img/outfits/sleep_outfit.png')", "url('assets/img/portraits/sleep_04_portrait.png')"],
    ["url('assets/img/outfits/everyday_outfit.png')", "url('assets/img/portraits/everyday_portrait.png')"],
    ["url('assets/img/outfits/formal_outfit.png')", "url('assets/img/portraits/formal_portrait.png')"],
    ["url('assets/img/outfits/party_outfit.png')", "url('assets/img/portraits/party_portrait.png')"],
    ["url('assets/img/outfits/swim_outfit.png')", "url('assets/img/portraits/swim_portrait.png')"],
    ["url('assets/img/outfits/athletic_outfit.png')", "url('assets/img/portraits/athletic_portrait.png')"]
]

const btn = document.querySelector('#changeBtn');

btn.addEventListener('click', () => {

    document.body.style.backgroundImage = "url('assets/img/outfits/athletic_outfit.png')";
});



// const elementoNome = document.getElementById('nome'); /* Cria a variável elementoNome e coloca o elemento com o id nome nela */
// const elementoSituacao = document.querySelector('#situacao'); /* Cria a variável elementoSituacao e coloca o elemento com o id situacao nela */
// const elementoImg = document.querySelector('#imagem') /* Cria a variável elementoImg e coloca o elemento com o id imagem nela */
// let elementoBtn = document.querySelector('#alterar') /* Cria a variável elementoBtn e coloca o elemento com o id alterar nela */

// /* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
// elementoBtn.addEventListener('click', () =>{
//     /* Verifica se o valour do botão é 'primeiro', se for troque de humor para o Hulk */
//     if(elementoBtn.value == 'primeiro'){
//         elementoImg.src = './assets/img/Hulk.png' /* Troca a imagem do personagem */
//         elementoNome.innerText = 'Hulk' /* Altera o texto do elemento nome */
//         elementoSituacao.innerText = 'Pistola' /* Altera o texto do elemento situação */
//         elementoBtn.value = 'segundo' /* Altera valor do botão */
//     } else if(elementoBtn.value == 'segundo') { /* Verifica se o valour do botão é 'segundo', se for troque de humor para o Dr. Hulk */
//         elementoImg.src = './assets/img/Dr. Hulk.png'  /* Troca a imagem do personagem */
//         elementoNome.innerText = 'Dr. Hulk' /* Altera o texto do elemento nome */
//         elementoSituacao.innerText = 'Pistola geek' /* Altera o texto do elemento situação */
//         elementoBtn.value = 'terceiro'  /* Altera valor do botão */
//     } else { /* Se os valores do botão não forem, 'primeiro' nem 'segundo' mude para o Dr. Banner */
//         elementoImg.src = './assets/img/Dr. Banner.png' /* Troca a imagem do personagem */
//         elementoNome.innerText = 'Dr. Banner' /* Altera o texto do elemento nome */
//         elementoSituacao.innerText = 'Simples humano' /* Altera o texto do elemento situação */
//         elementoBtn.value = 'primeiro' /* Altera valor do botão */
//     }
// })