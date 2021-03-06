export function addNavContent(){
    
    const content = document.getElementById("content");

    const navDiv = document.createElement("div");

    const navList = document.createElement("ul");
    
    const navLi1 = document.createElement("li");
    const navLi2 = document.createElement("li");
    const navLi3 = document.createElement("li");

    navLi1.innerHTML = "Home";
    navLi2.innerHTML = "Menu";
    navLi3.innerHTML = "Contact";

    content.appendChild(navDiv);
    
    navDiv.appendChild(navList);
    
    navList.appendChild(navLi1);
    navList.appendChild(navLi2);
    navList.appendChild(navLi3);

    navDiv.classList.add("nav-div");
    navLi1.classList.add("nav-li", "active-nav");
    navLi2.classList.add("nav-li");
    navLi3.classList.add("nav-li");
};