import EcoSystemService from '../services/ecosystem.service';
import templateRender from './components/components.factory';
import {ecosysCounter, schemaTemplate} from './components/components.factory';

export class EcoSystem {
  constructor(name) {
    this.type = name;
    let counter = 0;
    this._counter = counter;
    ecosysCounter.innerText = this._counter;
    this.template = schemaTemplate;
  }

  get counter() {
    return this._counter;
  }

  update(msg, index) {
    if(msg && msg.increment) {
      this._counter++;
      this.template.stakeContainer.childNodes[index].classList.add('selected');
      this.template.listContainer.childNodes[index].classList.add('selected');
    }
    else {
      if(!!this._counter) { // counter = 0 do nothing.
        this._counter--;
        this.template.stakeContainer.childNodes[index].classList.remove('selected');
        this.template.listContainer.childNodes[index].classList.remove('selected');
      }
    }

    // All fun and that
    ecosysCounter.innerHTML = this._counter;
  }

  render() {
    // Reset the ecosys dom to load data
    this.resetDom();
    return EcoSystemService.getPlayers(this.type)
    .then((players) => {
      this.players = players.players
      this.players.forEach((player) => {
        templateRender(player, players.total || players.length);
      });
    });
  }

  init(type) {
    this.type = type; 
    return this.render();
  }

  resetDom() {

    /*
      For scalebel solution, below approach is recommended..since is faster
      https://jsperf.com/innerhtml-vs-removechild/15

      while (box.firstChild) {
        box.removeChild(box.firstChild);
      }
      
    */

    this.template.stakeContainer.innerHTML = '';
    this.template.listContainer.innerHTML = '';
    ecosysCounter.innerHTML = 0;
  }
}
