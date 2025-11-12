
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { useState } from 'react'

import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      {/* Các Routes cho các trang riêng */}
      <Routes>
        <Route path="/" element={
          <main>
            <section id="home-section" className="app-section">
              <h1>Trang Chủ</h1>
              <p>Chào mừng đến với Typescript Lab!</p>
            </section>
            <section id="products-section" className="app-section">
              <h1>Sản Phẩm</h1>
              <p>Đây là danh sách các sản phẩm của chúng tôi.</p>
            </section>
          </main>
        } />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
