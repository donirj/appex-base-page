const body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".dark-light"),
        searchToggle = document.querySelector(".searchToggle"),
        sidebarOpen = document.querySelector(".sidebarOpen"),
        sidebarClose = document.querySelector(".sidebarClose");
        
        //js toggle dark and light
        modeToggle.addEventListener("click", () => {
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark")
            console.log('clickEADO')
        })

        //js code to toggle search box
        searchToggle.addEventListener("click", () => {
        searchToggle.classList.toggle("active");
        })

        //js code to toggle sidebar
        sidebarOpen.addEventListener('click', () => {
            nav.classList.add('active');
        })

        body.addEventListener("click", e => {
            let clickedElm = e.target;

            if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
                nav.classList.remove("active")
            }
        });