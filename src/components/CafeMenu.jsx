import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  { name: "Thai Iced Coffee", price: "฿90" },
  { name: "Espresso", price: "฿75" },
  { name: "Coconut Latte", price: "฿110" },
  { name: "Iced Matcha Latte", price: "฿100" },
  { name: "Mango Sticky Rice Cake", price: "฿80" },
  { name: "Pandan Custard Bun", price: "฿75" },
  { name: "Iced Lemon Tea", price: "฿80" },
  { name: "Thai Tea Cake", price: "฿95" },
];

const CafeMenu = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Our Menu</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item.name}</span>
              <span className="font-semibold">{item.price}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CafeMenu;
