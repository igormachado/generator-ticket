import {
  Article,
  Aside,
  Container,
  Content,
  Danger,
  DivArticle,
  DivHeader,
  FooterArticle,
  FormAside,
  Sucess,
} from './styles'
import githubImg from '../../assets/github.svg'
import testeImg from '../../assets/teste.svg'
import avatarImg from '../../assets/avatar.svg'
import sucessImg from '../../assets/sucess.svg'
import { useState } from 'react'

export function Card() {
  const [nameGithub, setNameGithub] = useState('')
  const [urlGithub, setUrlGithub] = useState('')
  const [userDoesNotExists, setUserDoesNotExists] = useState('')

  function addAvatarAndName(e) {
    setNameGithub(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setUserDoesNotExists('')
    setUrlGithub('')
  }

  async function handleAvatarAndName() {
    setNameGithub((state) => state)

    const response = await fetch(`https://api.github.com/users/${nameGithub}`)

    const userGithub = await response.json()

    if (!userGithub.name) {
      setUserDoesNotExists((state) => 'Usuário inválido.')
    } else {
      setUrlGithub(userGithub)
    }
    setNameGithub('')
  }

  return (
    <Container>
      <Content>
        <Aside>
          <h3>gere seu ticket e compartilhe com o mundo</h3>
          <div>
            <p>Digite seu usuário do GitHub</p>
            <FormAside onSubmit={handleSubmit}>
              <span>
                {/* verifica se o usuário do github existe. Se existir */}
                {userDoesNotExists.length < 0 ? (
                  ''
                ) : urlGithub.name ? (
                  <>
                    <img src={sucessImg} alt="" />
                    <Sucess>Ticket gerado com sucesso</Sucess>
                  </>
                ) : (
                  <>
                    <img src={githubImg} alt="" />

                    <input
                      type="text"
                      placeholder="Nome do usuário"
                      value={nameGithub}
                      onChange={addAvatarAndName}
                    />
                  </>
                )}
              </span>
              {userDoesNotExists.length > 0 ? (
                <>
                  <Danger>
                    Usuário inválido. Verifique e tente novamente.
                  </Danger>
                  <button onClick={handleAvatarAndName}>
                    Gerar seu ticket
                  </button>
                </>
              ) : urlGithub.name ? (
                <button>Fazer download</button>
              ) : (
                <button onClick={handleAvatarAndName}>Gerar seu ticket</button>
              )}
            </FormAside>
          </div>
        </Aside>
        <Article>
          <img src={testeImg} alt="" />
          <header>
            <DivArticle>
              <img
                src={urlGithub.name ? urlGithub.avatar_url : avatarImg}
                alt=""
              />
              <FooterArticle>
                <span>tripulante</span>
                <p>
                  {urlGithub.avatar_url ? urlGithub.name : 'Nome do tripulante'}
                </p>
              </FooterArticle>
              <DivHeader>
                <div>
                  <p>evento data hora</p>
                  <p>ia para devs - 14 - 16 ago. 2023 ao vivo - 19h</p>
                </div>
              </DivHeader>
            </DivArticle>
          </header>
        </Article>
      </Content>
    </Container>
  )
}
