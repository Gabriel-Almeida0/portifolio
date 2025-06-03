import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          Client <span className="text-[#00ffdd] text-glow">Testimonials</span>
        </h1>

        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Client Name</div>
                    <div className="text-sm text-gray-400">Company Position</div>
                  </div>
                  <div className="flex ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#00ffdd] fill-[#00ffdd]" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  "Working with Almeida was an absolute pleasure. Her attention to detail and creative approach to
                  problem-solving resulted in a website that exceeded our expectations. She was professional,
                  responsive, and delivered the project on time and within budget."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

