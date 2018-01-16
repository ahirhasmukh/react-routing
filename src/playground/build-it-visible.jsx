visibility = false;

const visibleToggleEvent = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const toggle = (
        <div>
            <button type="button" onClick={visibleToggleEvent} >{visibility ? 'Hide' : 'Show'} Details</button>
            {visibility && (<div><p>This is a toggle content</p></div>)}
        </div>
    );

    ReactDOM.render(toggle, document.getElementById('app'));
}

render();