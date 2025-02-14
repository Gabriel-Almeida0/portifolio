import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold">
              Hi, It's <span className="text-[#00ffdd] text-glow">Gabriel</span>

            </h1>
            <h2 className="text-2xl text-gray-400 animate-typing  ">
              I'm a <span className="text-[#00ffdd] text-glow ">Full Stack Developer</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md">
          Hi, I'm Gabriel, a Full Stack Developer. I have experience in various technologies and am always looking for new challenges. Let's talk about how I can help your company!
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/Gabriel-Almeida0" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-400 hover:text-[#00ffdd]" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-[#00ffdd]" />
            </Link>
            <Link href="https://www.linkedin.com/in/gabriel-almeida-695b9933b/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-[#00ffdd]" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-[#00ffdd]" />
            </Link>
          </div>
          <div className="flex gap-4">
          <Button className="bg-[#00ffdd] text-black hover:bg-[#00ffdd]/90 hover:scale-105 hover:shadow-lg transition-all duration-300">Hire</Button>
          <Button className="bg-[#00ffdd] text-black hover:bg-[#00ffdd]/90 hover:scale-105 hover:shadow-lg transition-all duration-300"><Link href={"mailto:email@provedor.com.br?subject=Assunto do email&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Conteúdo do email que será preenchido automaticamente"}>Contact</Link></Button>

          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full bg-[#00ffdd]/20 blur-3xl"></div>
          <img
            src="perfil.png"
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </main>
  )
}

