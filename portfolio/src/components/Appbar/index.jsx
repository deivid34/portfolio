import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from '../Sidebar'

export const Appbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSidebar} />
      <h1>Portfolio</h1>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}
