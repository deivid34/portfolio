import React from 'react'
import { Container, Content } from './styles'
import { FaTimes, FaHome, FaUserAlt, FaWhatsapp } from 'react-icons/fa'
import { SidebarItem } from '../SidebarItem'
import { Link } from 'react-router-dom'
import { GrProjects, GrCertificate } from 'react-icons/gr'
import { GoRepo } from 'react-icons/go'
import { MdOutlineFeedback } from 'react-icons/md'

export const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link to="/" onClick={closeSidebar}>
          <SidebarItem Icon={FaHome} Text="principal" />
        </Link>
        <Link to="/about" onClick={closeSidebar}>
          <SidebarItem Icon={FaUserAlt} Text="sobre mim" />
        </Link>
        <Link to="/projects" onClick={closeSidebar}>
          <SidebarItem Icon={GrProjects} Text="projetos" />
        </Link>
        <Link to="/contact" onClick={closeSidebar}>
          <SidebarItem Icon={FaWhatsapp} Text="contrate-me" />
        </Link>
        <Link to="/repositories" onClick={closeSidebar}>
          <SidebarItem Icon={GoRepo} Text="repositorios" />
        </Link>
        <Link to="/certificate" onClick={closeSidebar}>
          <SidebarItem Icon={GrCertificate} Text="certificado" />
        </Link>
        <Link to="/feedback" onClick={closeSidebar}>
          <SidebarItem Icon={MdOutlineFeedback} Text="análise" />
        </Link>
      </Content>
    </Container>
  )
}
