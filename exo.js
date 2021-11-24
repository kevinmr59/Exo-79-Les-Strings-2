let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('pomme'));

console.log(pomme.lastIndexOf('m'));

console.log(pomme.startsWith('Elle'));

console.log(pomme.endsWith('!'));

let nouvelleChaine
nouvelleChaine=pomme.substring(18,21);
nouvelleChaine.innerHTML="pomme";
console.log(pomme[0]);
let ligne =document.getElementById('one-line');


for (let i=0; i<pomme.length;i++){
   ligne.innerHTML+= pomme[i]+'<br>'
    console.log(pomme [i])
}