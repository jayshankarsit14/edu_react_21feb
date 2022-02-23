# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Description about the application
es5-ecma script 5
function add(a,b){
return a+b
}
es6-ecma script 6
const add=(a,b)=>{return a+b}

Diff between var,let,const

 "react": This is the main package of the app
    "react-dom":This will help to bind the content in html
    "react-scripts": This will help to run the app



    function add(a,b){
      return a,b
    }
    add(1,2)  o/p=2  Any function can return one value at a time.

    if we need more then one value then we need to wrap the value
    function add(a,b){
        var out=[a,b]
      return out
    }
    add(1,2)  o/p=[1,2]

    ///////
    Functional componeng and class component
    state/props
    binding data
    event binding
    passing data from one component to another
    CSS with react
    ===========================
    Functional component:-
    -Dump Component
    -Mainly used for display purpose
    -We can not maintain the state

    class component:-
    -logical component
    -we can use for api calling, display as well as logic
    -we can maintain state


  props
> props is use to transfer data from one component to another
> we cannot update the value of props(immutable)
> Props can only be used in nested components

state
> It act like a local variable
> Every component can have its own state
> Scope of one state is in that component only
> we can update the value of state(mutable)
> whenever state update component will re-render

===========
map,filter,indexof,bootstrap

var city=["Bangalore","Delhi","Pune"]

for(i=0;i<city.length;i++){
  console.log(city[i])
}

city.map((data)=>{console.log(data)})


filter:-
var a=[0,1,2,3]
a.filter((data) =>{return data*2})

var a = [3,5,7,8,4,9,10,1]
a.filter((data) => {return data>5})
(4) [7, 8, 9, 10]
var a = [0,1,2,3]
a.filter((data) => {return data*2})
(3) [1, 2, 3]
var city = ["Delhi","Mumbai","Pune","London"];
undefined
city.indexOf('Delhi')
0
city.indexOf('Pune')
2
city.indexOf('Amsterdam')
-1


//////////
parent to child => props
child to parent => props with function


function add(a,b){
    return a + b
}

add(1,2)> from where i to pass value

in the a parent >>>> Define function
in the child >>>> call function