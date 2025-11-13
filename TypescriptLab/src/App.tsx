
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { useState } from 'react'

import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { Route, Routes } from 'react-router-dom'
import PrizeTable from './components/prize/prizetable.tsx';
import { Button } from 'antd';

function App() {

  return (
    <div className="app-container">
      <Header />
      {/* Các Routes cho các trang riêng */}
      <Routes>
        <Route path="/" element={
          <main className="main-content">
            <section id="home-section" className="app-section">
              <p>Home</p><br /><br />
                <h1 className="text-3xl font-bold underline"> Tailwind style</h1><br /><br />
                <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Tailwind button</button><br /><br />
                <Button type="primary">Ant Design Button</Button>
            </section>
          </main>
        } />

        <Route path="/products-section" element={
          <main className="main-content">
            <section id="products-section" className="app-section">
              <h1>Sản Phẩm</h1>
              <p>Đây là danh sách các sản phẩm</p>
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
