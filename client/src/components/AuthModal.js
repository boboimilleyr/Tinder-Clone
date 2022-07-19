import { useState } from 'react';

const AuthModal = ({ setShowModal, isSignUp }) => {

   const [formData, setFormData] = useState({
      email: "",
      password: "",
      passwordConfirm: "",
      error: null
   });

   function handleClick() {
      setShowModal(false);
   }

   function handleChange(e) {
      const { name, value } = e.target;
      setFormData(prevData => {
         return ({
            ...prevData,
            [name]: value
         });
      });
   }

   function handleSubmit(e) {
      e.preventDefault();
      try {
         if(isSignUp && (formData.password !== formData.passwordConfirm)) {
            setFormData(prevData => {
               return ({
                  ...prevData,
                  error: "Passwords need to match!"
               });
            });
         }
         console.log("make a post req to db")
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className="auth-modal">
         <div className="close-icon" onClick={handleClick}>ⓧ</div>
         <h2>{isSignUp ? 'CREATE ACCOUNT' : "LOG IN"}</h2>
         <p>By clicking Log In, you agreef to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
         <form onSubmit={handleSubmit}>
            <input
               type="email"
               id="email"
               name="email"
               placeholder="Email"
               value={formData.email}
               onChange={handleChange}
               required={true}
            />
            <input
               type="password"
               id="password"
               name="password"
               placeholder="Password"
               value={formData.password}
               onChange={handleChange}
               required={true}
            />
            {
               isSignUp && 
               <input
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  required={true}
               />
            }
            <button className='secondary-button'>Submit</button>
            <p>{formData.error}</p>
         </form>
         <hr/>
         <h2>GET THE APP</h2>
      </div>
   );
}

export default AuthModal;