import { createFileRoute } from '@tanstack/react-router'
import ViewWrapper from '../components/ViewWrapper'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <ViewWrapper>About</ViewWrapper>
}