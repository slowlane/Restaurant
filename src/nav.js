import Icon from './icon.png';

export function addNavContent(){
    
    const content = document.getElementById("content");
    console.log(content);

    const header1 = document.createElement("h1");
    header1.innerHTML = "The Greatest Restaurant!";
    
    const myIcon = new Image();
    myIcon.src = Icon;

    const paragraph = document.createElement("p");
    paragraph.innerHTML = "The greatest restaurant you've ever witnessed. For sure."
    
    content.appendChild(myIcon);
    content.appendChild(header1);
    content.appendChild(paragraph);



    
};