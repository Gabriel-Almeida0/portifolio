import { Palette, Code, Lightbulb, Smartphone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          My <span className="text-[#00ffdd] text-glow">Services</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">UI Design</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Creating beautiful, intuitive interfaces that delight users and achieve business goals
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">Frontend Development</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Building responsive, performant websites using modern web technologies</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">Mobile Design</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Designing mobile-first experiences that work seamlessly across devices</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">UX Consulting</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Providing expert guidance on user experience and interaction design</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

