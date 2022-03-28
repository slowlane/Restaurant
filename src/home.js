
export function homeContent(){

    const content = document.getElementById("content");

    const homeDiv = document.createElement("div");
    

    const homeHeaderDiv = document.createElement("div");
    const homeHeader = document.createElement("h1");
    homeHeader.innerHTML = "Welcome to THE Restaurant!";

    const descParaDiv = document.createElement("div");
    const descPara = document.createElement("p");
    descPara.innerHTML = "A brand new restaurant coming near you! Don't miss out on an experience you could not possibly get anywhere else";

    const infoParaDiv = document.createElement("div");
    const infoPara = document.createElement("p");
    infoPara.innerHTML = "There's info here. Good info! Such as location, times.. general info";

    //Add some classes for easier styling
    homeDiv.classList.add("home-div");
    homeHeaderDiv.classList.add("home-inner-div");
    descParaDiv.classList.add("home-inner-div");
    infoParaDiv.classList.add("home-inner-div");

    // Append children
    content.appendChild(homeDiv);

    homeDiv.appendChild(homeHeaderDiv);
    homeDiv.appendChild(descParaDiv);
    homeDiv.appendChild(infoParaDiv);

    homeHeaderDiv.appendChild(homeHeader);
    descParaDiv.appendChild(descPara);
    infoParaDiv.appendChild(infoPara);
    








}