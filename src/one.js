import React, { useState } from 'react';
import axios from 'axios';

function One() {
  const [joke, setJoke] = useState({});

  function Joke() {
    axios("https://v2.jokeapi.dev/joke/Any")
      .then(function(response) {
        console.log("success");
        setJoke(response.data);
      })
      .catch(function(error) {
        console.log("error");
        console.error('Error fetching data:', error);
      });
  }
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-500 text-white font-bold rounded-lg text-center p-8">
        {joke.setup ? (
          <>
            <p className="text-xl font-semibold mb-4">Question: {joke.setup}</p>
            <p className="text-lg">Answer: {joke.delivery}</p>
          </>
        ) : (
          <p className="text-xl">{joke.joke}</p>
        )}
        <button
          className="bg-gray-200 text-gray-800 rounded px-4 py-2 mt-4"
          onClick={Joke}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default One;
