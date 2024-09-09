import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CafeAmbiance = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Our Ambiance</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Experience the cozy atmosphere of our Home Cafe, where comfort meets great coffee.
        </p>
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Cafe interior"
          className="w-full h-64 object-cover rounded-md"
        />
      </CardContent>
    </Card>
  );
};

export default CafeAmbiance;