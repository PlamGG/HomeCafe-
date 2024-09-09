import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">ติดต่อเรา</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">ที่ตั้งของเรา</h2>
            <p className="mb-2">123 ถนนกาแฟ</p>
            <p className="mb-2">กรุงเทพฯ, 12345</p>
            <p className="mb-4">เปิดทุกวัน: 07:00 - 20:00 น.</p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5647.221245455828!2d100.53156898028554!3d13.741254590047579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d4d783b23b9%3A0x2b8a5e4173fc09e7!2sChulalongkorn%20University%2C%20Phayathai%2C%20Bangkok%2C%20Thailand!5e0!3m2!1sen!2s!4v1630841015423!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">ติดต่อเรา</h2>
            <form>
              <div className="mb-4">
                <Input type="text" placeholder="ชื่อของคุณ" required />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="อีเมลของคุณ" required />
              </div>
              <div className="mb-4">
                <Textarea placeholder="ข้อความของคุณ" required />
              </div>
              <Button type="submit">ส่งข้อความ</Button>
            </form>
            <div className="mt-6">
              <p className="mb-2">โทรศัพท์: (123) 456-7890</p>
              <p className="mb-2">อีเมล: info@homecafe.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
                <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;
