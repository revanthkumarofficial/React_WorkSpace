// importing useState

import React, {useState} from "react";

import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {

// Place for Normal JS

  // let name = "Steve";

  /* name is like variable or state variable or state data and setName is basically just a function 
  that react provides us to be able to modify name 
  we never wanna do we never wanna change state this way name= "something else"
  we have to use this special function the react gives us
  because this special function has internal coding done to it that 
  when you use it, it knows what to change in the UI for you
  */
  const[name, setName] = useState("Steve");

  // create our functions
  const sayHelloHandler = (e) => {

    // rerender specific part
    setName("Johnson");

    console.log(name);
  };

  return (
    <div>
      <h1>Hello React</h1>
      <br></br>
      <h1>Hello {name}</h1>
      
      {/* This is an example for change state */}
      <button onClick={sayHelloHandler}>Click</button>
      <br></br>
      <br></br>
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;
