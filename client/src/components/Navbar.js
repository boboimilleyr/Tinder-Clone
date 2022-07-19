import whiteLogo from '../images/tinder_logo_white.png';
import colorLogo from '../images/color-logo-tinder.png';

const Navbar = ({
   minimal, authToken, showModal, setShowModal, setIsSignUp
}) => {

   function handleClick() {
      setShowModal(true);
      setIsSignUp(false);
   }

   return (
      <nav>
         <div className="logo-container">
            <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="Logo"/>
         </div>
         {!authToken && !minimal && <button className="nav-button" onClick={handleClick} disabled={showModal}>Login</button>}
      </nav>
   );
}

export default Navbar;