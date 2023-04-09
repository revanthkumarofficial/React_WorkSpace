import React from "react";

import Tweet from "./components/Tweet"
import CreateTweet from "./components/CreateTweet";

function App() {
  return (
    <div>
      <h1>Hello React</h1>

      <CreateTweet />
      <Tweet />
    </div>
  );
}

export default App;
