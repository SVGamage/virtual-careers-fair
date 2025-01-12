"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CompanyRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/register?type=company")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300">Redirecting...</p>
      </div>
    </div>
  )
}