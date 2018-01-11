console.log('test');

// JSX - Javascript XML

var app = {
    title : 'This is react demo project',
    subTitle : 'This is a sub title'
}

var template = (
    <div>
        <h1 id="header_id" name="header">{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
);

var user = {
    name: 'Baldaniya Hasmukh',
    age : 26,
    location : 'Ahmedabad'
}

function getLocation(location){
    if(location){
        return <p>Location : {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age : {user.age}</p>
        {/* <p>Location : {getLocation(user.location)}</p> */}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot);