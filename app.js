const iconsError = document.querySelectorAll(".user-text img")
const btn = document.querySelector(".btn button")
const errorMsg = document.querySelectorAll(".user p")
const inputs = document.querySelectorAll("input")
const b = document.querySelector("body")

let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function handleform(input, errormsg, iconserror){
    if(!input.value){
        input.classList.add("error")
        errormsg.style.display = "block"
        iconserror.style.visibility = "inherit"
    }
    else{
        input.classList.remove("error")
        errormsg.style.display = "none"
        iconserror.style.visibility = "hidden"
    }
}
btn.addEventListener("click",()=>{
    handleform(inputs[0], errorMsg[0], iconsError[0])  
    handleform(inputs[1], errorMsg[1], iconsError[1])
    if(!(regex.test(inputs[2].value))){
        inputs[2].classList.add("error")
        errorMsg[2].style.display = "block"
        iconsError[2].style.visibility = "inherit"
    }
    else{
        inputs[2].classList.remove("error")
        errorMsg[2].style.display = "none"
        iconsError[2].style.visibility = "hidden"
    }
    handleform(inputs[3], errorMsg[3], iconsError[3])
})
