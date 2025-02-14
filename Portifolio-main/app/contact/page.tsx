import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          Get in <span className="text-[#00ffdd] text-glow">Touch</span>
        </h1>

        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label  htmlFor="name" className="text-sm, text-white">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-zinc-800 border-zinc-700" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm, text-white">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="bg-zinc-800 border-zinc-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm, text-white">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" className="bg-zinc-800 border-zinc-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm, text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-zinc-800 border-zinc-700 min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-[#00ffdd] text-black hover:bg-[#00ffdd]/90">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-zinc-800">
                <Mail className="w-5 h-5 text-[#00ffdd]" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-400">gabrielalmeida0898p2p@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-zinc-800">
                <Phone className="w-5 h-5 text-[#00ffdd]" />
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-sm text-gray-400">+1 (555) 000-0000</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-zinc-800">
                <MapPin className="w-5 h-5 text-[#00ffdd]" />
              </div>
              <div>
                <div className="font-semibold">Location</div>
                <div className="text-sm text-gray-400">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

