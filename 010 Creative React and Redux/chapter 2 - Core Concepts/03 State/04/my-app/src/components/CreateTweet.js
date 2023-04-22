import React, {useState} from "react";

const CreateTweet = () => {

    // state
    const [textInput, setTextInput] = useState("");

    // functions
    const userInputHandler = (e) => {

        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);

        setTextInput(e.target.value);

    };

    return (

        <form>
            <h1>Tweet Input</h1>
            <textarea onChange={userInputHandler} cols="50" rows="5"></textarea>
            <button>Submit</button>
            <br></br>
            <h2>{textInput}</h2>
        </form>

    );

};

export default CreateTweet;