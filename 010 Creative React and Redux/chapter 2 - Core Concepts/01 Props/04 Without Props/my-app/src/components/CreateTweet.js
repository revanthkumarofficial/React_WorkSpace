import React from "react";

const CreateTweet = ({owner, message}) => {

    return (

        <form>
            <h3>{owner}</h3>
            <h5>{message}</h5>

            <textarea cols="50" rows="5"></textarea>
            <button>Submit</button>
        </form>

    );

};

export default CreateTweet;