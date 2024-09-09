import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { menuItems } from '../data/cafeData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">เมนูของเรา</h1>
      
      <div className="mb-8 flex justify-center space-x-4">
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{item.name}</span>
                <span className="text-lg font-medium text-gray-600">฿{item.price.toFixed(2)}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{item.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 bg-amber-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">สูตรกาแฟพิเศษของร้าน</h2>
        <p className="mb-4">ลองดื่มกาแฟเบลนด์พิเศษของเรา ทำจากเมล็ดกาแฟออร์แกนิคที่คัดสรรมาจากท้องถิ่น สูตรพิเศษของเราผสมผสานรสชาติอันล้ำลึกกับความนุ่มนวล เหมาะสำหรับผู้หลงใหลในกาแฟและผู้ที่ดื่มกาแฟเป็นครั้งคราว</p>
        <p>ขนมหวานทั้งหมดของเราทำสดใหม่ในร้าน โดยใช้ส่วนผสมคุณภาพเยี่ยม เพื่อให้ได้รสชาติและคุณภาพที่ดีที่สุดในทุกคำที่คุณได้ลิ้มลอง</p>
      </div>
    </Layout>
  );
};

export default Menu;
