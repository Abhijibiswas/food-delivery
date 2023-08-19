import { Link } from "react-router-dom";
const PageNotFound = ()=>{
    return (
        <>
        <h1 className="display-1 text-center">Page is Not Available</h1>
        <p className="text-center fw-bold h1 text-danger">The current page is not available</p>
        <p className="text-center fw-bold h2">CLICK <Link to={"/"}>HERE </Link> to get Home page</p>
        </>
    );
}

export default PageNotFound;