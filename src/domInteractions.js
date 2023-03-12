const _getDomElem = (attribute,value) =>{
    return document.querySelector(`[${attribute}="${value}"]`);
}
const arr = [5,5,5];


export const mapListToDOMElements = (listOfValues, attribute) =>{
    const _viewElems = {}

    for(const value of listOfValues){
        _viewElems[value] = _getDomElem(attribute, value);
    }

    return _viewElems;
}

export const createDOMElement = (tagName,className,innerText,src) => {

    const tag = document.createElement(tagName)
    tag.classList= className;

    if (innerText)tag.innerText = innerText
    if (src) tag.src =src

    return tag
}