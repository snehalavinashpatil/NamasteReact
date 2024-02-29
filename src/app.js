import react from "react";
import  ReactDOM  from "react-dom/client";
import '../index.css';
import Header from "./components/Header";
import Body from "./components/Body";

//const parent = react.createElement('div',{id:'parent'},'welcome to namaste react application');

//jsx code
//const jsxHeading = (<><h1 id="header">namaste React using JSX</h1><p>this is description....</p></>)

//react functional component
// const JsxComponent = () => {
//     return (<><h1 id="header">namaste React using JSX</h1><p>this is description....</p></>)
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(jsxHeading);

const AppLayout = () => {
    return (<div className="app-layout">
<Header/>
<Body className="app-body"/>
    </div>)
};
root.render(<AppLayout/>);