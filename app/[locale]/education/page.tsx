import { GraduationCap, Award, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslations } from 'next-intl';

export default function Education() {
  const t = useTranslations('Education');

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          <span className="text-[#00ffdd] text-glow">{t('title')}</span>
        </h1>

        <div className="grid gap-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">{t('degree')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{t('university')} | {t('status')}</p>
              <p className="mt-2 text-gray-300">{t('description')}</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">{t('interests.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{t('interests.areas')}</p>
              <p className="mt-2 text-gray-300">{t('interests.description')}</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00ffdd]" />
                <span className="text-white">{t('certifications.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-300">
              <p>• {t('certifications.cert1')}</p>
              <p>• {t('certifications.cert2')}</p>
              <p>• {t('certifications.cert3')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
} 