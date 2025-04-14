document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // ნაშუ-წერის სერვერთან დაკავშირება
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
    .then(response => response.json())
    .then(data => {
      alert('რეგისტრაცია წარმატებით დასრულდა!');
      window.location.href = 'login.html'; // გადაყვანა ლოგინზე
    })
    .catch(error => console.error('Error:', error));
  });
  