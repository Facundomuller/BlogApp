import React from 'react';

const classMenu = {
    menuOn: 'appMenu menuOn',
    menuOff: 'appMenu menuOff'
}

class ToggleMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleMenuOn: true}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            isToggleMenuOn: !state.isToggleMenuOn
        }));
    }

    render(){
        return(
            <button onClick={this.handleClick} className={this.state.isToggleMenuOn ? classMenu.menuOn : classMenu.menuOff}>
                <div className="toggleMenu">
                    {
                        this.state.isToggleMenuOn ? 
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                            <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"/>
                        </svg>
                        :
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                            <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                        </svg>
                    }
                </div>
            </button>
        );
    }
}

export default ToggleMenu