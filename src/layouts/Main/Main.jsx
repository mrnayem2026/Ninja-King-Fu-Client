import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            I am from main
            <Outlet></Outlet>
        </div>
    );
};

export default Main;