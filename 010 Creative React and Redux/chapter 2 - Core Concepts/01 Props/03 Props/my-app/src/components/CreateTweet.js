import React from "react";

const CreateTweet = (props) => {

    console.log(props);

    return (

        <form>
            <h3>{props.owner}</h3>
            <h5>{props.message}</h5>

            <textarea cols="50" rows="5"></textarea>
            <button>Submit</button>
        </form>

    );

};

export default CreateTweet;