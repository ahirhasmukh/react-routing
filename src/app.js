// JSX - Javascript XML

const app = {
    title : 'This is react demo project',
    subTitle : 'This is a sub title',
    options:[]
}

const onSubmitForm = (e) =>{
    e.preventDefault();
    console.log('function called');
    const option = e.target.elements.option.value
    const option1 = e.target.elements.option1.value
    console.log(e.target.elements);
    if(option && option1){
        app.options.push(option);
        app.options.push(option1);
        e.target.elements.option.value = "";
        e.target.elements.option1.value = "";
        renderFunc();
    }
    //e.target.elements.option1.value = "Hasmukh"
}

const onRemoveOptions = () => {
    app.options = [];
    renderFunc();
}

const appRoot = document.getElementById('app');


const renderFunc = () =>{
    const template = (
        <div>
            <h1 id="header_id" name="header">{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button style={{marginTop:'2px'}} type="button" onClick={onRemoveOptions}>Remove All</button>
            <ol className="list-view">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
            <form onSubmit={onSubmitForm}>
                <input type="text" name="option" placeholder="Enter value"/>
                <input type="text" name="option1" placeholder="Enter value"/>
                <button type="submit">Add Value</button><br/>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

renderFunc();


const user = {
    name: 'Baldaniya Hasmukh',
    age : 18,
    location : 'Ahmedabad'
}

function getLocation(location){
    if(location){
        return <p>Location : {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : '-'}</h1>
        {(user.age && user.age >= 18) && <p>Age : {user.age}</p>}
        {/* <p>Location : {getLocation(user.location)}</p> */}
        {getLocation(user.location)}
    </div>
);

//ReactDOM.render(templateTwo,appRoot);