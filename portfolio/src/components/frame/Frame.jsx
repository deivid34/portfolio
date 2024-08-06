import { PencilLine } from 'phosphor-react'
import React, { useState } from 'react'
import { Aside, Image, Footer } from './styles'
import { Avatar } from '../avatar/Avatar'

export const Frame = ({ currentUser, onUpdateProfile }) => {
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatarUrl || '')

  const handleAvatarChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setAvatarUrl(reader.result)
        onUpdateProfile({ ...currentUser, avatarUrl: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Aside>
      <Image
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div>
        <Avatar
          hasBorder
          src={avatarUrl || 'https://github.com/deivid34.png'}
        />
        <h3>{currentUser?.name}</h3>
      </div>

      <Footer>
        <label>
          <h3>Escolher Perfil</h3>
          <PencilLine size={20} />
          <input
            id="fileInput"
            type="file"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </label>
      </Footer>
    </Aside>
  )
}
