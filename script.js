const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".navbarlist-mobile");

icon.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
});



/* *****************liste de noms à proposer ************** */

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

