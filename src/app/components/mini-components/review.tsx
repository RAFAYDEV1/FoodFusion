'use client'

import { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"
import Marquee from "@/components/ui/marquee"

import { createClient } from 'next-sanity'
import Image from 'next/image'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-12-10',
  useCdn: false,
})

type Review = {
  _id: string
  name: string
  username: string
  body: string
}

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image 
          src="https://avatar.vercel.sh/ali"
          alt={name}
          width={32}
          height={32}
          className="rounded-full"
        />

        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white tracking-widest">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40 font-mono pl-4">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    client
      .fetch(`*[_type == "review"] | order(_createdAt desc)`)
      .then((data) => setReviews(data))
      .catch(console.error)
  }, [])

  const firstRow = reviews.slice(0, reviews.length / 2)
  const secondRow = reviews.slice(reviews.length / 2)

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard
            key={review._id}
            name={review.name}
            username={review.username}
            body={review.body}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:10s]">
        {secondRow.map((review) => (
          <ReviewCard
            key={review._id}
            name={review.name}
            username={review.username}
            body={review.body}
          />
        ))}
      </Marquee>
    </div>
  )
}
