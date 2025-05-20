var div = document.createElement("div");
div.innerHTML =
 `<div className="container">
 <div id='calculator'>
     <input type="text" placeholder="0  " id="output-screen">
     <button onclick="Clear()" id='clear'>CL</button>
     <button onclick="del()">DEL</button>
     <button onclick="display('%')">%</button>
     <button onclick="display('/')">/</button>
     <button onclick="display('7')">7</button>
     <button onclick="display('8')">8</button>
     <button onclick="display('9')">9</button>
     <button onclick="display('*')">*</button>
     <button onclick="display('4')">4</button> 
     <button onclick="display('5')">5</button>
     <button onclick="display('6')">6</button>
     <button onclick="display('-')" id='subtract'>-</button>
     <button onclick="display('1')" id='one'>1</button>
     <button onclick="display('2')" id='two'>2</button>
     <button onclick="display('3')">3</button>
     <button onclick="display('+')" id='add'>+</button>
     <button onclick="display('.')">.</button>
     <button onclick="display('0')">0</button>
     <button onclick="Calculate(result)" id='equal'>=</button>
     
 </div> 
</div>`
document.body.append(div);
let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}
document.querySelector('#clear').click();
var one = document.getElementById('1');
var two = document.getElementById('2');
var add = document.getElementById('add');
var result = document.getElementById('result');
one.click();
two.click();
add.click();
document.getElementById('equal').click();