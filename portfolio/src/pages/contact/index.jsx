import { Container, Content, Form } from './styles'
import { Appbar } from '../../components/Appbar'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [number, setNumber] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || number === '' || message === '') {
      toast.error('Preencha todos os campos')
      return
    }

    const templateParams = {
      from_name: name,
      message,
      email,
      number,
    }

    emailjs
      .send(
        'service_urk268o',
        'template_6rnbqo6',
        templateParams,
        'IE8Uz4yy9nkuV1jds',
      )
      .then(
        (response) => {
          console.log('EMAIL ENVIADO', response.status, response.text)
          setName('')
          setEmail('')
          setNumber('')
          setMessage('')
          toast.success('Email enviado com sucesso!')
        },
        (err) => {
          console.log('ERRO: ', err)
          toast.error('Erro ao enviar email')
        },
      )
  }

  return (
    <Container>
      <Appbar />
      <Content>
        <Form onSubmit={sendEmail}>
          <h1>Contrate-me</h1>
          <Input
            placeholder="Digite seu nome"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            placeholder="Digite seu email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="Digite seu número"
            type="tel"
            name="number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
          <Input
            placeholder="Digite sua mensagem"
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <Button type="submit" value="Enviar">
            Envie
          </Button>
        </Form>
      </Content>
    </Container>
  )
}
