import { Link } from "react-router-dom";
import "../index.css";
export default function Home() {
    return (
        <>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>

        </>
    )
}