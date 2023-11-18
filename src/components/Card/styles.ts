import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  max-width: 1216px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  width: 1216px;
  height: 408px;
  padding-top: 40px;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1 0 0;
  width: 490px;
  height: 366px;
  /* margin-top: 40px; */

  h3 {
    width: 490px;
    height: 156px;
    align-self: stretch;
    font-size: 35px;
    font-weight: 400;
    line-height: 1.3;
    text-transform: uppercase;

    background: var(
      --Linear,
      linear-gradient(90deg, #dee0fc -0.07%, #996dff 51.04%, #bc9fff 100.07%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  div {
    display: flex;
    width: 384px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    p {
      color: ${(props) => props.theme["gray-light"]};
      font-size: 20px;
      font-weight: 400;
      line-height: 1.6;
      text-transform: uppercase;
    }
  }
`;

export const FormAside = styled.form`
  display: flex;
  width: 384px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  span {
    display: flex;
    padding: 16px 12px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    background: ${(props) => props.theme["gray-light"]};

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      /* gap: 4px; */
      align-self: stretch;
    }
  }

  img {
    width: 30px;
    height: 30px;
    /* display: flex; */
    align-items: flex-start;
    /* position: relative */
  }

  input {
    flex: 1 0 0;
    color: ${(props) => props.theme["gray-dark"]};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    margin-top: 8px;
    /* margin-bottom: 2px; */
    /* position: relative */

    display: flex;
    align-items: flex-start;
  }

  button {
    display: flex;
    padding: 22px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    background: ${(props) => props.theme["purple-normal"]};
    cursor: pointer;

    color: ${(props) => props.theme.white};
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 30px;
    /* position: ; */

    &:hover {
      background: ${(props) => props.theme["purple-dark"]};
      opacity: 0.8;
      transition: 1s;
    }
  }
`;

export const Article = styled.article`
  width: 694px;
  height: 408px;

  background: ${(props) => props.theme["purple-dark"]};
  margin-left: 32px;
  display: flex;

  img {
    flex-shrink: 0;
    margin-top: 20px;
    margin-left: 20px;
    width: 300px;
    height: 318px;
  }
`;

export const DivArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  background: ${(props) => props.theme["gray-light"]};
  margin-top: 40px;
  /* margin-bottom: 80px; */
  width: 300px;
  height: 275px;

  img {
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
    width: 127px;
    height: 128px;
    border-radius: 63.5px;
  }
`;

export const FooterArticle = styled.footer`
  display: flex;
  width: 234px;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  span {
    color: var(--purple-normal, #8860e6);
    text-align: center;
    font-family: Space Grotesk;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%; /* 15px */
    letter-spacing: 1.26px;
    text-transform: uppercase;
  }

  p {
    color: var(--gray-dark, #202024);
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 20px */
    width: 234px;
  }
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10.414px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    width: 233px;
    height: 48px;

    :first-child {
      color: var(--gray-dark, #202024);
      font-family: Space Grotesk;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px; /* 160% */
      letter-spacing: 1.05px;
      text-transform: uppercase;
      width: 42px;
      height: 48px;
    }

    :last-child {
      color: var(--gray-dark, #202024);
      font-family: Space Grotesk;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px; /* 160% */
      letter-spacing: 1.05px;
      text-transform: uppercase;
      width: 104px;
      height: 48px;
    }
  }
`;

export const Sucess = styled.span`
  color: ${(props) => props.theme["gray-dark"]};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  text-transform: uppercase;
`;

export const Danger = styled.h4`
  color: var(--Danger, #ff8f8f);

  /* Text-18 */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.6;
  width: 336px;
  height: 29px;
  background: url(backgroundImg);
`;
