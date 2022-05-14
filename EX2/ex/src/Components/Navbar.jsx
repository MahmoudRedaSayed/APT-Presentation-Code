import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

function NavBar(){
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/index">Jokey Dokey</Link>
                <Link className="navbar-brand" to="/addjoke">Add Joke</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                </div>
            </div>
        </nav>
    
        </div>
    )
    }
    export default NavBar;