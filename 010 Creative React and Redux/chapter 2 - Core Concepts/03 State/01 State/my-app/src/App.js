import React from "react";

import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {

// Here is the place where we add normal JS
let name = "Steve";

// change state 
// Create Our Functions
const sayHelloHandler = (e) => {

  // rerender specific part
  name = "Johnson";

  console.log(name);
};

  return (
    <div>
      <h1>Hello React</h1>

      

      <CreateTweet />
      <TweetList />

      <h1>Hello {name}</h1>
      
      {/* This is an example for change state */}
      <button onClick={sayHelloHandler}>Click</button>
    

    </div>
  );
}

export default App;
