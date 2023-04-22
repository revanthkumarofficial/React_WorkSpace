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
            {/* Here when you click on data both data outside and data inside of text area will be removed */}
            <textarea 
             value={textInput}
            onChange={userInputHandler} 
            cols="50" 
            rows="5">

            </textarea>
            <button>Submit</button>
            <br></br>
            <h2 onClick={() => setTextInput('')}>{textInput}</h2>
        </form>

    );

};

export default CreateTweet;