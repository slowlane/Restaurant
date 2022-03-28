export function menuContent(){

    const content = document.getElementById("content");

    const menuDiv = document.createElement("div");

    const homeHeader = document.createElement("h1");
    homeHeader.innerHTML = "Welcome to THE Restaurant MENUUU!";

    const descParaDiv = document.createElement("div");
    const descPara = document.createElement("p");
    descPara.innerHTML = "If this were an actual restaurant there might have been some menu items here and different foods here.";

    const infoParaDiv = document.createElement("div");
    const infoPara = document.createElement("p");
    infoPara.innerHTML = "There's info here. Good info! Such as location, times.. general info";

    //Add some classes for easier styling
    menuDiv.classList.add("content-div");
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