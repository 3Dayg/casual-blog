import { createFileRoute } from '@tanstack/react-router'
import ViewWrapper from '../components/ViewWrapper'
import Contact from '../pages/Contact'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <Contact />
}