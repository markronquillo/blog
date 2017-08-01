In Redux, reducers are pure functions that basically builds up the state for every dispatched action in the store. Basically, reducers accepts the state (or part of the state) and returns a new copy of that state (possibly mutated). Reducers can be build up by multiple sub reducers. Most of the time, in your redux application, your main reducer is composed of different reducers that are responsible in different parts of your state.

In this blog, I'll discuss a number of techniques to implement a reducer.

1. Switch-Case Pattern

By default, this is the go-to pattern in implementing a reducer. 