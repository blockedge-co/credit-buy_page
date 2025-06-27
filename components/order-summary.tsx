
"use client"

import { Card } from "@/components/ui/card"

interface OrderSummaryProps {
  selectedCO2: number;
  selectedDurationLabel: string;
  autoRenewal: boolean;
  selectedPrice: number;
  isLoaded: boolean;
}

export function OrderSummary({
  selectedCO2,
  selectedDurationLabel,
  autoRenewal,
  selectedPrice,
  isLoaded,
}: OrderSummaryProps) {
  return (
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
          <span className="font-medium">{selectedDurationLabel}</span>
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
  )
}
