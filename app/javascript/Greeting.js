import React, { useState, useEffect } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('Loading...');

  useEffect(() => {
    fetch('/random_greeting')
      .then(response => response.json())
      .then(data => setGreeting(data.greeting))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>Random Greeting from Rails:</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
