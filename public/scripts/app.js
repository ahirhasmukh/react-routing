'use strict';

console.log('test');

// JSX - Javascript XML

var app = {
    title: 'This is react demo project',
    subTitle: 'This is a sub title'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { id: 'header_id', name: 'header' },
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'ol',
        null,
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
    age: 26,
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
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
