import React from 'react';

export default class HelloComponent extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            active:true,
        }
    }

    toggleactive = () => this.setState(({ active }) => ({ active: !active }));
    render() {
        const{ active } = this.state;
        return(
            <div>
                <button onClick={this.toggleactive}>Change</button>
                {active && <div> Hello from missouri & Elhouari </div>}
            </div>
        )
    }

}
