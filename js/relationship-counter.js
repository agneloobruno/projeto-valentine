(function () {
    const startDate = new Date(2019, 3, 4, 0, 0, 0);

    const valueNodes = {
        years: document.querySelector('[data-unit="years"]'),
        months: document.querySelector('[data-unit="months"]'),
        days: document.querySelector('[data-unit="days"]'),
        hours: document.querySelector('[data-unit="hours"]'),
        minutes: document.querySelector('[data-unit="minutes"]'),
        seconds: document.querySelector('[data-unit="seconds"]'),
    };

    const allNodesFound = Object.values(valueNodes).every(Boolean);

    if (!allNodesFound) {
        return;
    }

    function getElapsedParts(from, to) {
        if (to < from) {
            return {
                years: 0,
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        let years = to.getFullYear() - from.getFullYear();
        let months = to.getMonth() - from.getMonth();
        let days = to.getDate() - from.getDate();
        let hours = to.getHours() - from.getHours();
        let minutes = to.getMinutes() - from.getMinutes();
        let seconds = to.getSeconds() - from.getSeconds();

        if (seconds < 0) {
            seconds += 60;
            minutes -= 1;
        }

        if (minutes < 0) {
            minutes += 60;
            hours -= 1;
        }

        if (hours < 0) {
            hours += 24;
            days -= 1;
        }

        if (days < 0) {
            const daysInPreviousMonth = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
            days += daysInPreviousMonth;
            months -= 1;
        }

        if (months < 0) {
            months += 12;
            years -= 1;
        }

        return {
            years,
            months,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    function formatPart(value) {
        return String(Math.max(0, value)).padStart(2, "0");
    }

    function renderCounter() {
        const now = new Date();
        const elapsed = getElapsedParts(startDate, now);

        valueNodes.years.textContent = formatPart(elapsed.years);
        valueNodes.months.textContent = formatPart(elapsed.months);
        valueNodes.days.textContent = formatPart(elapsed.days);
        valueNodes.hours.textContent = formatPart(elapsed.hours);
        valueNodes.minutes.textContent = formatPart(elapsed.minutes);
        valueNodes.seconds.textContent = formatPart(elapsed.seconds);
    }

    renderCounter();
    setInterval(renderCounter, 1000);
})();
