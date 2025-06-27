
"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface GoogleReview {
  author: string;
  rating: number;
  comment: string;
  link: string;
}

interface GoogleReviewsProps {
  isLoaded: boolean;
}

export function GoogleReviews({ isLoaded }: GoogleReviewsProps) {
  const reviews: GoogleReview[] = [
    {
      author: "John Doe",
      rating: 5,
      comment: "Great initiative! Easy to use and transparent.",
      link: "https://g.page/r/CR3unGfg4PLtEBM/review",
    },
    {
      author: "Jane Smith",
      rating: 4,
      comment: "Good platform, helped me offset my travel emissions.",
      link: "https://g.page/r/CR3unGfg4PLtEBM/review",
    },
    {
      author: "Peter Jones",
      rating: 5,
      comment: "Highly recommend! Making a real difference.",
      link: "https://g.page/r/CR3unGfg4PLtEBM/review",
    },
  ]

  return (
    <Card
      className={`p-6 border-0 shadow-lg transition-all duration-700 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ animationDelay: "1300ms" }}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">What Our Users Say</h2>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-center mb-2">
              <div className="font-semibold text-gray-900 mr-2">{review.author}</div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              View on Google
            </a>
          </div>
        ))}
      </div>
    </Card>
  )
}
