const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");


function addfunc(){
    if (inputbox.value === ''){
        alert('you have to add task');
    }
    else {
        let task = document.createElement("li");
        task.innerHTML = inputbox.value;
        listcontainer.appendChild(task);
        inputbox.value = '';
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        task.appendChild(cross);
        info()
    }
    
}


listcontainer.addEventListener("click",function(e){
     if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        info()
     }
     
})


function info(){
    localStorage.setItem("appinfo", listcontainer.innerHTML);
}

function infoshow(){
    listcontainer.innerHTML = localStorage.getItem("appinfo");
}
infoshow();