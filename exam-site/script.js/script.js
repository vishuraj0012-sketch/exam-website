function startTest(){
let name=document.getElementById("name").value;

if(name==""){
alert("Enter your name first");
return;
}

alert("Test Started for "+name);
}