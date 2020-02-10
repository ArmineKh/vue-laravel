import {getLoggedinUser} from '../../../partials/auth';
const user = getLoggedinUser();

export default{
    currentUser: ()=>{return user},
    isLoggedIn: ()=> {return !!user},
    loading: () => {return false},
    auth_error: ()=>{ return null},
    reg_error:()=>{ return null},
    registeredUser: ()=>{ return null},
  };
