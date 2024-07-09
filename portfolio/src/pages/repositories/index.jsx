import React from 'react'
import { GitHubRepos } from '../../hooks/axios'
import { Appbar } from '../../components/Appbar'
import { Container } from './styles'
export const Repositories = () => {
  return (
    <Container>
      <Appbar />
      <GitHubRepos />
    </Container>
  )
}
