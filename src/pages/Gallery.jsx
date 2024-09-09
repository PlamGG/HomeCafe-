import React from 'react';
import { galleryImages } from "../data/cafeData"; // ดึงข้อมูลจากไฟล์ data
import Layout from '../components/Layout';

const Gallery = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">แกลเลอรี</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Gallery;
