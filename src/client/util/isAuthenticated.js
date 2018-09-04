import {setAuthToken} from './setAuthToken'
import jwt_code from 'jwt-decode';


export const isAuthenticated=(redirect)=>{
    if (localStorage.jwtToken){
        setAuthToken(localStorage.jwtToken);
        const decoded=jwt_code(localStorage.jwtToken);
        //store.dispatch()
        //console.log(store)

        const currentTime=Date.now()/1000;
        if(decoded.exp<currentTime){
            //store.dispatch()
            window.location.href=redirect;
        }
    } 

   
}