import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faTicket } from '@fortawesome/free-solid-svg-icons';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  //Lấy navigate
  const navigate = useNavigate();
  //Lấy đối tượng
  const location = useLocation();

  // Hàm xử lý cuộn
  const handleScroll = (sectionId: string) => {
    // Nếu không ở trang chủ, chuyển về trang chủ trước rồi mới cuộn
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="app-header">
    <nav className="main-nav">
    <ul className="nav-list">
        <li className="nav-item">
        <NavLink to="/" onClick={()=>handleScroll('home-section')} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/products-section" onClick={()=>handleScroll('products-section')} className={({ isActive }) => (isActive ? 'active' : '')}>Sản phẩm</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/about" onClick={()=>handleScroll('about-section')} className={({ isActive }) => (isActive ? 'active' : '')}>Giới Thiệu</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/contact" onClick={()=>handleScroll('contact-section')} className={({ isActive }) => (isActive ? 'active' : '')}>Liên Hệ</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/prizes" onClick={()=>handleScroll('prizes-section')} className={({ isActive }) => (isActive ? 'active' : '')}>Quà tặng</NavLink>
        </li>
    </ul>
    </nav>
    </header>
  );
}

export default Header;
