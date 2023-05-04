
const linkItem = document.querySelectorAll(".side-bar-content-row")
const navLinks = document.querySelectorAll(".nav-links")

linkItem.forEach(link =>{
    link.addEventListener('click', function() {
        linkItem.forEach(activelink => {
          activelink.classList.remove("active")
        })
        
        this.classList.add('active')
    })
})

navLinks.forEach(link =>{
    link.addEventListener('click', function() {
        navLinks.forEach(activelink => {
          activelink.classList.remove("active")
        })
        
        this.classList.add('active')
    })
})

