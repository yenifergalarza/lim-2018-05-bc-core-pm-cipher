//window.cipher = {
window.cipher = {
encode:(offset,string) => { 
const key1=parseInt(offset);
let Encriptar = "";
for(let i = 0; i < string.length; i++)
{
    var t1 = (string.charCodeAt(i)-65+key1)%26+65;
   Encriptar += String.fromCharCode(t1); 
}
return  Encriptar;
} ,
decode:(offset,string) => { 
  const key2=parseInt(offset);
  let Desencriptar = "";
  for(let i = 0; i < string.length; i++)
  {
      var t2 = (string.charCodeAt(i)-65-key2+26*2)%26+65;
     Desencriptar += String.fromCharCode(t2); 
  }
  return  Desencriptar;
  }



}

/*const mensajeInput =  document.getElementById('mensaje');
const buttonEncriptar = document.getElementById('button-encriptar');
const claveInput = document.getElementById('clave');*/

  /* const key1 = parseInt(keyInput.value);
  const  word1 = wordInput.value;
  var Encriptar = "";
  for(let i = 0; i < word1.length; i++){
      var t1 = (word1.charCodeAt(i)-65+key1)%26+65;
     Encriptar += String.fromCharCode(t1);
  }
  
  document.getElementById("Encriptar").innerHTML=Encriptar;
console.log(Encriptar);



//buttonEncriptar.addEventListener('click', encriptar);



const decipher= () =>{
const key2= parseInt(keyInputD.value);
const  word2 = wordInputD.value;
var Desencriptar = "";
for(let i = 0; i < word2.length; i++){
    var t2 = (word2.charCodeAt(i)-65+(26-key2)%26+65 );
   Desencriptar += String.fromCharCode(t2);
}
document.getElementById("Desencriptar").innerHTML=Desencriptar;
console.log(Desencriptar);
}
//buttonEncriptar.addEventListener('click', encriptar);
 */