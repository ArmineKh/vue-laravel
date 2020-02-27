import {getLoggedinUser} from '../../../Services/auth';
const user = getLoggedinUser();

export default{
    currentUser: user,
    isLoggedIn: false,
    loading: null,
    auth_error: null,
    reg_error:null,
    registeredUser: null
};
