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