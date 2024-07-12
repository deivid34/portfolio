import React, { useState } from 'react'
import { api } from '../../api'
import { Container, Content, Form, Input, Button } from './styles'
import { IoMdClose } from 'react-icons/io'

export const Login = ({ onLoginSuccess, onClose }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage('Preencha ambos os campos')
      return
    }

    setLoading(true)
    try {
      const response = await api.post('/auth/login', { username, password })
      setMessage(`Logado com successo! Token: ${response.data.Token}`)
      onLoginSuccess()
    } catch (error) {
      setMessage('Login falhou! Precisa colocar nome e senha')
    }
    setLoading(false)
  }

  const handleRegister = async () => {
    if (!username || !password) {
      setMessage('Preencha ambos os campos')
      return
    }

    setLoading(true)
    try {
      await api.post('/auth/register', { username, password })
      setMessage('Registrado com sucesso! Voce pode logar.')
    } catch (error) {
      setMessage('Registro falho!')
    }
    setLoading(false)
  }

  return (
    <Container>
      <Content>
        <Form>
          <IoMdClose
            size={25}
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          />
          <h1>{'Login'}</h1>
          <Input
            type="text"
            placeholder="Nome"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={loading}>
            {loading ? 'Logando...' : 'Login'}
          </Button>
          <Button onClick={handleRegister}>{'Criar uma conta'}</Button>
          {message && <p>{message}</p>}
        </Form>
      </Content>
    </Container>
  )
}
