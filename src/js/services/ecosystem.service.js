import RequestService from './requestService'
const path = require('path');

const API_LIST = {
    "players-horses": {
      "ref": "horses-mock-data.json"
    },
    "players-boxing": {
      "ref": "boxing-mock-data.json"
    }
};

class EcoSystemService {
  
  getPlayers(type) {
    const url = path.join(__dirname, 'service-mock-data/') + API_LIST[type].ref;
    return RequestService.getRequest(url);
  }
}

export default new EcoSystemService()
