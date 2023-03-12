import {mapListToDOMElements} from "./domInteractions.js"
import {getShowsByKey} from "./requests.js"
import {createDOMElement} from "./domInteractions.js"

class TvApp{
    constructor(){
        this.ViewElems = {}
        this.showNameButtons = {}
        this.selectedName = "Harry"
        this.initializeApp()
    }

    initializeApp = () => {
        this.connectDOMElements()
        this.setupListenners()
        this.fetchAndDispalShows()
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
            this.showNameButtons[showName].addEventListener('click', this.setCurrentNameFilter)
        })

       }
    setCurrentNameFilter = () =>{
        this.selectedName = Event.target.dataset.showName
        this.fetchAndDispalShows()
    }

    fetchAndDispalShows = () =>{
        getShowsByKey(this.selectedName).then(shows=> this.renderCard(shows))
    }

    renderCard = (shows) =>{
        for(const {show} of shows){
            this.createShowCard(show)
        }
    }

    createShowCard = show=>{

        const divCard = createDOMElement('div','card')
        const img = createDOMElement('img','card-img-top',null, show.image.medium)
        const divCardBody = createDOMElement('div','card-body')
        const h5 = createDOMElement('h5','card-title',show.name)
        const p = createDOMElement('p','card-text',show.summary)
        const btn = createDOMElement('button','btn btn-primary','Show details')

        divCard.appendChild(divCardBody);
        divCardBody.appendChild(img);
        divCardBody.appendChild(h5);
        divCardBody.appendChild(p);
        divCardBody.appendChild(btn);

        this.ViewElems.showsWrapper.appendChild(divCard);

    }
}

document.addEventListener("DOMContentLoaded", new TvApp())