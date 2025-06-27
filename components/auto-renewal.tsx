
"use client"

import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

interface AutoRenewalProps {
  autoRenewal: boolean;
  setAutoRenewal: (checked: boolean) => void;
  isLoaded: boolean;
}

export function AutoRenewal({
  autoRenewal,
  setAutoRenewal,
  isLoaded,
}: AutoRenewalProps) {
  return (
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
  )
}
