
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { useState } from 'react'

import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { Route, Routes } from 'react-router-dom'
import PrizeTable from './components/prize/prizetable.tsx';

function App() {

  return (
    <div className="app-container">
      <Header />
      {/* Các Routes cho các trang riêng */}
      <Routes>
        <Route path="/" element={
          <main className="main-content">
            <section id="home-section" className="app-section">
              <h1>Trang Chủ</h1>
              <p>Chào mừng đến với Typescript Lab!</p>
            </section>
          </main>
        } />
        <Route path="/products-section" element={
          <main className="main-content">
            <section id="products-section" className="app-section">
              <h1>Sản Phẩm</h1>
              <p>Đây là danh sách các sản phẩm của chúng tôi.</p>
            </section>
          </main>} />
        <Route path="/about" element={
          <main className="main-content">
            <div style={{ padding: '2rem' }}>About Page</div>
          </main>
          } />
        <Route path="/contact" element={
          <main className="main-content">
            <div style={{ padding: '2rem' }}>Contact Page</div>
          </main>
        } />
        <Route path="/prizes" element={
          <main className="main-content"><PrizeTable /></main>
        } />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
