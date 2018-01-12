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
    var option1 = e.target.elements.option1.value;
    console.log(e.target.elements);
    if (option && option1) {
        app.options.push(option);
        app.options.push(option1);
        e.target.elements.option.value = "";
        e.target.elements.option1.value = "";
        renderFunc();
    }
    //e.target.elements.option1.value = "Hasmukh"
};

var onRemoveOptions = function onRemoveOptions() {
    app.options = [];
    renderFunc();
};

var appRoot = document.getElementById('app');

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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { style: { marginTop: '2px' }, type: 'button', onClick: onRemoveOptions },
            'Remove All'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmitForm },
            React.createElement('input', { type: 'text', name: 'option', placeholder: 'Enter value' }),
            React.createElement('input', { type: 'text', name: 'option1', placeholder: 'Enter value' }),
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
