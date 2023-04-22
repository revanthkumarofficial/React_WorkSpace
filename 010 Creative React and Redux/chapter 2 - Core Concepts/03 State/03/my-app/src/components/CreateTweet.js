import React from "react";

const CreateTweet = () => {

    // functions
    const userInputHandler = (e) => {

        // console.log(e);
        // console.log(e.target);
         console.log(e.target.value);

    };

    return (

        <form>
            <h1>Tweet Input</h1>
            <textarea onChange={userInputHandler} cols="50" rows="5"></textarea>
            <button>Submit</button>
            
        </form>

    );

};

export default CreateTweet;