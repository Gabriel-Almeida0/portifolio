import { GraduationCap, Award, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          My <span className="text-[#00ffdd] text-glow">Education</span>
        </h1>

        <div className="grid gap-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">Master of Computer Science</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Stanford University | 2018 - 2020</p>
              <p className="mt-2, text-gray-300">Specialized in Human-Computer Interaction and User Interface Design</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">Bachelor of Design</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Rhode Island School of Design | 2014 - 2018</p>
              <p className="mt-2, text-gray-300">Focus on Digital Design and Interactive Media</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2, text-gray-300">
              <p>• Google UX Design Professional Certificate</p>
              <p>• Advanced Frontend Development - freeCodeCamp</p>
              <p>• UI/UX Design Specialization - Coursera</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

