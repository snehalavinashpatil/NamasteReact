import React from 'react';

class User extends React.Component {
    constructor(props){
        super(props);
//class component state variables
        this.state = {
            userInfo:{
                login:"defualt",
            location:"default"
            }
        };
    }

    async componentDidMount(){
const data = await fetch('https://api.github.com/users/snehalavinashpatil');
const json = await data.json();
console.log(json);
this.setState({userInfo:json});
    }

    render(){
       const {login,location,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h1>login:{login}</h1>
                <h3>Location:{location}</h3>
            </div>
        );
    }
}

export default User;