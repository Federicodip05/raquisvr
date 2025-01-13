import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  { name: "Dr. María González", role: "Cirujana Ortopédica", text: "RaquisVR ha revolucionado la forma en que entrenamos a nuestros residentes. Es una herramienta invaluable." },
  { name: "Dr. Juan Pérez", role: "Neurocirujano", text: "La retroalimentación háptica de RaquisVR es increíblemente precisa. Me siento como si estuviera en una cirugía real." }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Lo que dicen los expertos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary">
              <CardContent className="p-6">
                <p className="mb-4 text-white">&quot;{testimonial.text}&quot;</p>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-white opacity-80">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

