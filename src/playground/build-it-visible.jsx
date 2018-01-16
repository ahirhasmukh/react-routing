class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility:false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            }    
        })
    }

    render(){
        return (
            <div>
                <button type="button" onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'} Details</button>
                {this.state.visibility && (<div><p>This is a toggle content</p></div>)}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));

// visibility = false;

// const visibleToggleEvent = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const toggle = (
//         <div>
//             <button type="button" onClick={visibleToggleEvent} >{visibility ? 'Hide' : 'Show'} Details</button>
//             {visibility && (<div><p>This is a toggle content</p></div>)}
//         </div>
//     );

//     ReactDOM.render(toggle, document.getElementById('app'));
// }

// render();