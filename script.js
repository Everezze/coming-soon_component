const button= document.querySelector("button");
const emailInput= document.querySelector("input");
const errorMessage = document.querySelector("form+span");
const warningIcon = document.querySelector("button .warning-icon");
//console.log(warningIcon);
//console.log(emailInput);

const myRegex = /^\w+@\w+\.[a-z]{2,3}$/;

button.addEventListener("click",function(e){
    console.log(emailInput.value.match(myRegex));
    if(!emailInput.value.match(myRegex) || emailInput.value == ""){
        e.preventDefault();
        emailInput.classList.add("error");
        errorMessage.classList.add("error");
        button.classList.add("error");
        warningIcon.classList.add("error");
    }
    //console.log("button clicked");
    //console.log(typeof emailInput.value);
});

emailInput.addEventListener("input",function(e){
    if(this.value =="" || this.value.match(myRegex)){
        emailInput.classList.remove("error");
        errorMessage.classList.remove("error");
        button.classList.remove("error");
        warningIcon.classList.remove("error");
    }
});
