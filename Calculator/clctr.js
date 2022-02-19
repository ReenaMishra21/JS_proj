function display(inp){
    document.getElementById("textarea").value+=inp;
}

function calculate(){
    var a = document.getElementById('textarea').value;
    var result = eval(a);
    document.getElementById('textarea').value=result;
}

function clr(){
    document.getElementById("textarea").value='';
}

function backspace(){
    var a = document.getElementById("textarea").value;
    a = a.replace(/ /g,'');
    a = a.slice(0,-1);
    document.getElementById('textarea').value=a;    
}








