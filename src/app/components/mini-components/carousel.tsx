'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { createClient } from 'next-sanity'
import Image from "next/image"

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: 'production',
  apiVersion: '2023-12-10', 
  useCdn: false, 
})

// Updated type for Top Selling Item
type TopSellingItem = {
  _id: string
  imageUrl: string // Now we directly get the image URL
  name: string
}

export function CarouselPlugin() {
  const [topSellingItems, setTopSellingItems] = React.useState<TopSellingItem[]>([])

  React.useEffect(() => {
    client
      .fetch(`*[_type == "topSellingItem"] | order(_createdAt desc) { _id, "imageUrl": image.asset->url, name }`)
      .then((data) => {
        console.log('Top Selling Items:', data) // ✅ Check if imageUrl is being returned correctly
        setTopSellingItems(data)
      })
      .catch(console.error)
  }, [])

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="overflow-x-hidden w-full justify-center"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => {
        setTimeout(() => {
          plugin.current.play()
        }, 500)
      }}
    >
      <CarouselContent>
        {topSellingItems.map((item, index) => (
          <CarouselItem key={item._id}>
            <div>
              <Card className="border-0 shadow-none">
                <CardContent className="flex-col h-[80vh] items-center justify-center p-0 relative">
                  <Image 
                    src={item.imageUrl} 
                    alt={`Top Selling Item ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white text-left text-4xl">{item.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
