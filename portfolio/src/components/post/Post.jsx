/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../avatar/Avatar'
import { api } from '../../services'

import { Author, Article, Header, Content } from './styles'

export function Post(props) {
  const { author, content, publishedAt, postId } = props

  const [setComments] = useState([])

  const publishedAtFormated = format(publishedAt, "d 'de' LLLL 'de' yyyy", {
    locale: ptBR,
  })

  const distanceFromNowFormated = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const getComments = async () => {
    const { data } = await api.get(
      `/comments?postId=${postId}&_sort=createdAt&_order=desc`,
    )
    setComments(data)
  }

  useEffect(() => {
    getComments()
  }, [])

  return (
    <Article>
      <Header>
        <Author test={true}>
          <Avatar hasBorder={true} src={author.avatarUrl} />

          <div>
            <strong>{author.name}</strong>
          </div>
        </Author>

        <time title={publishedAtFormated} dateTime="2024-05-14 08:00:00">
          {distanceFromNowFormated}
        </time>
      </Header>

      <Content>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={Math.random()}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={Math.random()}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </Content>
    </Article>
  )
}
