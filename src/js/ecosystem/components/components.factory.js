import ecosysDom from '../ecosystem-dom-loader';

export var ecosysCounter = ecosysDom.ecosysCounter;
export var schemaTemplate =  ecosysDom;

/*
    Templating the list of players as well their stake.
*/

function getAsset(objLenth) {
    let path = './assets/images/';
    let svgRefBase = '20170725ffl15300';
    let ref = Math.floor(Math.random() * objLenth) + 1;  // select a randon asset
    let ext = '.svg';
    return path + svgRefBase + ref + ext;
}

export default function templateRender(obj, objLenth) {
    let listTemplate = `<div class="horse-description">
        <div class="img-container"><img src="${getAsset(objLenth)}" atl="${obj.player}" /></div>
        <div class="horse-name">
            <div class="name">${obj.player}</div>
        </div>
        </div>`;
    let stakeTemplate = `<div class="stake" title="${obj.player}" data-message='{"increment":false}'>${obj.price}</div>`
    let componentsTemplate = {
        "stakeContainer": stakeTemplate,
        "listContainer": listTemplate
    }

    for(let key in componentsTemplate) {
        ecosysDom[key].innerHTML += componentsTemplate[key];
    }
}
