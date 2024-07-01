import { Container, Content, Form } from './styles'
import { Appbar } from '../../components/Appbar'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

export const Contact = () => {
  return (
    <Container>
      <Appbar />
      <Content>
        <Form>
          <h1>Contrate-me</h1>
          <Input placeholder="Digite seu nome" />
          <Input placeholder="Digite seu email" />
          <Input placeholder="Digite seu numero" />
          <Input placeholder="Digite sua mensagem" />
          <Button>Envie</Button>
        </Form>
      </Content>
    </Container>
  )
}
