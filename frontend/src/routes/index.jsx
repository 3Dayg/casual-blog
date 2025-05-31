import { createFileRoute } from '@tanstack/react-router'
import View from '../components/layout/View/View'
import PostContainer from '../features/posts/components/PostContainer/PostContainer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Home() {
  return (
    <View>
      <PostContainer />
    </View>
  )
}

function Index() {
  return (
    <Home />
  )
}