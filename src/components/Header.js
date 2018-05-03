import React from 'react';

export default class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="container">
                    <h1 className="header__title">{this.props.title}</h1>
                    {this.props.subTitle && <h2 className="header__sub-title">{this.props.subTitle}</h2>}
                </div>
            </div>
        );
    }
}

// const Header = (props) => (
//     <div className="header">    
//         <h1 className="header__title">{this.props.title}</h1>
//         {this.props.subTitle && <h2 className="header__sub-title">{this.props.subTitle}</h2>}
//     </div>
// );

// Default props
Header.defaultProps = {
    title:'This is title'
};