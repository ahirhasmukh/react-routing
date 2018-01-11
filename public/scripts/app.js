'use strict';

console.log('test');

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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
