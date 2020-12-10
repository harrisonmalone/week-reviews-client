import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export const Weeks = styled.div`
  p {
    a {
      margin-right: 5px;
    }
  }
`

export const AboutMe = styled.div`
  border: 1px solid black;
  padding: 0px 30px;
` 

export const MyLink = styled(Link)`
  margin-right: 10px;
`