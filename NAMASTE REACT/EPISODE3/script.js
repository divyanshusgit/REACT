import React from "react";
import ReactDOM from "react-dom/client";

// MAKING A REACT ELEMENT AND CHECKING WHAT IT CONTAINS
// const newElement = React.createElement(
//     'h1',
//     {
//         id:'firstElem',
//         className:'headings',
//         key:'key1',
//     },
//     "this is the heading",
// );
// console.log(newElement);
// console.log(newElement.$$typeof);
// console.log(newElement.type);
// console.log(newElement.key);
// console.log(newElement.props);
// console.log(newElement.props.id);
// console.log(newElement.props.className);
// console.log(newElement.props.children);
// const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
// rootElement.render(newElement);

// USING JXS
// const newElement = <h1>This is heading.</h1>;
// const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
// rootElement.render(newElement);

// USING FUNCTIONAL COMPONENTS (single line jsx)
// const  NewElement = () => <h1>This is a heading</h1>;
// const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
// rootElement.render(<NewElement/>);
// console.log(NewElement);

// USING FUNCTIONAL COMPONENTS (multi line jsx)
// const  NewElement = () => (
//     <div>
//     <h1>This is a heading</h1>
//     <h1>This is also heading</h1>
//     </div>
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
// rootElement.render(<NewElement/>);

// USING FUNCTION COMPONENTS INSIDE FUNCTIONAL COMPONENTS
// const FirstHeading = () => <h1>This is the first heading</h1>;
// const SecondHeading = () => <h1>This is the second heading</h1>;
// const  NewElement = () => (
//     <div>
//         <FirstHeading/>
//         <SecondHeading/>
//     </div>
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
// rootElement.render(<NewElement/>);

// WRITING JAVASCRIPT INSIDE JSX 
// const headingName1 = 'first1';
// const headingName2 = 'second2';
// const FirstHeading = () => <h1>This is the {headingName1} heading</h1>;
// const SecondHeading = () => <h1>This is the {headingName2} heading</h1>;
// const  NewElement = () => (
//     <div>
//         <FirstHeading/>
//         <SecondHeading/>
//     </div>
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
// rootElement.render(<NewElement/>);

// MORE WAYS TO USE A FUNCTIONAL COMPONENT INSIDE A FUNCTIONAL COMPONENT
// const headingName1 = 'first1';
// const headingName2 = 'second2';
// const FirstHeading = () => <h1>This is the {headingName1} heading</h1>;
// const SecondHeading = () => <h1>This is the {headingName2} heading</h1>;
// const  NewElement = () => (
//     <div>
//         <FirstHeading></FirstHeading>
//         {SecondHeading()}
//     </div>
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
// rootElement.render(<NewElement/>);

// TRYING TO PUT DYNAMIC DATA IN OUR JSX
const sampleScript = `<script>alert("Hi")</script>`;
const  NewElement = () => (
    <div>
        {sampleScript}
        {console.log('Hi')}
    </div>
);
const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
rootElement.render(<NewElement/>);