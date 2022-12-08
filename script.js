const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".navbarlist-mobile");

icon.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});


/* ************** zoom img domaine ************* */
const img1= document.querySelector('.domaine1');
const img2= document.querySelector('.domaine2');
const img3= document.querySelector('.domaine3');
const pic = document.querySelector('.domaine1 img');


img1.addEventListener("mouseenter", function(){
  
  img1.classList.add("domaine-change");
  pic.classList.add("img-change");
});
img1.addEventListener("mouseleave", function(){
  
  img1.classList.remove("domaine-change");
  pic.classList.remove("img-change");
});
img2.addEventListener("mouseenter", function(){
  
  img2.classList.add("domaine-change");
  pic.classList.add("img-change");
});
img2.addEventListener("mouseleave", function(){
  
  img2.classList.remove("domaine-change");
  pic.classList.remove("img-change");
});
img3.addEventListener("mouseenter", function(){
  
  img3.classList.add("domaine-change");
  pic.classList.add("img-change");
});
img3.addEventListener("mouseleave", function(){
  
  img3.classList.remove("domaine-change");
  pic.classList.remove("img-change");
});

/* **********************************************fin zoom image *************************************** */
/* *****************************************liste de noms à proposer ************** */

const form = document.querySelector("#form");
const nomInput = document.querySelector("#nomInput");
const listNoms = document.querySelector("#listNoms");

form.onsubmit = function(e) {
  e.preventDefault();
  const newList = document.createElement("li");
  newList.innerHTML = nomInput.value;
  listNoms.appendChild(newList);
  nomInput.value = "";
};

console.log(form)




/* ************** fin de liste de noms **************************** */

