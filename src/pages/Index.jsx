import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { menuItems } from '../data/cafeData';

const Index = () => {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <Layout>
      <div className="text-center">
        <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h1 className="text-5xl font-bold mb-4 text-white">ยินดีต้อนรับสู่ร้านกาแฟของเรา</h1>
            <p className="text-xl mb-8 text-white">ร้านกาแฟเล็กๆ ที่อบอุ่นใจกลางเมือง</p>
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
              <Link to="/menu">ดูเมนูของเรา</Link>
            </Button>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">รายการแนะนำ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-lg font-medium text-gray-600">฿{item.price.toFixed(2)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">เมนูของเรา</h2>
              <p className="mb-4">ค้นพบเครื่องดื่มและขนมอบที่อร่อยของเรา</p>
              <Button asChild><Link to="/menu">ดูเมนู</Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">โปรโมชั่น</h2>
              <p className="mb-4">เช็ครายการโปรโมชั่นและส่วนลดล่าสุดของเรา</p>
              <Button asChild><Link to="/promotions">ดูโปรโมชั่น</Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">ติดต่อเรา</h2>
              <p className="mb-4">ค้นหาสถานที่ของเราและติดต่อเราได้ที่นี่</p>
              <Button asChild><Link to="/contact">ติดต่อ</Link></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
