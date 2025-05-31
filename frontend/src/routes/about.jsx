import { createFileRoute } from '@tanstack/react-router'
import View from '../components/layout/View/View';

function About() {
  return (
    <View>
      <div>
        <h1>About Us</h1>
        <p>We are a company dedicated to providing the best service possible.</p>
        <p>Our team is made up of experienced professionals who are passionate about their work.</p>
        <p>Contact us for more information!</p>
      </div>
    </View>
  );
}

export const Route = createFileRoute('/about')({
  component: About,
})

