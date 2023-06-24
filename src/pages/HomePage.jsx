import { useContext } from "react";
import "./HomePage.css";
import { DataContext } from "../context/DataProvider";
import { Postcard } from "../components/PostCard";

export function HomePage() {


    const {allPosts, displayorder} = useContext(DataContext);

    let postsToDisplay = allPosts;

    if(displayorder === "latestposts") {
        postsToDisplay = postsToDisplay.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
    else if(displayorder === "mostupvoted") {
        postsToDisplay = postsToDisplay.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes))
    }

    return (
        <>
        <div className="home-page-container">
            <div className="home-head">
                Latest Posts
            </div>

            <div className="postlist-container">
                {postsToDisplay?.map((post) => <Postcard post={post}/> )}
            </div>

        </div>
        </>
    )
}