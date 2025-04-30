export const contactUs = function(){
    const contentDiv = document.querySelector("#content");
    const contactInfo = [
        {
            position: "Owner",
            name: "Chrome Oni",
            number: "+88-001-NE0N-777",
            email: "chrome.oni@overgrid.core"
        },
        {
            position: "Manager",
            name: "Kira Byewave",
            number: "+88-443-HX92-404",
            email: "kira.bw@gridpulse.net",
        },
        {
            position: "Assistant Manager",
            name: "Dex Null",
            number: "+88-773-GH05T-001",
            email: "dex.null@phostline.sys",
        }
    ]
    
    const headline = document.createElement("h1");
    headline.textContent = "Contact Us"
    contentDiv.appendChild(headline);

    contactInfo.forEach( contact => {
        const contactDiv = document.createElement("div");
        contactDiv.classList.add("content-item-container");

        const contactHeader = document.createElement("h2");
        contactHeader.textContent = contact.position;
        contactDiv.append(contactHeader);
        
        const contactUl = document.createElement("ul");
        ["name","number","email"].forEach(key => {
            const li = document.createElement("li");
            li.textContent = contact[key];
            contactUl.appendChild(li);
        })
        contactDiv.appendChild(contactUl);
        contentDiv.appendChild(contactDiv);
    })
    
}