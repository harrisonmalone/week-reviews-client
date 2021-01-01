import { Routes } from './Routes'
import { Container } from "../styles/Home";
import { Link } from 'react-router-dom'
import { PostsProvider } from '../context/PostsContext'
import 'highlight.js/styles/github.css';

export function App() {
  return (
    <PostsProvider>
      <Container>
        <h1>
          <Link to="/">hmalone</Link>
        </h1>
        <Routes />
      </Container>
    </PostsProvider>
  );
}
