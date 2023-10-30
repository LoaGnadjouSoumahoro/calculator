
/*Récupérer tous les touches
[... ]: Permet de récupérer les élements sous forme de tableau
*/

const touche = [...document.querySelectorAll('.button')];

/*Pour récupérer tous les key code des touches, on utilise une fonction map  

*/
const listKeyCode = touche.map((element) => element.dataset.key);

//appeler l'écran
const ecran = document.querySelector('.ecrant')

//quand on appuis sur le clavier
document.addEventListener("keydown", (e) => {
  const val = e.keyCode.toString();
  calculer(val)
 
});
//quand on appuit sur la calculatrice
document.addEventListener('click', (e)=>{
    const val = e.target.dataset.key
   calculer(val)

})

//récupérer les keycode enfoction d'click sur le clavier
const calculer = (val)=>{
  //si l'utilisateur appuis sur un bouton autre que les touches
  // includes
  if(listKeyCode.includes(val)){
  switch(val){
  case '8':
  ecran.textContent = "";
    break
  case '13':
      //eval: permet d'evaleur 
      const calcul = eval(ecran.textContent);
      ecran.textContent = calcul;
      break
  
  default:
  
  const indexKeyCode = listKeyCode.indexOf(val);
  const touch = touche[indexKeyCode];
  //Pour que quand l'utilisateur appuis sur plusieur code cela s'affiche sans écraser les autres
  
  //innerHTML récupare la valeur de l'element pour l'afficher(dans le HTML) à l'écran
  ecran.textContent = ecran.textContent + touch.innerHTML;
  }
  }
  }
window.addEventListener('error', (e)=>{
alert("erreur operation echouer"+ e.message)
})



