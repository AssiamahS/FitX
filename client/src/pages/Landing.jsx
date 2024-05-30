// import { useQuery } from '@apollo/client';
// import { GET_POST } from '../graphql/queries'
// import { NavLink } from 'react-router-dom';




// export default function Landing() {

//     const { loading, error, data } = useQuery(GET_POST)

//     return (<>


//         {loading && <p>Loading</p>}
//         {data && data.getPosts.map(post => (
//             <div key={post._id}>
//                 <h2>
//                     {post.title}
//                 </h2>
//                 <p>{post.body}</p>
//                 <NavLink to={`/post/${post._id}`}>View Post</NavLink>
//             </div>
//         ))}
//     </>
//     )
// }

// //  default Landing