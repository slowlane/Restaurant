import { homeContent } from "./home";
import { menuContent } from "./menu";
import { contactContent } from "./contact";

export const buttonFunctionality = (function(){
    const content = document.getElementById("content");
    const navBarList = content.getElementsByClassName("nav-li");

    //Add events to navbar
    for(let li of navBarList){
        li.addEventListener("click", pageChange);
    }
    
    function pageChange(event){
        const menuText = event.target.innerHTML;
        
        removeHTML();
        setNavActive(menuText)
        
        //Populate HTML
        switch(menuText){
            case "Home":
                homeContent();
                break;
            case "Menu":
                menuContent();
                break;
            case "Contact":
                contactContent();
                break;
            default:
                break;
        } 
    }

    function removeHTML(){
        const homeDiv = content.querySelector("#homeDiv");
        const menuDiv = content.querySelector("#menuDiv");
        const contactDiv = content.querySelector("#contactDiv");

        homeDiv?.remove();
        menuDiv?.remove();
        contactDiv?.remove();
    }

    function setNavActive(string){
        for(let li of navBarList){
            li.classList.remove("active-nav");
        }
        for(let li of navBarList){
            if(li.innerText === string){
                li.classList.toggle("active-nav");
            }
        }
    }
});






