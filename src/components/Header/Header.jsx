import "./Header.css";
import { House, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className='header'>
      <div className='item brand'>
        <House className='icon' />
        <span>WaterlooStudentRent</span>
      </div>
      <div className='item contact'>
        <Phone className='icon' />
        <span>(778) 903 6567</span>
      </div>
      <div className='item contact'>
        <Mail className='icon' />
        <span>wchenyin@uwaterloo.ca</span>
      </div>
    </header>
  );
};

export default Header;
