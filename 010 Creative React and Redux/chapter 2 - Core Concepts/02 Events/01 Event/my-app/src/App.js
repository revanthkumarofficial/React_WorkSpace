import React from "react";

import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {

  // In JS we do like this for Event
  // button.addEventListener( 'click', () => {
  // console. log('hey')
  // });

// create our own functions

 const sayHelloHandler = () => {

  console.log("Hello");

 };


 const sayHelloHandler2 = (user) => {

  console.log(`Hello there ${user}`);

 };

 const sayHelloHandler3 = (user) => {

  console.log(`Hello there ${user}`);

 };

 const sayHelloHandler4 = (e) => {

   {/* e some kind of event, in console we will get the object and properties */}
  console.log(e);

 };


  return (
    <div>
      <h1>Hello React</h1>

      <CreateTweet />
      <TweetList />

      <br></br>

      {/* In react we are doing like this to create an event */}
      
      <button onClick={sayHelloHandler}>Click</button>


      <br></br>
      <br></br>

       {/* Here we are invoking the function directly passing argument Mike */}
       {/* So when you see on the console without clicking on click2 the message "Hello there Mike" is present in console */}
      {/*Whenever you are adding parenthesis to a function you are invoking it directly and running it straight away*/}
      <button onClick={sayHelloHandler2("Mike")}>Click2</button>

      <br></br>
      <br></br>


      {/* Here we should click and then only message gets displayed */}
      <button onClick={() => sayHelloHandler3("Mike")}>Click3</button>

      <br></br>
      <br></br>

      <button onClick={sayHelloHandler4}>Click4</button>


    </div>
  );
}

export default App;
