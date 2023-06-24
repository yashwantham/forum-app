import { useParams } from "react-router-dom";
import "./CommentPage.css";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Postcard } from "../components/PostCard";

export function CommentPage() {

    const { allPosts } = useContext(DataContext);

    const { postid } = useParams();

    const selectedPost = allPosts.find(({ postId }) => postId === postid)

    // console.log(postId)

    const getDate = (date) => {
        const dt = new Date(date);
        return `${dt.getDate()}-${dt.getMonth()}-${dt.getFullYear()}`;
    }

    return (
        <>
            <div className="comment-page-container">

                <div className="post-section">
                    <Postcard post={selectedPost} />
                </div>

                {/* comments: [
          {
            commentId: '89898-856-87576',
            username: 'ashwin4real',
            picUrl: 'http://bit.ly/42Zm7tM',
            likes: 0,
            comment: 'Interested',
            createdAt: '2023-06-23T12:01:00Z',
          },
        ], */}

                {selectedPost.comments.length !== 0 && (
                    selectedPost.comments.map((commenti) => (
                        <div className="comments-container">
                            <div className="avatar-container">
                                <img src={commenti.picUrl} alt="" className="avatar" />
                            </div>

                            <div className="comment-content-container">
                                <div className="commenter">
                                    <strong>@{commenti.username}</strong> · {getDate(commenti.createdAt)}
                                </div>
                                <div className="replyingto">
                                    Replying to <span>@{selectedPost.username}</span>
                                </div>
                                <div className="comment">
                                    {commenti.comment}
                                </div>
                                <div className="comment-section-icons">
                                    <i class="fa-regular fa-heart action-icon"></i>
                                    <i class="fa-regular fa-comment action-icon"></i>
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>



                        </div>
                    ))
                )}

            </div>
        </>
    )
}