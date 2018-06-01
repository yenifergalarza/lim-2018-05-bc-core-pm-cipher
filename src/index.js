//Capturando variables :DOM
const wordInput =  document.getElementById('word');
const buttonCipher = document.getElementById('button-cipher');
const keyInput = document.getElementById('key');
const Encriptar =document.getElementById('Encriptar');


 
const cifrado = () => {

    let clave =keyInput.value;
    let texto = wordInput.value;
    Encriptar.value=window.cipher.encode(clave,texto);
}



buttonCipher.addEventListener('click', cifrado);
//Escuchando Evento :Boton encriptar
const wordInputD =  document.getElementById('word2');
const buttonDecipher = document.getElementById('button-decipher');
const keyInputD = document.getElementById('key2');
const desencriptar=document.getElementById('Desencriptar');

const descifrado =() =>{
    let clave =keyInputD.value;
    let texto = wordInputD.value;
    desencriptar.value=window.cipher.decode(clave,texto);
  
}
buttonDecipher.addEventListener('click',descifrado);

/*//Escuchando Evento: Boton Desencriptar
BtnDesencriptar.addEventListener('clik', cipher.encode());*/

 /*   const wordInputD =  document.getElementById('word2');
  const buttonDecipher = document.getElementById('button-decipher');
   const keyInputD = document.getElementById('key2');

//Escuchando Evento :Boton encriptar
    buttonDecipher.addEventListener('click', decode); */
/*//Escuchando Evento: Boton Desencriptar
BtnDesencriptar.addEventListener('clik', cipher.encode());*/

