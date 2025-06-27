"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Leaf, Shield, CheckCircle, Globe, TrendingUp, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export default function CarbonCreditLanding() {
  const [selectedProject, setSelectedProject] = useState("forest-restoration")
  const [selectedDuration, setSelectedDuration] = useState("30")
  const [autoRenewal, setAutoRenewal] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: "forest-restoration",
      name: "Forest Restoration Thailand",
      location: "Northern Thailand",
      country: "🇹🇭",
      impact: "31 kg CO₂/day",
      certification: "Gold Standard",
    },
    {
      id: "mangrove-restoration",
      name: "Mangrove Restoration",
      location: "Coastal Thailand",
      country: "🇹🇭",
      impact: "28 kg CO₂/day",
      certification: "VCS Verified",
    },
    {
      id: "renewable-energy",
      name: "Solar Energy Project",
      location: "Brandenburg, Germany",
      country: "🇩🇪",
      impact: "35 kg CO₂/day",
      certification: "CDM Certified",
    },
  ]

  const durations = [
    { days: "7", price: 89, co2: 72, label: "1 Week" },
    { days: "30", price: 299, co2: 310, label: "1 Month", popular: true },
    { days: "90", price: 799, co2: 930, label: "3 Months" },
  ]

  const selectedPrice = durations.find((d) => d.days === selectedDuration)?.price || 299
  const selectedCO2 = durations.find((d) => d.days === selectedDuration)?.co2 || 310

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Header */}
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

      {/* Minimal Hero */}
      <section
        className={`bg-gradient-to-br from-emerald-600 to-green-700 px-4 py-16 text-white transition-all duration-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Offset Your Carbon Footprint</h1>
          <p className="text-emerald-100 mb-8">Choose verified projects that make a real impact</p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold">2.4M+</div>
                <div className="text-xs text-emerald-200 flex items-center justify-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Tons Offset
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">850K+</div>
                <div className="text-xs text-emerald-200 flex items-center justify-center gap-1">
                  <Globe className="h-3 w-3" />
                  Trees Protected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-8 max-w-md mx-auto space-y-8">
        {/* Project Selection */}
        <Card
          className={`p-6 border-0 shadow-lg transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Project</h2>

          <RadioGroup value={selectedProject} onValueChange={setSelectedProject} className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <RadioGroupItem value={project.id} id={project.id} className="sr-only" />
                <Label
                  htmlFor={project.id}
                  className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedProject === project.id
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{project.country}</span>
                      <div>
                        <div className="font-medium text-gray-900">{project.name}</div>
                        <div className="text-sm text-gray-500">{project.location}</div>
                      </div>
                    </div>
                    {selectedProject === project.id && <CheckCircle className="h-5 w-5 text-emerald-600" />}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-emerald-700 border-emerald-200">
                      {project.certification}
                    </Badge>
                    <span className="text-sm font-medium text-emerald-600">{project.impact}</span>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Card>

        {/* Duration Selection */}
        <Card
          className={`p-6 border-0 shadow-lg transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Choose Duration</h2>

          <RadioGroup value={selectedDuration} onValueChange={setSelectedDuration}>
            <div className="space-y-3">
              {durations.map((duration) => (
                <div key={duration.days} className="relative">
                  {duration.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 z-10">
                      Popular
                    </Badge>
                  )}
                  <RadioGroupItem value={duration.days} id={`duration-${duration.days}`} className="sr-only" />
                  <Label
                    htmlFor={`duration-${duration.days}`}
                    className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedDuration === duration.days
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 hover:border-emerald-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{duration.label}</div>
                        <div className="text-sm text-gray-500">{duration.co2} kg CO₂ offset</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-700">฿{duration.price}</div>
                        <div className="text-xs text-gray-500">
                          ฿{Math.round(duration.price / Number.parseInt(duration.days))}/day
                        </div>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </Card>

        {/* Auto-renewal */}
        <Card
          className={`p-6 border-0 shadow-lg transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "700ms" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">Auto-renewal</h3>
              <p className="text-sm text-gray-500">Maintain consistent impact</p>
            </div>
            <Switch
              checked={autoRenewal}
              onCheckedChange={setAutoRenewal}
              className="data-[state=checked]:bg-emerald-600"
            />
          </div>
        </Card>

        {/* Payment */}
        <Card
          className={`p-6 border-0 shadow-lg transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "900ms" }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment</h2>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-blue-900">PaySolution</div>
                <div className="text-sm text-blue-600">Secure payment gateway</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-700">
              <Lock className="h-4 w-4" />
              <span>Bank-grade security • SSL encrypted</span>
            </div>
          </div>
        </Card>

        {/* Order Summary */}
        <Card
          className={`p-6 border-0 shadow-lg bg-emerald-50 border-emerald-200 transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ animationDelay: "1100ms" }}
        >
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">Summary</h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">CO₂ Offset</span>
              <span className="font-medium">{selectedCO2} kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration</span>
              <span className="font-medium">{durations.find((d) => d.days === selectedDuration)?.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Auto-renewal</span>
              <span className="font-medium">{autoRenewal ? "Yes" : "No"}</span>
            </div>
            <div className="border-t border-emerald-200 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-emerald-700">฿{selectedPrice}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="rounded border-emerald-300 text-emerald-600" defaultChecked />
            <span>I agree to the terms and conditions</span>
          </div>
        </Card>
      </div>

      {/* Purchase Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto">
          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              console.log("Processing payment...")
            }}
          >
            Complete Purchase - ฿{selectedPrice}
          </Button>
          <div className="text-center mt-2 text-xs text-gray-500">🔒 Secure payment • 30-day guarantee</div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-24" />
    </div>
  )
}
