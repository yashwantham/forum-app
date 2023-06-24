import { NavLink } from "react-router-dom";
import "./Leftaside.css";
export function Leftaside() {

    const activeStyle = { fontWeight: "700" }

    return (
        <>
            <div className="leftaside-container"> 

                <div className="icon-navs-container">
                    <div className="nav-icon">
                        <NavLink to="/" className="navi-container home-ic" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <i class="fa-solid fa-house nav-icon"></i><span>Home</span>
                        </NavLink>
                    </div>
                    <div className="nav-icon navi-container">
                        <i class="fa-solid fa-magnifying-glass nav-icon"></i><span>Explore</span>
                    </div>
                    <div className="nav-icon navi-container">
                        <i class="fa-regular fa-bookmark nav-icon"></i><span>Bookmarks</span>
                    </div>
                    <div className="nav-icon navi-container">
                        <i class="fa-regular fa-user nav-icon"></i><span>Profile</span>
                    </div>
                </div>

                <div className="profile-nav-container">
                    <h2>Profile</h2>
                </div>

            </div>
        </>
    )
}