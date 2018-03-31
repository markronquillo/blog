---
title: "Different ways to implement Redux Reducers"
date: "2017-08-01"
tags:
    - react
    - redux
    - reducers
---

In Redux, reducers are pure functions that builds up the state for every dispatched action in the store. Reducers accepts the state (or part of the state) and returns a new copy of that state (normally mutated). Reducers can be build up by multiple sub-reducers. A reducer function accepts two parameters, the state and an action object. Most of the time, in your redux application, your main reducer is composed of different reducers that are responsible in different parts of your state.

In this blog post, I’ll discuss a number of techniques to implement a reducer.

### 1. Switch-Case Pattern

This pattern is the most basic and the default approach in implementing a reducer. We basically use the action.type value in the switch case expression and if it matches any values defined it returns a new copy of the state.

```javascript
function authReducer(state=initialState.auth, action)
{
    switch(action.type)
    {
        case 'LOGIN':
            // return new state
            break;
        case 'REGISTER':
            // return new state
            break;
        case 'LOGOUT':
            // return new state
            break;
        default
            return state
    }
}
```

### 2. Object property approach

In this approach, we define a **reducers** objects that contains methods which has the same name with the action types this reducer is responsible of. The function that we are exporting here checks if the **action.type** provided exists in the reducers methods, if yes, it then calls the that method passing the state and the action for further processing.

```javascript
const reducers = {
    LOGIN: (state, action) => {
        // return state
    },

    LOGOUT: (state, action) => {
        // return state
    },
    
    REGISTER: (state, action) => {
        // return state
    }
}

export default (state = initialState.auth, action) => {
  return action.type in reducers 
    ? reducers[action.type](state, action)
    : state
    ;
}
```

### 3. Using the build-reducer library

If you want a more cleaner way to write your reducers, there is a library named build-reducer that lets you write your reducers as individual functions instead of a switch case block. To get started, install the library by running npm install --save build-reducer.

To define reducers using string action values.

```javascript
import buildReducer from 'build-reducer'  

const reducer = buildReducer({
  'REGISTER': () => ({})
  'LOGIN': (state, action) => ({ ...state, user: action.payload })
  'LOGOUT': (state, action) => ({ ...state, user: null })
})
```

To define reducers using constant action values we can use the ES6’s computed property names.

```javascript
import buildReducer from 'build-reducer'  

const REGISTER = 'REGISTER'
const LOGIN = 'LOGIN'
const LOGOUT= 'LOGOUT'

const reducer = buildReducer({
  [REGISTER]: () => ({})
  [LOGIN]: (state, action) => ({ ...state, user: action.payload })
  [LOGOUT]: (state, action) => ({ ...state, user: null })
})
```


