// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // to store the image URL
  const [isLoaded, setIsLoaded] = useState(false); // to track loading state

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message); // API returns the image URL in data.message
        setIsLoaded(true);
      });
  }, []); // run only once after component mounts

  // Step 3: Conditional Rendering
  if (!isLoaded) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" width="300" />
    </div>
  );
}

export default App;
