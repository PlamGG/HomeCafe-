import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { promotions } from "../data/cafeData"; 
const Promotions = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">โปรโมชั่น</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map((promo, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{promo.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{promo.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Promotions;
