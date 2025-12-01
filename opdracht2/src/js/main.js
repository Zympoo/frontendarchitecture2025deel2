// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
class NotificationSettingsSingleton{
    static instance;

    constructor() {
        if(NotificationSettingsSingleton.instance){
            return NotificationSettingsSingleton.instance;
        }
        this.emailnoti = true;
        this.popupnoti = false;
        this.interval = 15;

        NotificationSettingsSingleton.instance = this;
    }

    setInterval(interval){
        this.interval = parseInt(interval);
    }

    setEmailNoti(emailnoti){
        this.emailnoti = emailnoti;
    }

    setPopupnoti(popupnoti){
        this.popupnoti = popupnoti;
    }

    getInterval(){
        return this.interval
    }

    getEmailNoti(){
        return this.emailnoti
    }

    getPopupnoti(){
        return this.popupnoti
    }
}
const NotificationSettings = new NotificationSettingsSingleton()

document.getElementById('btn_notify_save')?.addEventListener('click', () => {
    NotificationSettings.setInterval(parseInt(document.getElementById('notify_interval').value))
    NotificationSettings.setEmailNoti(document.getElementById('notify_email').checked)
    NotificationSettings.setPopupnoti(document.getElementById('notify_popup').checked)
})

document.getElementById('btn_notify_show')?.addEventListener('click', () => {
    document.getElementById('notify_output').innerHTML =
        `<p>Interval: ${NotificationSettings.getInterval()}</p><br>
         <p>E-mailmeldingen: ${NotificationSettings.getEmailNoti()}</p><br>
         <p>Pop-upmeldingen: ${NotificationSettings.getPopupnoti()}</p><br>`
})