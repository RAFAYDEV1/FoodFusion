"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { createClient } from "next-sanity";
import { Button } from "@/components/ui/button";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-12-10",
  useCdn: false,
});

type MenuItem = {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
};

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "menuItem" && defined(image.asset->url)] | order(_createdAt desc) { 
        _id, 
        name, 
        "imageUrl": image.asset->url, 
        description, 
        price 
      }`)
      .then((data) => setMenuItems(data))
      .catch(console.error);
  }, []);

  return (
    <section className="h-full">
      <h1 className="text-center text-6xl mt-4 mb-8">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {menuItems.map((item) => (
          <Card key={item._id} className="shadow-lg">
            {item.imageUrl ? (
              <Image
                src={item.imageUrl}
                alt={item.name || 'Image not available'}
                width={300}
                height={200}
                className="rounded-t-lg w-full h-52 object-cover"
              />
            ) : (
              <Image
                src="/images/placeholder.jpg"
                alt="Image not available"
                width={300}
                height={200}
                className="rounded-t-lg w-full h-52 object-cover"
              />
            )}
            <CardHeader>
              <CardTitle className="text-xl font-bold">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-md text-gray-600">{item.description}</p>
              <p className="mt-2 font-bold text-green-600">
                {item.price.toFixed(2)}<span className="text-sm p-4">Rupees</span>
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
