import {useRouteError} from 'react-router-dom';

const Error = () =>{
    const error = useRouteError();

return (<><h1>Oops something went wrong.....</h1><h3>{error.statusText}</h3></>)
}

export default Error;