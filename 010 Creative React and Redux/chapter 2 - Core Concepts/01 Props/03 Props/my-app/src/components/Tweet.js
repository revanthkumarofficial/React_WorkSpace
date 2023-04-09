import React from "react";


// you can also use function instead of const

const Tweet = (props) => {

    console.log(props);

    return (
        
        /*
        elements should be present inside the div
        and there should be only one parent div and other divs should be nested inside it
        */
        <div className="tweet">
        <h4>Name: {props.author}</h4>
        <h5>This is actual Tweet</h5>
        <button>Delete</button>
        <button>Like</button>
        </div>
    );

};

export default Tweet;