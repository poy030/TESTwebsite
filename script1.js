document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    const form = document.getElementById('user-form');
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
      const name = event.target.name.value;
      const rating = event.target.rating.value;
  
      // Send the data to the server
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, rating })
      });
  
      if (response.ok) {
        console.log('Data sent to server for writing to CSV');
        alert('Data sent to server for writing to CSV');
      } else {
        console.log('Failed to send data to server');
      }
    });
  });
  