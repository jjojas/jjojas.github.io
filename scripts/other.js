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

    yearsMonthsDaysElement.textContent = `🗓️ ${years} tahun, ${months} bulan, ${days} hari.`;
    hoursMinutesSecondsElement.textContent = `🕰️ ${hours} jam, ${minutes} menit, ${seconds} detik.`;
}

setInterval(updateCounter, 1000);
updateCounter();


//////

const healthEmojis = [
    "💪", "🩺", "💉", "🩻", "🥦", "🍎", "🥕", "🏃‍♂️", "💚", "🧘‍♀️", "🍇", "🥗"
  ];
  
const heartEmojis = [
"❤️", "🧡", "💛", "💚", "💙", "💜", "🖤",
];
  
  // Function to update health emoji
  function updateEmoji() {

    const randomHealth = healthEmojis[Math.floor(Math.random() * healthEmojis.length)];
    document.getElementById("health").textContent = randomHealth;

    const randomHeart = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    document.getElementById("heart").textContent = randomHeart;
  }
  
  // Call both functions every second
  setInterval(updateEmoji, 1000);

  ////

  function changeDigit(index, increment) {
    let digitElement = document.getElementById(`digit-${index}`);
    let currentValue = parseInt(digitElement.textContent);
    let newValue = currentValue + increment;

    if (newValue < 0) {
        newValue = 9;
    } else if (newValue > 9) {
        newValue = 0;
    }

    digitElement.textContent = newValue;
}

// Function to handle submit button click
function submitPin() {
    let pin = '';
    for (let i = 0; i < 6; i++) {
        pin += document.getElementById(`digit-${i}`).textContent;
    }

    check(pin); // Call the check function with the PIN value
}

// Placeholder for the check function
const isLocked = false;
const PIN = isLocked ? "171201" : "000000";
const lockerContainer = document.querySelector('.locked');
const desktopContainer = document.querySelector('.desktop');

function check(pin) {
    console.log('Checking PIN:', pin);
    if (pin == PIN){
        lockerContainer.style.display = "none";
        desktopContainer.style.display = "block";
    } else {
        alert('PIN salah nih');
    }
}

//////////

const moneyContainer = document.querySelector('.money');
const howManyMoney = 10;

moneyContainer.addEventListener('click', function () {
    const containerRect = moneyContainer.getBoundingClientRect();
    const moneyEmojis = ['💰', '💵', '💴', '💶', '💷', '💎', '🤑', '💸'];
    for (let i = 0; i < howManyMoney; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');

        const randomEmoji = moneyEmojis[Math.floor(Math.random() * moneyEmojis.length)];
        emoji.textContent = randomEmoji;

        // Randomize starting position within the div
        const randomX = Math.random() * containerRect.width;
        const randomY = Math.random() * containerRect.height;
        emoji.style.left = `${randomX}px`;
        emoji.style.top = `${randomY}px`;

        // Add the emoji to the div
        moneyContainer.appendChild(emoji);

        // Remove the emoji after 10 seconds
        // setTimeout(() => {
        //     emoji.remove();
        // }, 10000);
    }
});