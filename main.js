// Humberger Menu 
const nabBar = document.querySelector("#ul-item")
const hum = document.querySelector(".humberger")
const bars = document.querySelector(".fa-bars")
const Xbar = document.querySelector(".fa-x")

hum.addEventListener("click", ()=>{
    nabBar.classList.toggle("active")
    bars.classList.toggle("active")
    Xbar.classList.toggle("active")
})

document.querySelectorAll("#ul-item li a").forEach(link => {
    link.addEventListener("click", () => {
        nabBar.classList.remove("active");
        bars.classList.toggle("active");
        Xbar.classList.toggle("active");
    });
});

const filterButton = document.querySelectorAll(".filter-btn")

const menuItems = document.querySelectorAll(".item")


filterButton.forEach((button) => {
    button.addEventListener("click", ()=>{
        const category = button.getAttribute("data-category")
        
        menuItems.forEach((item) => {
            if (category === "all" || category === item.getAttribute("data-category")){
                item.style.display = "flex"
            }else {
                item.style.display = "none"
            }
        })
    })
})

// Add Scrol to top action
const scrollTop = document.querySelector(".scroll-to-top")

window.addEventListener("scroll", ()=>{
    if (window.scrollY >= 200){
        scrollTop.classList.add("show")
    }else{
        scrollTop.className = "scroll-to-top"
    }
})

scrollTop.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})


// Validation of Form
const form = document.querySelector("form")
const username = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")

// Show Error function
function showError(input , message){
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const span = formControl.querySelector("span")
    span.innerText = message;
}
// Show Success function 

function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = "form-control"
}
form.addEventListener("submit", (e)=>{
    let isValid = true
    // User Name
    if(username.value.trim() ===""){
        showError(username, "Your name is require")
        isValid = false
    } else{
        showSuccess(username)
    }
    // Email
    if(email.value.trim() ===""){
        showError(email, "Your Email is require")
        isValid = false
    } else{
        showSuccess(email)
    }
    // Phone
    if(phone.value.trim() ===""){
        showError(phone, "Your Phone is require")
        isValid = false
    }else if (phone.value.trim().length !==11){
        showError(phone , "Enter 11 number correct")
        isValid = false
    } 
    else{
        showSuccess(phone)
    }
    // Message
    if(message.value.trim() ===""){
        showError(message, "No message?")
        isValid = false
    } else{
        showSuccess(message)
    }

    if(isValid === false){
        e.preventDefault()
    }
})