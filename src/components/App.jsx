import { Routes } from './Routes'
import { Container } from "../styles/Home";
import { Link } from 'react-router-dom'
import { PostsProvider } from '../context/PostsContext'
import 'highlight.js/styles/github.css';

export function App() {
  return (
    <PostsProvider>
      <Container>
        <Routes />
      </Container>
    </PostsProvider>
  );
}
