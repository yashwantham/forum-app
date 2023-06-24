import { createContext, useReducer, useState } from "react"

const forumData = {
    accountId: '98767-888-78767',
    username: 'tanaypratap',
    name: 'Tanay Pratap',
    picUrl: 'http://bit.ly/42Zm7tM',
    posts: [
      {
        postId: '36635-787-65778',
        username: 'tanaypratap',
        name: 'Tanay Pratap',
        picUrl: 'http://bit.ly/42Zm7tM',
        post: 'Join InvactHQ for MBA',
        postDescription:
          'Non programmers on my timeline. Attention! After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well. Interested in helping me build this course? Join me at Invact.',
        upvotes: 350,
        downvotes: 50,
        tags: ['mba', 'business', 'bootcamp'],
        createdAt: '2023-06-23T12:00:00Z',
        comments: [
          {
            commentId: '89898-856-87576',
            username: 'ashwin4real',
            picUrl: 'http://bit.ly/42Zm7tM',
            likes: 0,
            comment: 'Interested',
            createdAt: '2023-06-23T12:01:00Z',
          },
        ],
        isBookmarked: false,
      },
      {
        postId: '36698-343-321232',
        username: 'trishajain',
        name: 'Trisha Jain',
        picUrl: 'http://bit.ly/42Zm7tM',
        post: 'Can I learn HTML, CSS, and JavaScript in 1 year?',
        postDescription:
          'I am looking to make my career in web development and want to learn these technologies. Can I learn these in 1 year and get a job?',
        upvotes: 150,
        downvotes: 0,
        tags: ['html', 'javascript', 'web development'],
        createdAt: '2023-06-24T12:54:00Z',
        comments: [],
        isBookmarked: false,
      },
    ],
  }


  export const DataContext = createContext();

  export function DataProvider({children}) {

    const [displayorder, SetDisplayorder] = useState("");

    const reducer = (state, action) => {

        switch(action.type) {

            case "toggle-bookmark": {
               const updatedState = state.map((post) => post.postId === action.payload ? {...post, isBookmarked: !post.isBookmarked} : post)
               return [...updatedState];
            }

            case "upvote": {
                const updatedState = state.map((post) => post.postId === action.payload ? {...post, upvotes: post.upvotes + 1} : post)
                return [...updatedState];
            }

            case "downvote": {
                const updatedState = state.map((post) => post.postId === action.payload ? {...post, upvotes: post.upvotes - 1} : post)
                return [...updatedState];
            }
        
            default: {
                return state
            }

        }

    }

    const [allPosts, dispatchData] = useReducer(reducer, forumData.posts)

    return (
        <>
        <DataContext.Provider value={{forumData, allPosts, dispatchData, displayorder, SetDisplayorder}}>{children}</DataContext.Provider>
        </>
    )
  }