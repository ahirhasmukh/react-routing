class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:props.count
        }
    }
    
    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount,10);
        if(!isNaN(count)){
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.count !== this.state.count){
            //const json = JSON.stringify(this.state.count);
            localStorage.setItem('count',this.state.count);
        }
    }

    handleAddOne(){
       this.setState((lastCount) => {
           return {
            count: lastCount.count + 1
           }
       });
    }

    handleMinusOne(){
        this.setState((lastCount) => {
            return {
             count: lastCount.count - 1
            }
        });
    }

    handleReset(){
        this.setState(() => {
            return {
             count: 0
            }
        });

        // this.setState((prevState) => {
        //     return {
        //      count: prevState.count + 1
        //     }
        // });

        // this.setState({
        //     count:0
        // })

        // this.setState({
        //     count: this.state.count + 1
        // })
    }

    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    };
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const id = 'btn-id'
// const addOne = () => {
//     console.log("count one");
//     count++;
//     manuallyDataBinding();
// }
// const minusOne = () => {
//     console.log("count minus one");
//     count--;
//     manuallyDataBinding();
// }

// const resetCount = () => {
//     console.log("count reset");
//     count = 0;
//     manuallyDataBinding();
// }

// const appRoot = document.getElementById('app');

// const manuallyDataBinding = () => {
//     const templateThree = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button className="button" type="button" id={id} onClick = {addOne}>+1</button>
//             <button className="button" type="button" onClick = {minusOne}>-1</button>
//             <button className="button" type="button" onClick = {resetCount}>Reset</button>
//             {/* <button className="button" type="button" id={id} onClick = {() => {console.log('addd')}}>Add</button> */}
//         </div>
//     );
//     ReactDOM.render(templateThree,appRoot);
// }

// manuallyDataBinding();