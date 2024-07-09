import React, { useState } from 'react'
import { Container, Content, Form, Image, Overlay } from './styles'
import { Appbar } from '../../components/Appbar'
import troca from '../../assets/troca.png'
import { Login } from '../../components/login' // Importa o componente de login

export const Private = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState('')

  const handleImageClick = (url) => {
    if (loggedIn) {
      window.open(url, '_blank', 'noopener noreferrer')
    } else {
      setRedirectUrl(url)
      setShowLogin(true)
    }
  }

  const handleLoginSuccess = () => {
    setLoggedIn(true)
    setShowLogin(false)
    window.open(redirectUrl, '_blank', 'noopener noreferrer')
  }

  const handleCloseLogin = () => {
    setShowLogin(false)
  }

  return (
    <Container>
      <Appbar />
      <Content>
        <Form>
          <div>
            <h1>Privado</h1>
            <a
              href="#!"
              onClick={() =>
                handleImageClick('https://github.com/deivid34/troca_rapida')
              }
            >
              <Image src={troca} alt="troca" />
            </a>
          </div>
        </Form>
      </Content>
      {showLogin && (
        <Overlay>
          <Login
            onLoginSuccess={handleLoginSuccess}
            onClose={handleCloseLogin}
          />
        </Overlay>
      )}
    </Container>
  )
}
