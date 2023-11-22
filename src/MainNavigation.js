import { Link } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "./context";

function MainNavigation() {
    const { age } = useContext(AppContext);
    return (
        <div>
            <div>Blogs - {age}</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All blogs</Link>
                    </li>
                    <li>
                        <Link to='/new-blog'>New blog</Link>
                    </li>
                </ul>
            </nav>
        </div>)
}

export default MainNavigation;

