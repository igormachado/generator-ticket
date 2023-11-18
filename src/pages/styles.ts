import styled from 'styled-components'
import backgroundImg from '../assets/section-hero.svg'

export const Container = styled.body`
  display: flex;
  padding: 100px;
  margin-left: 40px;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background: url(${backgroundImg}) no-repeat;
`
