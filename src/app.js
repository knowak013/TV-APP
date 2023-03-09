import {mapListToDOMElements} from "./domInteractions.js"

class TvApp{
    constructor(){
        this.ViewElems = {}
        this.showNameButtons = {}
        this.selectedName = "Harry"
        this.initializeApp()
    }

    initializeApp = () => {
        this.connectDOMElements()
    }

    connectDOMElements = () => { 
        const listOfIds = Array.from(document.querySelectorAll('[id]')).map(elem => elem.id)
        const listOfShowNames = Array.from(document.querySelectorAll('[data-show-name]')).map(elem => elem.dataset.showName);

        console.log(listOfShowNames);

       this.ViewElems = mapListToDOMElements(listOfIds,'id')
       this.showNameButtons = mapListToDOMElements(listOfShowNames,'data-show-name')

       console.log(this.showNameButtons)
    }
    setupListenners = () =>{
        
        Object.keys(this.showNameButtons).forEach(showName=>{
            this.showNameButtons[showName].addEventListener('click', this.setCurrentNameFilter);
        })

       }
    setCurrentNameFilter = () =>{
        this.selectedName = Event.target.dataset.showName;
    }

}

document.addEventListener("DOMContentLoaded", new TvApp())