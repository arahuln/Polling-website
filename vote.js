const options = document.querySelectorAll("label");
for(let i=0; i< options.length; i++){
    options[i].addEventListenerI("click",()=>{
        for(let j=0; j < options.length; j++){
            if(options[j].classList.contains("selected"))
        }
        options[j].classList.remove("selected");
    }
}

options[i].classList.add("selected");
for(let k=0; k<options,length; k++){
    options[k].classList.add("selectall");
}

let forVal = options[i].getAttribute("for");
let selectInput = document.querySelector("#"+forVal);
letgetAtt = selectInput.getAttribute("type");
if(getAtt == "checkbox"){
    selectInput.setAttribute("type", "radio")
}else if(selectInput.checked == true){
    options[i].classList.remove("selected");
    selectInput.setAttribute("type","checkbox");
}

let array = [];
for (let l = 0;l <options.length; l++ ){
    if(options[1].classList.contains("selected"))
    {
        array.push(1);
    }
}
if(array.length == 0){
    for(let m = 0; m < options.length; m++){
        options[m].removeAttribute("class");
    }
}