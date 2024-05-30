import React from 'react'
import { Container, Content } from './styles'
import { FaTimes, FaHome, FaUserAlt } from 'react-icons/fa'
import { SidebarItem } from '../SidebarItem'

export const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="principal" />
        <SidebarItem Icon={FaUserAlt} Text="sobre mim" />
      </Content>
    </Container>
  )
}
