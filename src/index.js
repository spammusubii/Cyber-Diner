import { home } from "./home";
import { menu } from "./menu";
import { contactUs } from "./contactUs";
import "./styles.css"

(function setUpTabs(){
    const TABS = {
        home: "home",
        menu: "menu",
        contactUs: "contactUs",
    }

    const tabButtons = Array.from(document.querySelectorAll(".link > button"));
    const contentContainer = document.querySelector("#content");
    let currentTab = null;

    if (!tabButtons.length || !contentContainer){
        console.error("Tab buttons or content container not found");
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const clickedTab = event.currentTarget;
            setCurrentTab(clickedTab);
            renderCurrentTab();
        })
    })
    
    
    function clearContent(){
        contentContainer.innerHTML = "";
    }

    function renderCurrentTab(){
        clearContent();
        
        const tab = getCurrentTabId();
        switch(tab){
            case TABS.home:
                home();
                break;
            case TABS.menu:
                menu();
                break;
            case TABS.contactUs:
                contactUs();
                break;
            default:
                console.error(`Unknown tab ID: ${tab}`)
        }
    }

    function getCurrentTabId(){
        return currentTab?.id || null;
    }

    function setCurrentTab(tab){
        if (currentTab) {
            currentTab.classList.remove("active");
        }
        currentTab = tab;
        currentTab.classList.add("active");
    }

    function initialize(tab){
        setCurrentTab(tab);
        renderCurrentTab();
    }
    
    initialize(tabButtons[0]);
})();