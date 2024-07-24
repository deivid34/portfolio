import { PencilLine } from 'phosphor-react'
import { Aside, Image, Footer } from './styles'
import { Avatar } from '../avatar/Avatar'

export function Frame() {
  return (
    <Aside>
      <Image
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div>
        <Avatar hasBorder src="https://github.com/robighetti.png" />

        <strong>Rodrigo Bighetti</strong>
      </div>

      <Footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </Footer>
    </Aside>
  )
}
