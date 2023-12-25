// LOGGING THE REACT AND REACT DOM OBJECTS INTO THE CONSOLE
// console.log(React);
// console.log(ReactDOM);

// MAKING A NEW ELEMENT USING REACT.CRATEELEMENT FUNCTION AND
// const newElement = React.createElement(
//     'div',
//     {
//         id: 'firstDiv',
//         className: 'divElements',
//     },
//     "this is a div element built using the React.createElement function"
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
// rootElement.render(newElement);

// MAKING NESTED STRUCTURE
const newElement = React.createElement(
    'div',
    {
        id: 'firstDiv',
        className: 'divElements',
    },
    [
        React.createElement(
            'div',
            {
                id: 'firstChild',
                className: 'children',
                key: 'key1',
            },
            'first child'
        ),
        React.createElement(
            'div',
            {
                id: 'secondChild',
                className: 'children',
                key: 'key2',
            },
            'second child'
        )
    ]
);
const rootElement = ReactDOM.createRoot(document.getElementById('rootElem'));
rootElement.render(newElement);