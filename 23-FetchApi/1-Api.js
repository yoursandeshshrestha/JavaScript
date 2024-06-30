fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    console.log('Data:', data); // Process the data
  })
  .catch(error => {
    console.error('Error:', error); // Handle any errors
  });
