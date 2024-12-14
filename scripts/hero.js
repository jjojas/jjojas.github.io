const chars = document.querySelectorAll(".char");
const hero = document.querySelector(".hero");
const dot = document.querySelector(".dot");
const ripple = dot.querySelector('.ripple');

// Calculate the distance between two points
function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

// Map function to convert a value from one range to another
function mapValue(value, fromLow, fromHigh, toLow, toHigh) {
  if (value > fromHigh) {
    return toHigh;
  } else if (value < fromLow) {
    return toLow;
  } else {
    return (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;
  }
}

// Add a mousemove event listener to the document
hero.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Iterate through the elements and calculate distances
  chars.forEach((char, index) => {
    const rect = char.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;
    const distance = calculateDistance(mouseX, mouseY, elementCenterX, elementCenterY);

    const mappedValue = mapValue(distance, 10, 100, 800, 100);
    char.style.fontWeight = mappedValue;
  });
});

hero.addEventListener("pointermove", event => {
  const {clientX, clientY} = event;
  adjLeft = 10;
  adjTop = 10;
  
  dot.animate({
    left : `${clientX-adjLeft+window.scrollX}px`,
    top : `${clientY-adjTop+ window.scrollY}px`
  }, {duration: 1500, fill: 'forwards'});
});

var state = true;

hero.addEventListener('click', (event) => {
    const size = Math.max(dot.clientWidth, dot.clientHeight);
    ripple.style.width = ripple.style.height = `${size}px`;
    
    // Clear any previous animations
    ripple.getAnimations().forEach((animation) => {
        animation.cancel();
    });

    // Define the keyframes and timing for the ripple animation
    const keyframes = [
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(5)', opacity: 0 }
    ];
    const timing = { duration: 1000, easing: 'ease-out' };

    // Create and play the ripple animation
    ripple.animate(keyframes, timing);

    // Remove the ripple element after the animation is complete
    ripple.addEventListener('finish', () => {
        dot.removeChild(ripple);
    });

    createFloatingEmoji(event.clientX, event.clientY);
});

function createFloatingEmoji() {
  // Get the bounding box of the hero element
  const heroBounds = hero.getBoundingClientRect();

  // Generate random coordinates within the hero element
  const randomX = Math.random() * heroBounds.width + heroBounds.left;
  const randomY = Math.random() * heroBounds.height + heroBounds.top;

  // Create a new span element for the emoji
  const emoji = document.createElement('span');
  emoji.textContent = '❤️';
  emoji.style.position = 'absolute';
  emoji.style.left = `${randomX}px`;
  emoji.style.top = `${randomY}px`;
  emoji.style.fontSize = `${Math.random() * 20 + 20}px`; // Random size
  emoji.style.transition = 'transform 2s ease, opacity 2s ease';
  emoji.style.pointerEvents = 'none'; // Prevent interfering with clicks
  document.body.appendChild(emoji);

  // Trigger the animation
  requestAnimationFrame(() => {
      emoji.style.transform = `translateY(-100px) scale(${Math.random() * 0.5 + 0.5})`;
      emoji.style.opacity = '0';
  });

  // Remove the emoji after animation completes
  setTimeout(() => {
      emoji.remove();
  }, 2000);
}