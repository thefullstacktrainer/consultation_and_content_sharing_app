import { Outlet, Link } from "react-router-dom";
import './ElearningLayout.css'
const ElearningLayout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/webinars">Webinars</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default ElearningLayout;