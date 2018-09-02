
import axios from 'axios'
export const registerUser=(user,history)=>dispatch=>{
    axios
        .post('/api/users/register',user)
        .then(res=>history.push('/signIn'))
        .catch(err=>console.log(err))
}

// ({
//     type:Register_User,
//     user
// })