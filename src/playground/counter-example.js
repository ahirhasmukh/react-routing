let count = 0;
const id = 'btn-id'
const addOne = () => {
    console.log("count one");
    count++;
    manuallyDataBinding();
}
const minusOne = () => {
    console.log("count minus one");
    count--;
    manuallyDataBinding();
}

const resetCount = () => {
    console.log("count reset");
    count = 0;
    manuallyDataBinding();
}

const appRoot = document.getElementById('app');

const manuallyDataBinding = () => {
    const templateThree = (
        <div>
            <h1>Count : {count}</h1>
            <button className="button" type="button" id={id} onClick = {addOne}>+1</button>
            <button className="button" type="button" onClick = {minusOne}>-1</button>
            <button className="button" type="button" onClick = {resetCount}>Reset</button>
            {/* <button className="button" type="button" id={id} onClick = {() => {console.log('addd')}}>Add</button> */}
        </div>
    );
    ReactDOM.render(templateThree,appRoot);
}

manuallyDataBinding();