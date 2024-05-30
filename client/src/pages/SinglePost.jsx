// import { useParams } from "react-router-dom"
// import { GET_SINGLE_POST } from "../graphql/queries"
// import { useQuery } from "@apollo/client"

// export function SinglePost (){
//     const param= useParams()
//     const {loading,data,error}=useQuery(GET_SINGLE_POST,{
//         variables: {
//             post_id:param.id
//         }
//     })
//     console.log (data)
//     return (
//         <div>
//             <h1>{data?.getOnePost.title}</h1>
//             <p>{data?.getOnePost.body}</p>
//             <p>_id: {data?.getOnePost._id}</p>
//         </div>
//     )
// }