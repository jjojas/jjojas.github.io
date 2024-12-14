const spotifyContainer = document.querySelector('.spotify');

// Add a click event listener to the Spotify container
spotifyContainer.addEventListener('click', () => {
    // Select all elements with the class "blurs" inside the Spotify container
    const blurElements = spotifyContainer.querySelectorAll('.blurs');

    // Loop through each blur element and update the filter property
    blurElements.forEach((element) => {
        element.style.transition = 'filter 0.5s ease'; // Add a smooth transition
        element.style.filter = 'blur(0px)';
    });
});

///////


const yearsMonthsDaysElement = document.querySelector('.countdown .years-months-days');
const hoursMinutesSecondsElement = document.querySelector('.countdown .hours-minutes-seconds');

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function calculateElapsedTime(startDate, now) {
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    const hours = now.getHours() - startDate.getHours();
    const minutes = now.getMinutes() - startDate.getMinutes();
    const seconds = now.getSeconds() - startDate.getSeconds();

    return { years, months, days, hours, minutes, seconds };
}

function updateCounter() {
    const startDate = new Date('2001-12-15T17:00:00Z');
    const now = new Date();
    const { years, months, days, hours, minutes, seconds } = calculateElapsedTime(startDate, now);

    yearsMonthsDaysElement.textContent = `${years} tahun, ${months} bulan, ${days} hari.`;
    hoursMinutesSecondsElement.textContent = `${hours} jam, ${minutes} menit, ${seconds} detik.`;
}

setInterval(updateCounter, 1000);
updateCounter();


//////