function initializeCustomPointer(options) {
  const { containerSelector, pointerId, onClick } = options;
  const container = document.querySelector(containerSelector);
  const customPointer = document.getElementById(pointerId);

  if (!container || !customPointer) return;

  const updatePointerPosition = (event) => {
    customPointer.style.display = 'block'; // Show the custom pointer
    const offsetX = event.clientX + window.scrollX;
    const offsetY = event.clientY + window.scrollY;
    customPointer.style.left = `${offsetX}px`;
    customPointer.style.top = `${offsetY}px`;
    container.style.cursor = "none";
  };

  const hidePointer = () => {
    customPointer.style.display = 'none'; // Hide the custom pointer
    // container.style.cursor = ""; // Restore the default cursor
  };
  
  container.addEventListener('mousemove', updatePointerPosition);
  container.addEventListener('scroll', updatePointerPosition); // Adjust pointer position on scroll
  container.addEventListener('mouseleave', hidePointer);

  if (onClick) {
    container.addEventListener('click', (event) => onClick(event, customPointer));
  }
}

// Initialize custom pointers for different elements
initializeCustomPointer({
  containerSelector: '.spotify',
  pointerId: 'pointer-spotify',
});

initializeCustomPointer({
  containerSelector: '.time',
  pointerId: 'pointer-time',
});


initializeCustomPointer({
  containerSelector: '.love',
  pointerId: 'pointer-love',
  onClick: (() => {
    let fontSize = 30; // Initial font size
    return (event, customPointer) => {
      fontSize += 10; // Increase font size by 10px
      if (fontSize > 200) {
        fontSize = 30; // Reset to default if greater than 150px
      }
      customPointer.style.fontSize = `${fontSize}px`; // Apply new font size
    };
  })(),
});


initializeCustomPointer({
  containerSelector: '.countdown',
  pointerId: 'pointer-countdown',
  onClick: (() => {
    const clockEmojis = [
      "🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", 
      "🕖", "🕗", "🕘", "🕙", "🕚"
    ];
    let currentIndex = 0;

    return (event, customPointer) => {
      currentIndex = (currentIndex + 1) % clockEmojis.length; // Cycle through the array
      customPointer.textContent = clockEmojis[currentIndex];  // Update pointer content
    };
  })(),
});

initializeCustomPointer({
  containerSelector: '.health',
  pointerId: 'pointer-health',
  onClick: (() => {
    let fontSize = 30; // Initial font size
    return (event, customPointer) => {
      fontSize += 10; // Increase font size by 10px
      if (fontSize > 150) {
        fontSize = 30; // Reset to default if greater than 150px
      }
      customPointer.style.fontSize = `${fontSize}px`; // Apply new font size
    };
  })(),
});


initializeCustomPointer({
  containerSelector: '.adult',
  pointerId: 'pointer-adult',
  onClick: (event, customPointer) => {
    // Add animation styles
    customPointer.style.transition = 'transform 1s ease, opacity 1s ease';
    customPointer.style.transform = 'translateY(-300px)'; // Move upwards
    customPointer.style.opacity = '0'; // Fade out

    // Reset to initial state after the animation ends
    setTimeout(() => {
      customPointer.style.transition = 'none'; // Remove transition to reset instantly
      customPointer.style.transform = 'translateY(0)'; // Reset position
      customPointer.style.opacity = '1'; // Reset opacity
    }, 1000); // Match the duration of the animation (2 seconds)
  },
});

initializeCustomPointer({
  containerSelector: '.thanks',
  pointerId: 'pointer-thanks',
  onClick: (event, customPointer) => {
    // Add the animation
    customPointer.style.animation = 'rock 1.5s infinite alternate ease-in-out';

    // Remove the animation after 2 seconds
    setTimeout(() => {
      customPointer.style.animation = ''; // Reset the animation
    }, 2000);
  },
});

initializeCustomPointer({
  containerSelector: '.goal',
  pointerId: 'pointer-goal',
  onClick: (event, customPointer) => {
    const targetGlow = document.getElementById("goal-glow");
    const howLong= 0.5;
    
    // Wrap each character of the targetGlow text in a <span> element
    const text = targetGlow.textContent; // Get the text content
    targetGlow.innerHTML = ''; // Clear the existing text

    // Wrap each character in a <span> tag
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      targetGlow.appendChild(span);
    }
    // Add wave animation effect for bold text
    const spans = targetGlow.querySelectorAll('span');
    spans.forEach((span, index) => {
      span.style.animation = `boldWave ${howLong}s ease forwards ${index * 0.05}s`; // Apply delay for each character
    });


    // Add glowing effect
    targetGlow.classList.add('glowing-pointer');
    

    // Remove glowing effect and reset after 2 seconds
    setTimeout(() => {
      targetGlow.classList.remove('glowing-pointer');
      spans.forEach(span => span.style.animation = ''); // Reset animation
    }, 1000*howLong*text.length);
  },
});

initializeCustomPointer({
  containerSelector: '.age',
  pointerId: 'pointer-age',onClick: (() => {
    return (event, customPointer) => {
      // Create a burst of balloon emojis
      const container = document.querySelector('.age');
      const balloonCount = 10; // Number of balloons
      const emojis = ["🎈", "🎉", "🎊"]; // Balloon and celebration emojis

      for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        balloon.style.position = 'absolute';
        balloon.style.left = `${event.pageX + (Math.random() * 200 - 100)}px`;
        balloon.style.top = `${event.pageY + Math.random() * 200 - 100}px`;
        balloon.style.fontSize = `${Math.random() * 20 + 20}px`; // Random size between 20px and 40px
        balloon.style.transition = 'opacity 5s ease, transform 5s ease';
        balloon.style.opacity = '1';

        container.appendChild(balloon);

        // Trigger animation
        requestAnimationFrame(() => {
          balloon.style.transform = `translate(${Math.random() * 100 - 50}px, ${-Math.random() * 200}px)`;
          balloon.style.opacity = '0';
        });

        // Remove balloon after animation ends
        setTimeout(() => {
          container.removeChild(balloon);
        }, 5000);
      }
    };
  })(),
});

initializeCustomPointer({
  containerSelector: '.end',
  pointerId: 'pointer-end',
  
  onClick: (event, customPointer) => {
    const container = document.querySelector('.end');
    
    // Set how many numbers to spawn
    const numberOfElements = 10; // You can change this to any number you want to spawn on each click
    const spawnDelay = 200; // Delay in ms between each spawn, change this value to control delay

    // Get the container's position relative to the viewport
    const containerRect = container.getBoundingClientRect();

    // Spawn multiple numbers with delay
    for (let i = 0; i < numberOfElements; i++) {
      // Set delay for each spawn
      setTimeout(() => {
        // Generate random offset for the "23" element within the container bounds
        const randomX = Math.random() * (containerRect.width - 32); // 32 is the width of the "23" element
        const randomY = Math.random() * (containerRect.height - 32); // 32 is the height of the "23" element

        const offsetY = randomY + (11 * window.innerHeight);

        // Generate a random color for the "23"
        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color using HSL

        // Randomize the font size (between 12px and 48px)
        const randomFontSize = Math.random() * 36 + 12 + 'px'; // Random size between 12px and 48px

        // Randomize the font weight (300 to 900)
        const randomFontWeight = Math.floor(Math.random() * 600) + 300; // Random weight between 300 and 900

        // Create the "23" element
        const numberElement = document.createElement('div');
        numberElement.textContent = "23";
        numberElement.style.position = 'absolute';
        numberElement.style.left = `${randomX}px`; // Position relative to the container
        numberElement.style.top = `${offsetY}px`; // Position relative to the container
        numberElement.style.fontSize = randomFontSize; // Randomize the font size
        numberElement.style.fontWeight = randomFontWeight; // Randomize the font weight
        numberElement.style.color = randomColor; // Apply the random color
        numberElement.style.transition = 'none'; // No transition for color or opacity

        // Append the element to the container
        container.appendChild(numberElement);
      }, i * spawnDelay); // Apply delay, multiply by index to stagger the spawns
    }
  }
});