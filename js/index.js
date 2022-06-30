//URL DE API-REST-CAT
const URL_CAT = 'https://api.thecatapi.com/v1/images/search';
//Tag img
let img = document.querySelector('.img__cat')
//Button reload
const btnReload = document.querySelector('.reload');
//btn download
const btnDownload = document.querySelector('.download');

const getCat = async ()=>{
    const getCatFeth = await fetch(URL_CAT);
    let cat = await getCatFeth.json();

    return cat[0].url
}

btnReload.addEventListener('click', async ()=>{
    const url = await getCat();
    img.src = url;
    btnDownload.href = url;
})
window.addEventListener('load', async ()=>{
    const url = await getCat();
    img.src = url;
    btnDownload.href = url;
})

btnDownload.addEventListener('click', async ()=>{
    btnDownload.download = true;
    btnDownload.target = '_blank'
})