let scale = 1;
let messages = [
    "Are you sure?",
    "I'll give you another chance to pick...",
    "You sure you don't want to change your mind?",
    "You're missing out on a great opportunity!",
    "You're making a mistake!",
    "You're going to regret this!",
    "You're going to miss out on something great!",
    "You're going to miss out on something amazing!",
    "You're going to miss out on something awesome!",
    "One more chance to change your mind...",
    "Okay one more chance to change your mind...",
    "Tap the other button to change your mind...",
    "I think you meant to pick \"YES\"",
    "Wrong button! You meant to pick \"YES\"",
    "I know you want to!",
    "You know you want to!",
    "You really should pick \"YES\"",
    "Try again..."
];
document.getElementById('noBtn').addEventListener('click', function() {
    // Make the yes button grow
    scale += 0.1;
    document.getElementById('yesBtn').style.transform = 'scale(' + scale + ')';
    // Move the no button somewhere else on the page
    this.style.position = 'absolute';
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
    // Display a random message
    let message = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = message;
});

document.getElementById('yesBtn').addEventListener('click', function() {
    // Clear the entire page
    document.body.innerHTML = '';
    // Display another gif as the whole screen
    let img = document.createElement('img');
    img.src = 'images/yay.gif'; // Replace with your actual image path
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain'; // Make sure the entire image fits on the screen
    img.style.objectPosition = 'center'; // Center the image
    document.body.appendChild(img);
    // Display "YAY!!!" text
    let yay = document.createElement('h1');
    yay.textContent = 'YAY!!!';
    yay.style.position = 'absolute';
    yay.style.top = '25%'; // Position in the top quarter of the page
    yay.style.width = '100%';
    yay.style.textAlign = 'center';
    yay.style.fontSize = '3em';
    yay.style.fontFamily = 'Protest Riot', 'sans-serif';
    document.body.appendChild(yay);
});
