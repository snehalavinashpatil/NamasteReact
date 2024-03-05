import {lazy,Suspense} from "react";
import  ReactDOM  from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
//import './index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestraurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"));

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
<Outlet/>
    </div>)
};

const appRouter = createBrowserRouter([{
    path:'/',
element:<AppLayout/>,
children:[
    {
        path:'/',
        element:<Body className="app-body"/>
        },
    {
    path:'/about',
    element:<About/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/grocery',
        element:<Suspense fallback={<h1>Loading grocery page ....</h1>}><Grocery/></Suspense>
    },
    {
        path:'/restaurants/:resId',
        element:<RestraurantMenu/>
    }],
errorElement:<Error/>},
]);

root.render(<RouterProvider router={appRouter}/>);