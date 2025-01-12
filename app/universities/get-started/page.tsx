"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function UniversityRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/register?type=university")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300">Redirecting...</p>
      </div>
    </div>
  )
}