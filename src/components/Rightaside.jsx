import { useContext } from "react";
import "./Rightaside.css";
import { DataContext } from "../context/DataProvider";

export function Rightaside() {

    const {SetDisplayorder} = useContext(DataContext);

    return (
        <>
            <div className="rightaside-container">
                <div className="heading">
                    <h2>Sort by</h2>
                </div>
                <div className="sorting-container">
                    <select name="sort-type" id="" onChange={(e) => SetDisplayorder(e.target.value)}>
                        <option value="latestposts">Latest Posts</option>
                        <option value="mostupvoted">Most Upvoted</option>
                    </select>
                </div>
            </div>
        </>
    )
}