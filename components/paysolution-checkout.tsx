"use client"

import { useState } from "react"
import { ArrowLeft, Shield, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PaySolutionCheckoutProps {
  amount: number
  onSuccess: () => void
  onCancel: () => void
}

export function PaySolutionCheckout({ amount, onSuccess, onCancel }: PaySolutionCheckoutProps) {
  const [loading, setLoading] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState("credit-card")

  const handlePayment = async () => {
    setLoading(true)
    // Mock payment processing
    setTimeout(() => {
      setLoading(false)
      onSuccess()
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <button onClick={onCancel}>
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <h1 className="text-lg font-medium">PaySolution</h1>
        <div className="w-6" />
      </div>

      {/* Security Banner */}
      <div className="bg-green-600 text-white px-4 py-2 flex items-center gap-2">
        <Shield className="h-4 w-4" />
        <span className="text-sm">Secure Payment - SSL Protected</span>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Order Summary */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Order Summary</h3>
          <div className="flex justify-between items-center">
            <span>Carbon Credit Purchase</span>
            <span className="font-bold text-lg">฿{amount}</span>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Select Payment Method</h3>

          <div className="space-y-3">
            {/* Credit Card */}
            <button
              onClick={() => setSelectedMethod("credit-card")}
              className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                selectedMethod === "credit-card" ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5" />
                <span className="font-medium">Credit/Debit Card</span>
              </div>
            </button>

            {/* PromptPay */}
            <button
              onClick={() => setSelectedMethod("promptpay")}
              className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                selectedMethod === "promptpay" ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                <span className="font-medium">PromptPay</span>
              </div>
            </button>

            {/* TrueMoney */}
            <button
              onClick={() => setSelectedMethod("truemoney")}
              className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                selectedMethod === "truemoney" ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-orange-500 rounded"></div>
                <span className="font-medium">TrueMoney Wallet</span>
              </div>
            </button>
          </div>
        </Card>

        {/* Payment Form */}
        {selectedMethod === "credit-card" && (
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Card Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" className="mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="cardholder">Cardholder Name</Label>
                <Input id="cardholder" placeholder="John Doe" className="mt-1" />
              </div>
            </div>
          </Card>
        )}

        {selectedMethod === "promptpay" && (
          <Card className="p-4 text-center">
            <h3 className="font-semibold mb-4">PromptPay QR Code</h3>
            <div className="w-48 h-48 bg-gray-200 mx-auto rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-500">QR Code</span>
            </div>
            <p className="text-sm text-gray-600">Scan this QR code with your banking app to pay ฿{amount}</p>
          </Card>
        )}

        {selectedMethod === "truemoney" && (
          <Card className="p-4">
            <h3 className="font-semibold mb-4">TrueMoney Wallet</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="08X-XXX-XXXX" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="pin">PIN</Label>
                <Input id="pin" type="password" placeholder="Enter your PIN" className="mt-1" />
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Pay Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-full"
        >
          {loading ? "Processing..." : `Pay ฿${amount}`}
        </Button>
        <div className="text-center mt-2 text-xs text-gray-500">Powered by PaySolution • Secure Payment Gateway</div>
      </div>

      {/* Bottom padding for fixed button */}
      <div className="h-20" />
    </div>
  )
}
