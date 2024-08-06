import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container, Content, Form, RepoCard } from './styles'

export const GitHubRepos = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/deivid34/repos`,
        )
        setRepos(response.data)
      } catch (error) {
        console.error('Error fetching repos:', error)
      }
    }
    fetchRepos()
  }, [])

  return (
    <Container>
      <Content>
        <h1>Repositorios</h1>

        <Form>
          {repos.map((repo) => (
            <RepoCard key={repo.id}>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </RepoCard>
          ))}
        </Form>
      </Content>
    </Container>
  )
}
