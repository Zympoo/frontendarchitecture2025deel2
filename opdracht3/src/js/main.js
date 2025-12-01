// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const EventBus = {
    listeners: {},
    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);
    },
    publish(eventName, payload) {
        const handlers = this.listeners[eventName] || [];
        handlers.forEach(fn => fn(payload));
    }
};

EventBus.subscribe("NOTIFY", payload => {
    const logsList = document.getElementById('log_list');
    const log = document.createElement("li")
    log.className = "list-group-item"
    log.textContent = `${payload.time} – ${payload.teamnaam}, ${payload.aantal}`
    logsList.appendChild(log)
});
// Publisher
document
    .querySelector("#btn_send")
    .addEventListener("click", () => {
        const inputNaam = document.querySelector("#team_name");
        const inputAantal = document.querySelector("#team_value");
        const teamnaam = inputNaam.value.trim();
        const aantal = parseInt(inputAantal.value);

        if (!teamnaam || !aantal) return;

        EventBus.publish("NOTIFY", { teamnaam: teamnaam, aantal: aantal, time: new Date().toLocaleTimeString() });
        inputNaam.value = "";
        inputAantal.value = "";
    });