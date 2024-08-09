document
  .getElementById('submitButton')
  .addEventListener('click', async function () {
    const userInput = document.getElementById('userInput').value.trim();

    try {
      const response = await fetch('/check-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: userInput }),
      });

      const result = await response.json();

      if (result.success) {
        document.getElementById('message').textContent = result.message;
      } else {
        window.location.href = result.redirect;
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('message').textContent =
        'An error occurred. Please try again.';
    }
  });
