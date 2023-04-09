import React from "react";

import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  return (
    <div>
      <h1>Hello React</h1>

      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;
