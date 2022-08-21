const PROD = "https://japceibal.github.io/emercado-api/cats_products/101.json";

async function getData(url) {
    const respuesta = await fetch(url);
    if (respuesta.ok) {
        const data = await respuesta.json();
        return data;
      }
      else {
        console.error('petición errónea');
      }
     
} 

document.addEventListener('DOMContentLoaded', async () => {
    const productos = await getData(PROD);
 

     let productsArray = [];


function showProductsList(){
    let htmlContentToAppend = "";

    for (let i = 0; i < productsArray.length; i++) { 
        var nro = productsArray[i]; 
        htmlContentToAppend += `

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src="${productos.nro.image}" class="card-img-top" alt="`+ productos.nro.name +`">
              <div class="card-body">
                <h5 class="card-title">`+ productos.nro.name +`</h5>
                <h6 class="cost">`+ productos.nro.cost +` `+ productos.nro.currency +`</h6>
                <p class="card-text">`+ productos.nro.description +`</p>
              </div>
            </div>
          </div>-->
        `
        
    }    
        
}
 document.getElementById("productos").innerHTML = htmlContentToAppend; 
 })