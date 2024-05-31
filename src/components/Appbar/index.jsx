import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from '../Sidebar'
import(
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'
)

export const Appbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      <h1>seja bem vindo ao meu portfolio</h1>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}
