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
import { Skeleton } from "@/components/ui/skeleton"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-12-10',
  useCdn: false,
})

type TopSellingItem = {
  _id: string
  imageUrl: string
  name: string
}

export function CarouselPlugin() {
  const [topSellingItems, setTopSellingItems] = React.useState<TopSellingItem[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    client
      .fetch(`*[_type == "topSellingItem"] | order(_createdAt desc) { _id, "imageUrl": image.asset->url, name }`)
      .then((data) => {
        console.log('Top Selling Items:', data)
        setTopSellingItems(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
  }, [])

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  if (isLoading) {
    return (
      <div className="w-full h-[80vh]">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>
    )
  }

  if (!topSellingItems.length) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center">
        <p className="text-lg text-gray-500">No top-selling items available.</p>
      </div>
    )
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className="overflow-x-hidden w-full justify-center"
      onMouseEnter={() => {
        if (plugin.current) {
          plugin.current.stop()
        }
      }}
      onMouseLeave={() => {
        if (plugin.current) {
          plugin.current.play()
        }
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
                    width={1920}
                    height={1280}
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
