import {EcoSystem} from './ecosystem/ecosystem';

let ecosys = new EcoSystem();

window.addEventListener("DOMContentLoaded", function() {
    let selectedOpts = document.getElementById('apiList');
    selectedOpts.addEventListener('change', (ev) => {

        var selectedEnv = ev.target.value;
        
        // No need to init when ecosys type already been selected.
        if(selectedEnv != 'none' && ecosys.type != selectedEnv) {
            ecosys.init(selectedEnv).then(() => {
                var stakesList = ecosys.template.stakeContainer.getElementsByClassName('stake');
                for(let i = 0; i < stakesList.length; i++) {
                    stakesList[i].addEventListener('click', (ev) => {
                        var msg = JSON.parse(stakesList[i].getAttribute('data-message'));
                        msg.increment = !msg.increment;
                        ecosys.update(msg, i);
                        stakesList[i].setAttribute('data-message', JSON.stringify(msg));
                    })
                }
            });
        }
    });
});
