import axios from 'axios';




async function getData(userId)  {
    try{
        var {data : user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
        var {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`) 

        let myResult = { 
            ...user,
            post,
        }
        return myResult;
    }catch(error){
        return error;
    }
    
        
}

export default { getData };