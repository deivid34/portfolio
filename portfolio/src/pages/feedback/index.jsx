import { Container, Form } from './styles'

import { useState, useEffect } from 'react'
import { Post } from '../../components/post/Post'
import { Frame } from '../../components/frame/Frame'
import { Appbar } from '../../components/Appbar'
import { api } from '../../services'

export const Feedback = () => {
  const [posts, setPosts] = useState([])
  const [inputValue, setInputValue] = useState('')

  const getPostsFromApi = async () => {
    try {
      const { data } = await api.get('/posts?_sort=publishedAt&_order=desc')
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  const getInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const extrairHashtags = (texto) => {
    const regexHashtag = /#[a-zA-Z0-9_]+/g
    return texto.match(regexHashtag) || []
  }

  const extrairSemHashtags = (texto) => {
    const regexHashtag = /#[a-zA-Z0-9_]+/g
    const partesSemHashtags = texto.split(regexHashtag)
    return partesSemHashtags.filter(Boolean)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const hashtags = extrairHashtags(inputValue)
    const whithoutHash = extrairSemHashtags(inputValue)

    const links = hashtags.map((item) => ({ type: 'link', content: item }))
    const paragraphs = whithoutHash.map((item) => ({
      type: 'paragraph',
      content: item,
    }))

    const payload = {
      author: {
        avatarUrl: 'https://github.com/deivid34.png',
        name: 'deivid',
        role: 'Fullstack Developer',
      },
      publishedAt: new Date().toISOString(),
      content: [...paragraphs, ...links],
    }

    try {
      await api.post('/posts', payload)
      setInputValue('')
      getPostsFromApi()
    } catch (error) {
      console.error('Error posting feedback:', error)
    }
  }

  useEffect(() => {
    getPostsFromApi()
  }, [])

  return (
    <div>
      <Appbar />
      <Container>
        <Frame />

        <main>
          <Form onSubmit={handleSubmit}>
            <strong>Deixe seu feedback</strong>

            <textarea
              name="post"
              placeholder="De sua Opinião sobre meu trabalho"
              value={inputValue}
              onChange={getInputValue}
            />

            <footer>
              <button type="submit">Publicar</button>
            </footer>
          </Form>

          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              postId={post.id}
            />
          ))}
        </main>
      </Container>
    </div>
  )
}
