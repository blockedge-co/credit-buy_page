
"use client"

import { ArrowLeft, Leaf, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface LandingHeaderProps {
  isLoaded: boolean;
}

export function LandingHeader({ isLoaded }: LandingHeaderProps) {
  return (
    <header
      className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-500 ${
        isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="px-4 py-4 flex items-center justify-between">
        <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-50" onClick={() => window.history.back()}>
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Button>
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-emerald-600" />
          <span className="font-semibold text-gray-900">Carbon Credits</span>
        </div>
        <Badge variant="outline" className="text-emerald-700 border-emerald-200">
          <Shield className="h-3 w-3 mr-1" />
          Verified
        </Badge>
      </div>
    </header>
  )
}
