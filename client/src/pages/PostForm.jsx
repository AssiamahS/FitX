// import { useState } from "react"
// import { gql, useMutation } from '@apollo/client';
// import { GET_POST } from "../graphql/queries";
// import { CREATE_POST } from "../graphql/mutations";



// export function PostForm() {

//     const [formData, setFormData] = useState({
//         title: '',
//         body: ''
//     })

//     const [createPost] = useMutation(CREATE_POST,{
//         variables:formData,
//         refetchQueries: [GET_POST]
//     })
//     const handleinput = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     }
//     const handleSubmit = async(e) => {
//             e.preventDefault()

//             const data = await createPost()

//             console.log(data)
//     }
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="title" onChange={handleinput}/>
//                 <input type="text" name='body' onChange={handleinput}/>
//                 <button>Submit</button>
//             </form>
//         </>

//     )
// }




import React from 'react';

const PostForm = () => (
  <div>
    <h1>Create a Post</h1>
  </div>
);

export default PostForm;
