import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Benefits({ benefits }: { benefits: string[] }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Benefits</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

