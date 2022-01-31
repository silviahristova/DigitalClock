class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAM ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;

    }
    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12, //23 %(module) 12 = 11, 20 % 12 = 8, 12 % 12 = 0 => ||12 ect.
            minute: now.getMinutes(),
            isAM: now.getHours < 12
        };
    }
}
const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.update();