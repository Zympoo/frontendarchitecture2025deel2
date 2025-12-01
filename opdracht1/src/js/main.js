// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const TimeCounter = (function() {
    let total = 0;

    function add(amount){
        total += amount;
        render()
    }

    function reset(){
        total = 0;
        render()
    }

    function render(){
        document.getElementById('time_display').innerHTML = total;
    }

    return {
        add,
        reset,
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn_brief')?.addEventListener("click", () => TimeCounter.add(7))
    document.getElementById('btn_shift')?.addEventListener("click", () => TimeCounter.add(33))
    document.getElementById('btn_zero')?.addEventListener("click", TimeCounter.reset)
})