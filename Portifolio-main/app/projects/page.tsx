import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "The Movie Guide",
    description: "A modern movie information platform with real-time updates and search capabilities",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JLzx913SKJoRRafbUUUmVecTiBLMx0.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "#",
  },
  {
    id: 2,
    title: "Daily Weather",
    description: "Clean and intuitive weather application with detailed forecasts",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "#",
  },
  {
    id: 3,
    title: "Calculadora do Windows 10",
    description: "Precise recreation of the Windows 10 calculator with full functionality",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "#",
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <h1 className="mb-12 text-4xl font-bold text-white">
          My <span className="text-[#00ffdd] text-glow">Projects</span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.id} href={project.link}>
              <Card className="group relative aspect-[4/3] overflow-hidden border-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="mb-2 text-2xl font-bold text-white">{project.title}</h2>
                  <p className="mb-4 text-sm text-gray-300">{project.description}</p>
                  <div className="flex gap-3">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/80 p-1.5"
                      >
                        <TechIcon name={tech} />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

function TechIcon({ name }: { name: string }) {
  switch (name) {
    case "HTML5":
      return (
        <svg viewBox="0 0 24 24" className="text-[#E34F26] fill-current">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      )
    case "CSS3":
      return (
        <svg viewBox="0 0 24 24" className="text-[#1572B6] fill-current">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      )
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" className="text-[#F7DF1E] fill-current">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      )
    case "Bootstrap":
      return (
        <svg viewBox="0 0 24 24" className="text-[#7952B3] fill-current">
          <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
        </svg>
      )
    default:
      return null
  }
}

