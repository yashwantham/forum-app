import { useContext } from "react";
import "./PostCard.css";
import { DataContext } from "../context/DataProvider";
import { NavLink, useNavigate } from "react-router-dom";

export function Postcard({post}) {

    // const navigate = useNavigate();

    const {dispatchData} = useContext(DataContext);

    const getDate = (date) => {
        const dt = new Date(date);
        return `${dt.getDate()}-${dt.getMonth()}-${dt.getFullYear()}`;
    }

    return (
        <>
            <div className="postcard-container">
                <div className="up-down-container">
                    <div className="up-container">
                    <i class="fa-solid fa-caret-up icon" onClick={() => dispatchData({type: "upvote", payload: post.postId})}></i>
                    </div>

                    <div className="vote-count">
                        {post.upvotes - post.downvotes}
                    </div>

                    <div className="down-container">
                    <i class="fa-solid fa-caret-up icon" onClick={() => dispatchData({type: "downvote", payload: post.postId})}></i>
                    </div>
                </div>

                <div className="post-content-container">
                    <div className="posted-by-container">
                        <div className="avatar-container">
                            <img src={post.picUrl} alt="" className="avatar"/>
                        </div>
                        <div className="postedby">
                            Posted by <span>@{post.username}</span> · {getDate(post.createdAt)}
                        </div>
                    </div>
                

                <div className="post-head-container">
                   <h2> {post.post}</h2>
                </div>

                <div className="tags-container">
                    {post.tags.map((tag) => (
                        <div className="tag">
                            {tag.toUpperCase()}
                        </div>
                    ))}
                </div>

                <div className="post-description">
                    {post.postDescription}
                    <hr />
                </div>

                <div className="comment-share-book">

                    <div className="action-icon-container">
                    <NavLink to={`/comment/${post.postId}`} ><i class="fa-regular fa-comment action-icon"></i></NavLink>
                    </div>

                    <div className="action-icon-container">
                    <i class="fa-solid fa-share-nodes"></i>
                    </div>

                    <div className="action-icon-container">
                    {post.isBookmarked ? <i class="fa-solid fa-bookmark action-icon bookmarked-icon" onClick={() => dispatchData({type: "toggle-bookmark",  payload: post.postId})}></i> : <i class="fa-regular fa-bookmark action-icon" onClick={() => dispatchData({type: "toggle-bookmark", payload: post.postId})}></i>}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}