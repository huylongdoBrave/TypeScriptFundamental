import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faTicket } from '@fortawesome/free-solid-svg-icons';
// import { Link, NavLink } from 'react-router-dom';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {

  const navigate = useNavigate();
  const location = useLocation();

  // Hàm xử lý cuộn mượt mà
  const handleScroll = (sectionId: string) => {
    // Nếu không ở trang chủ, chuyển về trang chủ trước rồi mới cuộn
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="app-header">
      <nav className="main-nav">
        <ul className="nav-list">
          {/* Sử dụng NavLink cho các trang riêng và button cho các mục cuộn */}
          <li className="nav-item"><button onClick={() => handleScroll('home-section')}>Trang Chủ</button></li>
          <li className="nav-item"><button onClick={() => handleScroll('products-section')}>Sản Phẩm</button></li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Giới Thiệu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Liên Hệ</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
