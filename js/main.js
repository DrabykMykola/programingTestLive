'use strict';

programingTestTemplate();

function UnSelectAllCheckboxes(){
    let items = document.getElementsByName('check');
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox')
            items[i].checked=false;
    }
};


let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];
let resultOfTest = document.getElementById('resultOfTest');

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function checkAnswers() {
    if (document.getElementById('id1.1').checked &&
        document.getElementById('id2.3').checked && 
        document.getElementById('id3.2').checked ) {
        modal.style.display = "block";
        resultOfTest.innerHTML = "Test passed.";
    } else {
        modal.style.display = "block";
        resultOfTest.innerHTML = "Test not passed.";
    };
    UnSelectAllCheckboxes();
};

let button = document.getElementById('button');
button.addEventListener('click', checkAnswers);
