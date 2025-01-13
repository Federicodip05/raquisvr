'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado', { name, email, message })
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent">Enviar mensaje</Button>
        </form>
      </div>
    </section>
  )
}

