export function menuContent(){

    const content = document.getElementById("content");

    const menuDiv = document.createElement("div");

    const homeHeader = document.createElement("h1");
    homeHeader.innerHTML = "Welcome to THE Restaurant MENUUU!";

    const descParaDiv = document.createElement("div");
    const descPara = document.createElement("p");
    descPara.innerHTML = "A brand new restaurant coming near you! Don't miss out on an experience you could not possibly get anywhere else";

    const infoParaDiv = document.createElement("div");
    const infoPara = document.createElement("p");
    infoPara.innerHTML = "There's info here. Good info! Such as location, times.. general info";

    //Add some classes for easier styling
    menuDiv.classList.add("content-div", "hidden");
    menuDiv.id = "menuDiv";
    descParaDiv.classList.add("home-inner-div");
    infoParaDiv.classList.add("home-inner-div");

    // Append children
    content.appendChild(menuDiv);

    menuDiv.appendChild(homeHeader);
    menuDiv.appendChild(descParaDiv);
    menuDiv.appendChild(infoParaDiv);

    descParaDiv.appendChild(descPara);
    infoParaDiv.appendChild(infoPara);
    

};