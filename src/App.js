// // import logo from './logo.svg';
// import './style.css';

// import React, {useState} from 'react';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
// import Posts from './posts';

// const App = () => {
// const[isAuthenticated, setisAuthenticated] = useState(false);

// const handleLogin = () =>
//     setisAuthenticated (true);

// const handleSignup =()=> {


//     alert('please login with your new credentials');
// };

//     return (

// <div>

//     { isAuthenticated ?(
//         <Posts/>
        
//     ):(
//     <>
//     <SignIn onLogin={handleLogin}/>
//     <SignUp onSignup={handleSignup}/> 
//     </>
//     )
// }

// </div>


//     );


// };
// export default App;

 //BOOTSTRAP SETUP IN REACT//////////////////////////////////////////////////


 import React from 'react';
import './style.css'
 
 function app() {
   return (
     <div className="">
       <form className="row g-3">
         <div className="">
           <label type="staticEmail2">Email</label>
           <input type="text" id="staticEmail2" placeholder="email@example.com" className="form-control" />
         </div>
         <br />
         <div className="col-auto">
           <label type="inputPassword2">Password</label>
           <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
         </div>
         <div className="col-auto">
           <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
         </div>
       </form>
     </div>
   );
 }
 
 export default app;
 
 