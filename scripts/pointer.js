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
});
