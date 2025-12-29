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