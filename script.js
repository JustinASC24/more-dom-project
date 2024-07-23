let add_pg = document.getElementById('p-button');
let add_img = document.getElementById('img-button');
let do_nothing = document.getElementById('nothing-button')

let p_div = document.getElementById('p-div');
let img_div = document.getElementById('img-div');
let nothing_div = document.getElementById('nothing-div');

let pCount = document.getElementById('pcount');
let imgCount = document.getElementById('imgcount');
let nothingCount = document.getElementById('nothingcount');

add_pg.onclick = function () {
    img_div.style.display = 'none';
    p_div.style.display = 'block';
    nothing_div.style.display = 'none';
    var newParagraph = document.createElement ("p");
    newParagraph.innerHTML = 'Hello, my name is Justin';
    pCount.innerHTML = parseInt(pCount.innerHTML) + 1;
    p_div.appendChild(newParagraph);
}

add_img.onclick = function () {
    p_div.style.display = 'none';
    img_div.style.display = 'block';
    nothing_div.style.display = 'none';
    var newImg = document.createElement ("img");
    newImg.src = 'https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu.png'
    imgCount.innerHTML = parseInt(imgCount.innerHTML) + 1;
    img_div.appendChild(newImg);
}   

do_nothing.onclick = function () {
    p_div.style.display = 'none';
    img_div.style.display = 'none';
    nothing_div.style.display = 'block';
    nothingCount.innerHTML = parseInt(nothingCount.innerHTML) + 1;



}



