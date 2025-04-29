import hotdog from "./assets/images/hotdog.jpg";
import hamburger from "./assets/images/hamburger.jpg";
import fries from "./assets/images/fries.jpg";
import donut from "./assets/images/donut.jpg";

export const menu = function(){
    const contentDiv = document.querySelector("#content");

    const headline = document.createElement("h1");
    headline.textContent = "Menu"
    contentDiv.appendChild(headline);

    const foodItems = [
        {
            food: "Cheeseburger",
            description: 
                `A protein disk once harvested from 
                Earth-bred livestock, encased in a dual-carb compression shell. 
                Topped with fermented plant matter and synthetic sauces for dopamine enhancement. 
                It was the meal of rebels, workers, and street kings alike.`,
            url: hamburger,
            price: "¥17.9k credchips",
        },
        {
            food: "Hotdog",
            description:
                `A meat cylinder encased in a dermal sleeve, served inside a bread fold. 
                Ancient toppings included a mustard-based acid and sugar-vinegar glaze. 
                Said to be consumed one-handed in alley races and rooftop brawls.`,
            url: hotdog,
            price: "¥12.4k credchips",
        },
        {
            food: "Fries",
            description:
                `Thin-cut starch rods deep-fried in early oil tech. Served as side protocol 
                to most meal constructs. Addictive to the point of neural override. Rumored 
                to be banned in early Neo-Tokyo for its crowd incitement properties.`,
            url: fries,
            price: "¥8.8k credchips",
        },
        {
            food: "Donut",
            description:
                `Circular fried dough relic coated in glaze tech. Used in ancient rituals called 'breakfasts.'
                High sugar concentration made it a favorite among hackers pulling 72-hour code dives. Often 
                decorated with colorful sprinkles — a pre-augmented form of data masking.`,
            url: donut,
            price: "¥6.2k credchips",
        }
    ];

    function initialize(){
        foodItems.forEach( (item) => {
            const foodContainerDiv = document.createElement("div");
            foodContainerDiv.classList.add("content-item-container");

            const heading = document.createElement("h2");
            heading.textContent = item.food;
            foodContainerDiv.appendChild(heading);

            const ul = document.createElement("ul");

            const imgLi = document.createElement("li");
            const img = document.createElement("img");
            img.src = item.url;
            img.classList.add("foodImage");
            imgLi.appendChild(img);
            ul.appendChild(imgLi);

            const descriptionLi = document.createElement("li");
            const description = document.createElement("p");
            description.textContent = item.description;
            descriptionLi.appendChild(description);
            ul.appendChild(descriptionLi);

            const priceLi = document.createElement("li");
            priceLi.textContent = `Price: ${item.price}`;
            priceLi.classList.add("price")
            ul.appendChild(priceLi);

            foodContainerDiv.appendChild(ul);
            contentDiv.appendChild(foodContainerDiv);
        });
    }

    initialize();
}