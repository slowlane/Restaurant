export const buttonFunctionality = (function(){
    const content = document.getElementById("content");
    const navBarList = content.getElementsByClassName("nav-li");

    
    for(let li of navBarList){
        li.addEventListener("click", pageChange);
    }
    

    function pageChange(event){
        hideHTML();
        
        switch(event.target.innerHTML){
            case "Home":
                const homeDiv = content.querySelector("#homeDiv");
                homeDiv.classList.toggle("hidden");
                break;
            case "Menu":
                const menuDiv = content.querySelector("#menuDiv");
                menuDiv.classList.toggle("hidden");
                break;
            case "Contact":
                const contactDiv = content.querySelector("#contactDiv");
                contactDiv.classList.toggle("hidden");
                break;
            default:
                break;
        } 
    }

    function hideHTML(){
        const homeDiv = content.querySelector("#homeDiv");
        const menuDiv = content.querySelector("#menuDiv");
        const contactDiv = content.querySelector("#contactDiv");

        homeDiv.classList.add("hidden");
        menuDiv.classList.add("hidden");
        contactDiv.classList.add("hidden");
    }
});






