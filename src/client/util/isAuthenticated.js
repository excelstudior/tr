import  setAuthToken  from './setAuthToken'
import jwt_code from 'jwt-decode';


export const isAuthenticated = () => {
    if (localStorage.jwtToken) {
       
        setAuthToken(localStorage.jwtToken);
        const decoded = jwt_code(localStorage.jwtToken);
        console.log(decoded)
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            return null
        } else { return decoded }
    }
}