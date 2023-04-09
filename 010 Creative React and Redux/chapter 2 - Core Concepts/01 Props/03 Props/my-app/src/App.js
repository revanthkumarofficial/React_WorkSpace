import React from "react";

import Tweet from "./components/Tweet"
import CreateTweet from "./components/CreateTweet";

function App() {

  const name = "Revanth";
  const message = "Hi Everyone";
  return (
    <div>
      <h1>Hello React</h1>

      <CreateTweet owner={name} message={message}/>
      <Tweet author="Revanth Media"/>
      
    </div>
  );
}

export default App;
