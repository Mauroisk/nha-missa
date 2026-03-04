import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

interface ParishCardProps {
  slug?: string
  image: string
  name: string
  city: string
  massTime: string
}

export function ParishCard({ slug, image, name, city, massTime }: ParishCardProps) {
  const content = (
    <Card className="group cursor-pointer overflow-hidden border-border transition-all hover:border-ring hover:shadow-lg h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {name}
        </h3>
        <div className="mt-3 flex flex-col gap-2">
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-ring" />
            {city}
          </span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 shrink-0 text-ring" />
            {massTime}
          </span>
        </div>
      </CardContent>
    </Card>
  )

  if (slug) {
    return <Link href={`/parishes/${slug}`} className="block">{content}</Link>
  }

  return content
}
