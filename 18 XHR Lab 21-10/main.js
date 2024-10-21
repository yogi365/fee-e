const countryContainer = document.querySelector('.container');

const req = new XMLHttpRequest();
req.open('get','https://restcountries.com/v3.1/all',true);
req.responseType='json';
req.send();

req.addEventListener('load',()=>{
   req.response.forEach(createCountryDiv);
})

function createCountryDiv(countryObject){
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = countryObject.flags.png;
    img.alt = countryObject.name.common;

    const h4 = document.createElement('h4');
    h4.innerText = countryObject.name.common;

    div.append(img,h4);
    countryContainer.append(div);
}