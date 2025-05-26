import { createFileRoute } from '@tanstack/react-router'
import ViewWrapper from '../components/ViewWrapper'
import Home from '../pages/Home'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
      <Home />
  )
}