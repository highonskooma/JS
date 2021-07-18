const expect = require("expect");

let str1 = "teststring";

const array = ["toyota","nissan","mazda"];
array.push("mitsubishi");
let brand = array[1];

const car = {type:"Fiat", model:"500", color:"white"};
car.color="black";

function changeP(id) {
    document.getElementById(arguments[0]).innerHTML = "Paragraph changed.";
}

//document.getElementById('calc').addEventListener('click', updater);

function updater () {
    var cost = 25;
    var quantity = document.getElementById('quantity').value;
    var totalcost = (cost * quantity);
    document.getElementById('total').innerText = totalcost;
}

//const paragraphs = document.querySelectorAll("p"); //array contem todos os paragrafos da html


function reverser() {
    var str = document.getElementById("string").value;
    var res = "";
    for (var i=str.length - 1; i>=0; i--) {
        res += str[i];  //concats sucessivas
    }
    document.getElementById("rev").innerText = res;
}
/*
var p = document.getElementById('some-paragraph');
p.addEventListener('click', function(event) {
    p.innerHTML = 'You clicked it!';
});
*/
function sum(a, b) {
    return a + b;
}
module.exports = sum;


let map1 = new Map([[String.prototype, [Number.prototype]]]);
map1.set('gui', [3,6,2,1]);
map1.set('maria', [5,3,2,1]);
map1.set('velho', [1,2,5,4,2]);

