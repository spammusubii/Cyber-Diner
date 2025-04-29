import cyberpunkStore from "./assets/images/cyberpunkStore.png"

export const home = function(){
    const contentDiv = document.querySelector("#content");

    const headline = document.createElement("h1");
    headline.textContent = "Cyber Diner";
    contentDiv.appendChild(headline);
    
    const descriptionDiv = document.createElement("div");
    const descriptionImage = document.createElement("img");
    descriptionImage.src = cyberpunkStore;
    descriptionDiv.appendChild(descriptionImage);
    const descriptionP = document.createElement("p");
    descriptionP.textContent = `
        We serve a variety of dishes that have been a staple in the past. Everything from the so-called
        burgers, french fries, donuts, and hotdogs.
    `;
    descriptionDiv.appendChild(descriptionP);
    descriptionDiv.classList.add("description-container")
    contentDiv.appendChild(descriptionDiv);


    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("content-item-container")
    const hoursh2 = document.createElement("h2");
    hoursh2.textContent = "Hours";
    hoursContainer.appendChild(hoursh2)
    const hoursList = document.createElement("ul");
    hoursList.classList.add("hoursList")
    const hoursOfOperation = [
        "Sunday: 12pm - 12am",
        "Monday: 11am - 4am",
        "Tuesday: 11am - 4am",
        "Wednesday: 11am - 4am",
        "Thursday: 11am - 4am",
        "Friday: 11am - 6am",
        "Saturday: 11am - 6am",
    ]
    hoursOfOperation.forEach((hour) => {
        const li = document.createElement("li");
        li.classList.add("hour");
        li.textContent = hour;
        hoursList.appendChild(li);
    })
    hoursContainer.appendChild(hoursList);
    contentDiv.appendChild(hoursContainer);

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("content-item-container");
    const addressh2 = document.createElement("h2");
    addressh2.textContent = "Location";
    addressDiv.appendChild(addressh2);
    const addressList = document.createElement("ul");
    const address = [
        "Neon Spire District, Sector 7",
        "Unit 314B, Chromehaven Tower",
        "8824 Ion Drift Avenue",
        "New Edo Megacity, 2094-ZX"
    ];
    address.forEach(line => {
        const li = document.createElement("li");
        li.textContent = line;
        addressList.appendChild(li);
    })
    addressDiv.appendChild(addressList);
    contentDiv.appendChild(addressDiv);
}