let btn = document.querySelector(".btn");
let cont = document.querySelector(".container");
btn.addEventListener(("click"),(event)=>{
    event.preventDefault();
    if(btn.innerText == "Light"){
        cont.style.backgroundColor = "black";
        btn.innerText = "Dark";
    }else{
        cont.style.backgroundColor = "white";
        btn.innerText = "Light";
    }
})