import { Image } from './styles'

export function Avatar({ src = false }) {
  return <Image src={src} alt="" />
}
