const correctCode = 'MNQ NXNCOÇTX BXEB NGAMTNE T E E E I E';

function checkInput() {
  const userInput = document.getElementById('userInput').value.trim();
  const messageElement = document.getElementById('message');

  // Hash the correct code and compare with user input
  const hashedCode = hashCode(correctCode);
  const hashedInput = hashCode(userInput);

  if (hashedInput === hashedCode) {
    messageElement.textContent = '!hjdh893847';
    messageElement.style.color = 'green';
  } else {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
