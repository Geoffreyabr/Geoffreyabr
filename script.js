/* *****************liste de noms à proposer ************** */

const form = document.querySelector('#form');
const nomInput = document.querySelector('#nomInput');
const listNoms = document.querySelector('#listNoms');

form.onsubmit = function (event) {

    event.preventDefault();

    const newList = document.createElement('li');
    newList.innerHTML = nomInput.value;
    listNoms.appendChild(newList);
    nomInput.value = "";
};
/* ************** fin de liste de noms **************************** */
