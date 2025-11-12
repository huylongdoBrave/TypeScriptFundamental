import React from 'react';
import './Footer.css'; 

function Footer(){
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Về Chúng Tôi</h3>
            <ul>
              <li><a href="#">Lịch sử</a></li>
              <li><a href="#">Đội ngũ</a></li>
              <li><a href="#">Tuyển dụng</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Dịch Vụ</h3>
            <ul>
              <li><a href="#">Phát triển Web</a></li>
              <li><a href="#">Ứng dụng Di động</a></li>
              <li><a href="#">Tư vấn SEO</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Liên Hệ</h3>
            <ul>
              <li><a href="#">Hỗ trợ</a></li>
              <li><a href="#">Báo chí</a></li>
              <li><a href="#">Đối tác</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 Typescript Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;