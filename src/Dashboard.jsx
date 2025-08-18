import { useContext } from "react";
import UserContext from "./UserContext";
import { ThemeContext } from "./ThemeContext";

function Dashboard() {
    const username = useContext(UserContext);
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <p>Current theme: {theme}</p>
        </div>
    );
}

export default Dashboard;