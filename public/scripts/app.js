'use strict';

// JSX - Javascript XML

var app = {
    title: 'This is react demo project',
    subTitle: 'This is a sub title',
    options: ['one', 'two']
};

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
        'ol',
        { className: 'list-view' },
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        ),
        React.createElement(
            'li',
            null,
            'Item 3'
        )
    )
);

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

var count = 0;
var id = 'btn-id';
var addOne = function addOne() {
    console.log("count one");
    count++;
    manuallyDataBinding();
};
var minusOne = function minusOne() {
    console.log("count minus one");
    count--;
    manuallyDataBinding();
};

var resetCount = function resetCount() {
    console.log("count reset");
    count = 0;
    manuallyDataBinding();
};

var appRoot = document.getElementById('app');

var manuallyDataBinding = function manuallyDataBinding() {
    var templateThree = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count : ',
            count
        ),
        React.createElement(
            'button',
            { className: 'button', type: 'button', id: id, onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { className: 'button', type: 'button', onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { className: 'button', type: 'button', onClick: resetCount },
            'Reset'
        )
    );
    ReactDOM.render(templateThree, appRoot);
};

manuallyDataBinding();
