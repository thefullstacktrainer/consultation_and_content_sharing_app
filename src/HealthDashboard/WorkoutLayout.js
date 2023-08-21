import { Outlet, Link } from "react-router-dom";

const WorkoutLayout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/workouts">Blogs</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default WorkoutLayout;