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
        removeHTML();
        
        //Populate HTML
        switch(event.target.innerHTML){
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
});






