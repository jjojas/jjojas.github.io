const dots = 864;
const percol = 18;

var cont = document.querySelector('.block');

for (let i = 0; i < percol; i++) {
    var rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    for (let j = 0; j < dots/percol; j++) {
        var yearDiv = document.createElement('div');
        yearDiv.className = 'year';
        rowDiv.appendChild(yearDiv);
    }
    cont.appendChild(rowDiv);
}

const ageRanges = [
    { range: 1, color: 'pink', text: 'This is the age you are still a baby' },           // Infant
    { range: 3, color: 'yellow', text: 'You are walking!' },           // Infant
    { range: 5, color: 'lightblue', text: 'Making friends in kindergarten' },  // Kindergarten
    { range: 12, color: 'lightgreen', text: 'How is your first day of school?' },     // Primary
    { range: 15, color: 'lightpink', text: 'Everybody is evil' },  // Junior High
    { range: 18, color: 'lightgray', text: 'You have met your first love' },  // Senior High
    { range: 22, color: 'lightcoral', text: 'Got your degree! Now what?' },     // College
    { range: 27, color: 'lightyellow', text: 'You are settled with the love of your life' },    // Married
    { range: 65, color: 'lightseagreen', text: 'Work is tiring ya?' }    // Retired
  ];
  
  const year = document.querySelectorAll('.year');
  const word = document.querySelector('.word');
  
  for (let i = 0; i < year.length; i++) {
    for (const { range, color } of ageRanges) {
      if (i <= range * 12) {
        year[i].style.backgroundColor = color;
        break; // Exit the inner loop once the condition is met
      }
    }
  }

  year.forEach((element, index) => {
    element.addEventListener('mouseenter', () => {
      // Find the corresponding range and update the text in .word
      for (const { range, text, color } of ageRanges) {
        if (index <= range * 12) {
          word.textContent = text;
          word.style.color = color;
          break;
        } else {
          word.textContent = "Enjoy retirement!";
          word.style.color = "white";
        }
      }
    });
  
    element.addEventListener('mouseleave', () => {
      // Clear the text in .word when the mouse leaves the .year element
      word.textContent = "How's life?";
      word.style.color = "white";
    });
  });

const age = 23;

year[age*12].style.border = "3px solid green";
  