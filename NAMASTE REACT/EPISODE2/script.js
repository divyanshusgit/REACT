import React from "react";
import ReactDOM from "react-dom/client";

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