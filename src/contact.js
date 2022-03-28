export function contactContent(){

    const content = document.getElementById("content");

    const contactDiv = document.createElement("div");

    const homeHeader = document.createElement("h1");
    homeHeader.innerHTML = "Welcome to THE Restaurant CONTAAACTS!";

    const descParaDiv = document.createElement("div");
    const descPara = document.createElement("p");
    descPara.innerHTML = "Contact us at.. who knows. Maybe don't contact us.";

    const infoParaDiv = document.createElement("div");
    const infoPara = document.createElement("p");
    infoPara.innerHTML = "There's info here. Good info! Such as location, times.. general info, possibly some e-mails and phone-numbers!";

    //Add some classes for easier styling
    contactDiv.classList.add("content-div");
    contactDiv.id = "contactDiv";
    descParaDiv.classList.add("home-inner-div");
    infoParaDiv.classList.add("home-inner-div");

    // Append children
    content.appendChild(contactDiv);

    contactDiv.appendChild(homeHeader);
    contactDiv.appendChild(descParaDiv);
    contactDiv.appendChild(infoParaDiv);

    descParaDiv.appendChild(descPara);
    infoParaDiv.appendChild(infoPara);
    

};