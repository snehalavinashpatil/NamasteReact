import User from "./User";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const About = () => {
    const user = useContext(UserContext);
    return <div>
        <h1>{user.loggedIn}</h1>
        <User name={"(class based component) snehal patil"}/>
        </div>
};

export default About;