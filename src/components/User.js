import React from 'react';

class User extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="user-card">
                <h1>Name:{this.props.name}</h1>
                <h3>Location:Mumbai</h3>
            </div>
        );
    }
}

export default User;