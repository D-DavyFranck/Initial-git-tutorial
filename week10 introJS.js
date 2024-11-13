/*

1.  Interactive Background Animation
Description: Add a moving background with animated shapes, such as circles or stars, that float around the page.
Implementation: Use CSS animations or JavaScript to dynamically create and animate shapes. For example, you could add a  div with a class for each shape, randomly position them, and animate them using CSS keyframes.
2.  Custom Greeting Based on User Input
Description: Allow users to enter their name in a text input field. When they click the button, update the welcome message to include their name (e.g., "Welcome to JavaScript, [Name]!").
Implementation: Add an  <input> field for the user’s name and retrieve the value with JavaScript. Modify the welcome message based on the input value when the button is clicked.
3.  Theme Switcher (Light/Dark Mode)
Description: Add a toggle button that switches between light and dark themes, adjusting colors and backgrounds accordingly.
Implementation: Create two sets of CSS classes for light and dark themes. Use JavaScript to add or remove these classes when the user clicks the toggle button.
4.  Particle Effect on Button Click
Description: Add a particle explosion effect when the button is clicked, creating small dots or shapes that spread outward.
Implementation: Use JavaScript to generate small  divs with random colors and directions upon each click. Use CSS animations to move the particles outward and fade them out over time.
5.  Random Quote Generator
Description: Display a random motivational or JavaScript-related quote each time the page loads or the user clicks a "Get Quote" button.
Implementation: Create an array of quotes and use JavaScript to pick one randomly, displaying it in an HTML element on the page.
6.  Typing Animation for Welcome Message
Description: Make the "Welcome to JavaScript" message appear as if it’s being typed out letter by letter.
Implementation: Use JavaScript to add one character at a time to the welcome message, with a slight delay between each character. This can be done with a  setInterval or a recursive function with  setTimeout.
7.  Animated Navigation Bar with Scroll Effects
Description: Add a navigation bar at the top with links that scroll smoothly to different sections (e.g., "About", "Features", "Contact").
Implementation: Use HTML  <nav> elements for the navigation bar, anchor tags for each section, and CSS scroll behavior to make the scrolling smooth. Enhance the nav bar with CSS for hover effects and animations.
8.  Image Carousel or Slider
Description: Create an image carousel that auto-rotates through images or lets users click through them manually.
Implementation: Use JavaScript to cycle through an array of images. Add buttons for "Next" and "Previous" and use  setInterval to automatically change images after a few seconds.
9.  Custom Cursor Style and Animation
Description: Replace the default cursor with a custom one (e.g., a circle or shape that follows the cursor). Add animations to make it react to clicks or hovers.
Implementation: Hide the default cursor using CSS ( cursor: none), then use JavaScript to move a custom  div element with the mouse coordinates. Add animations that trigger on events like  mouseenter and  mouseleave.
10.  Popup Modal with Information about JavaScript
Description: Show a popup or modal window with a brief introduction to JavaScript when users click a link or button.
Implementation: Create a modal with HTML and CSS and make it hidden by default. Use JavaScript to show the modal when the user clicks a button and hide it when they click outside the modal or on a close button.
11.  Progressive Reveal Sections on Scroll
Description: Add different sections on the page that reveal themselves as the user scrolls down, giving the website a more dynamic and interactive feel.
Implementation: Use JavaScript to detect the user’s scroll position and add CSS animations to elements as they come into view. Libraries like AOS (Animate on Scroll) can make this easier.
12.  Add Sound Effects
Description: Play a sound effect when users click buttons or interact with certain elements.
Implementation: Use the HTML  <audio> element and JavaScript to trigger audio playback when specific actions occur.
13.  Countdown Timer for Events
Description: Show a countdown timer that counts down to a specific date or event (e.g., "Days Until Our Next Workshop!").
Implementation: Use JavaScript to calculate the time difference between the current date and the event date, then update the displayed countdown every second using  setInterval.
*/

// script.js
function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");
    
    // Change text content
    welcomeText.innerText = "JavaScript is Dynamic and Fun!";
    
    // Add a pulsating animation
    welcomeText.classList.add("pulse-animation");
    
    // Change button color randomly
    button.style.backgroundColor = getRandomColor();
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  /*
  const themeToggle = document.getElementById('theme-toggle');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  */
  const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for user's preferred theme in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
}
// on click get and apply the body dark theme class list
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');


  // Store the user's preferred theme in local storage
  const isDarkTheme = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : 'light-theme');
});
  
const modal = document.getElementById('modal');
const showModalButton = document.getElementById('showModalButton');
const closeButton = document.getElementsByClassName('close')[0];

showModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
// for quotes generator
//array of different quotes 
const quotes = [
    "JavaScript is the language of the web.",
    "The only way to learn to code is to code.",
    "There is no greater education than one that is self-driven.",
    "Coding in Javascript is fun.",
    "The harder it gets, the more interesting it becomes.",
    "APT 1040C is the best class.",
    "In the beginning, there was the web, and the web was JavaScript."
  ];
  
  const quoteElement = document.getElementById('quote');
  const getQuoteButton = document.getElementById('getQuoteButton');
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
  }
  
  // Display a random quote on page load
  getRandomQuote();
  
  // Display a new random quote when the button is clicked
  getQuoteButton.addEventListener('click', getRandomQuote);


  const welcomeMessage = document.getElementById('welcome-message');
const message = 'Welcome to JavaScript!';
let charIndex = 0;
// typing the letters as if they are being typed
function typeWriter() {
  if (charIndex < message.length) {
    welcomeMessage.textContent += message.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100); // Adjust the delay as needed
  }
}

typeWriter();

// typing your name and returning a greet me with your name

const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greetingElement = document.getElementById('greeting');

greetButton.addEventListener('click', () => {
  const name = nameInput.value;
  greetingElement.textContent = `Welcome to JavaScript, ${name}!`;
});

/*
function countdown(deadline) {
  const deadlineDate = new Date(deadline).getTime();

  const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeDifference = deadlineDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeDifference < 0) {
      clearInterval(timerInterval);
      document.getElementById('countdown').textContent = 'Event has ended!';
    }
  }, 1000);
}

// Replace '2024-12-25' with your desired deadline date
countdown('2024-12-25');

<div id="countdown">
  <span id="days"></span>days
  <span id="hours"></span>hours
  <span id="minutes"></span>minutes
  <span id="seconds"></span>seconds
</div>

#countdown {
  font-size: 24px;
  font-weight: bold;
}
 
 */