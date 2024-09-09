import React from 'react';
import { Link } from 'react-router-dom';
import { CoffeeIcon } from "lucide-react";
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300">
      <header className="bg-primary text-primary-foreground py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <CoffeeIcon className="mr-2" />
            HomeCafe
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-accent transition-colors duration-200">หน้าแรก</Link>
            <Link to="/menu" className="hover:text-accent transition-colors duration-200">เมนู</Link>
            <Link to="/about" className="hover:text-accent transition-colors duration-200">เกี่ยวกับเรา</Link>
            <Link to="/promotions" className="hover:text-accent transition-colors duration-200">โปรโมชั่น</Link>
            <Link to="/gallery" className="hover:text-accent transition-colors duration-200">แกลเลอรี</Link>
            <Link to="/contact" className="hover:text-accent transition-colors duration-200">ติดต่อเรา</Link> 
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-grow container mx-auto mt-8 px-4">
        {children}
      </main>
      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">HomeCafe</h3>
              <p>ร้านกาแฟเล็ก ๆ ที่อบอุ่นใจกลางเมือง</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">ติดต่อเรา</h3>
              <p>123 ถนนกาแฟ</p>
              <p>เมือง, รหัสไปรษณีย์ 12345</p>
              <p>โทรศัพท์: (123) 456-7890</p>
              <p>อีเมล: info@homecafe.com</p>
              <p>เปิดทุกวัน: 07:00 - 20:00</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">ติดตามเรา</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="hover:text-accent transition-colors duration-200">Facebook</a>
                <a href="https://twitter.com" className="hover:text-accent transition-colors duration-200">Twitter</a>
                <a href="https://instagram.com" className="hover:text-accent transition-colors duration-200">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Home Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
