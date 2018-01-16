'use strict';

// JSX - Javascript XML
var app = {
    title: 'This is react demo project',
    subTitle: 'This is a sub title',
    options: []
};

var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();
    console.log('function called');
    var option = e.target.elements.option.value;
    // const option1 = e.target.elements.option1.value
    console.log(e.target.elements);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        // e.target.elements.option1.value = "";
        renderFunc();
    }
    //e.target.elements.option1.value = "Hasmukh"
};

var onRemoveOptions = function onRemoveOptions() {
    app.options = [];
    renderFunc();
};

var onRendomValue = function onRendomValue() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
};

var appRoot = document.getElementById('app');

var obj = { a: 1, b: 2 };

var add = function add() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$a = _ref.a,
        a = _ref$a === undefined ? 0 : _ref$a,
        _ref$b = _ref.b,
        b = _ref$b === undefined ? 0 : _ref$b;

    // obj = obj || {};
    // let a = obj.a || 0;

    // let b = obj.b || 0;
    return a + b;
};

console.log(add(obj));

var renderFunc = function renderFunc() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            { id: 'header_id', name: 'header' },
            app.title
        ),
        app.subTitle && React.createElement(
            'p',
            null,
            app.subTitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, type: 'button', onClick: onRendomValue },
            'What should I do? All'
        ),
        React.createElement(
            'button',
            { style: { marginTop: '2px' }, type: 'button', onClick: onRemoveOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            { className: 'list-view' },
            app.options.map(function (number) {
                return React.createElement(
                    'li',
                    { key: number },
                    number
                );
            }),
            [10, 20, 30],
            [React.createElement(
                'li',
                { key: '1' },
                'a'
            ), React.createElement(
                'li',
                { key: '2' },
                'b'
            ), React.createElement(
                'li',
                { key: '3' },
                'c'
            )]
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmitForm },
            React.createElement('input', { type: 'text', name: 'option', placeholder: 'Enter value' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Value'
            ),
            React.createElement('br', null)
        )
    );
    ReactDOM.render(template, appRoot);
};

renderFunc();

var user = {
    name: 'Baldaniya Hasmukh',
    age: 18,
    location: 'Ahmedabad'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : '-'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    getLocation(user.location)
);

//ReactDOM.render(templateTwo,appRoot);
