import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '../../components/button'
import { Container, Content, Form, RepoCard } from './styles'

export const GitHubRepos = () => {
  const [repos, setRepos] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const handleView = async () => {
    if (!isVisible) {
      try {
        const response = await axios.get(
          `https://api.github.com/users/deivid34/repos`,
        )
        setRepos(response.data)
      } catch (error) {
        console.error('Error fetching repos:', error)
      }
    }
    setIsVisible(!isVisible)
  }

  return (
    <Container>
      <Content>
        <h1>Repositorios</h1>
        <Button onClick={handleView}>
          {isVisible ? 'Fechar' : 'Visualizar'}
        </Button>
        {isVisible && (
          <Form>
            {repos.map((repo) => (
              <RepoCard key={repo.id}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </RepoCard>
            ))}
          </Form>
        )}
      </Content>
    </Container>
  )
}
