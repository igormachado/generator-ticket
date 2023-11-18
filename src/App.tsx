import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'

function App() {
  // async function showAvatar() {
  //   const response = await fetch('https://api.github.com/users/igormachado')
  //   const user = await response.json()

  //   if (!user.name) {
  //     console.log('User does not exits')
  //   } else {
  //     console.log({ name: user.name, updatedAt: user.updated_at })
  //   }
  // }

  // useEffect(() => {
  //   showAvatar()
  // }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
