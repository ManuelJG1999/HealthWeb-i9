"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, Check } from "lucide-react"

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(true)
      setIsConnecting(false)
    }, 2000)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
  }

  if (isConnected) {
    return (
      <Button variant="outline" onClick={handleDisconnect} className="flex items-center gap-2 bg-transparent">
        <Check className="h-4 w-4" />
        <span className="hidden sm:inline">Wallet Connected</span>
        <span className="sm:hidden">Connected</span>
      </Button>
    )
  }

  return (
    <Button onClick={handleConnect} disabled={isConnecting} className="flex items-center gap-2">
      <Wallet className="h-4 w-4" />
      <span className="hidden sm:inline">{isConnecting ? "Connecting..." : "Connect Wallet"}</span>
      <span className="sm:hidden">{isConnecting ? "Connecting..." : "Connect"}</span>
    </Button>
  )
}
