```
state is a data in your application

ex: youtube channel -> name, no. of videos [variables]
    Twitter  -> no. of tweets, what is tweet
    storage  -> that holds your data about certain different things

    The difference is

    that state 

    once your state changes or the data changes in your state your UI so whatever you see on the screen is gonna
    magically update and change.

    So If that modifies your UI is in sync with the state.

    So React is smart enough to re render basically the component that the state change them.
   
```

### Note
```
In 01 state example

we are able to change the variable name value but not the UI is not getting updated

This is where state is very powerfull because we can create state with this data "steve" or 
whatever, when that state changes our UI automatically updates itself and its only gonna re render that specific part
which makes it super fast.

so more over what to do is not gonna use variable but to use state.

Now you can also use variables in different places but usually when you are holding data like this on your website
such as tweets, videos or toggle on and off, switch text to something else, navbar anyone toggle on and off 
you can use state for that
```


### Note
```
State is empty -> output text is empty and form text input is empty 
```

```
props can only pass down parent -> child -> child
state can only pass down parent -> child -> child 
```