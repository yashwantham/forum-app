import { useParams } from "react-router-dom";
import "./CommentPage.css";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Postcard } from "../components/PostCard";

export function CommentPage() {

    const {allPosts} = useContext(DataContext);

    const {postid} = useParams();

    const selectedPost = allPosts.find(({postId}) => postId === postid)

    // console.log(postId)

    return (
        <>
        <div className="comment-page-container">

            <div className="post-section">
                <Postcard post={selectedPost}/>
            </div>

        </div>
        </>
    )
}