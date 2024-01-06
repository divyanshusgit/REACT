// IMPORTING REACT AND REACT DOM
import React from "react";
import ReactDOM from "react-dom/client";

// MAKING ELEMENTS USING REACT.CREATEELEMENT
const newElem = React.createElement(
    'h1',
    {
        id: 'newElement',
        className: 'elements',
    },
    "Hi there!"
);
const rootElem = ReactDOM.createRoot(document.getElementById('rootElem'));
rootElem.render(newElem);