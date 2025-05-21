import { createFileRoute } from '@tanstack/react-router'
import ViewWrapper from '../components/ViewWrapper'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
      <ViewWrapper>Home</ViewWrapper>
  )
}