import logo from "../assets/logo.png";
import styled from 'styled-components';

const Layout = () => {
    
  return (
    <>
      <ContainterLayout>
        <LayoutLogo>
          <img src={logo} alt="" />
        </LayoutLogo>
        <LayoutName>
          <h1>ZapRecall</h1>
        </LayoutName>
        <LayoutText>
          <h2>Iniciar Recall!</h2>
        </LayoutText>
      </ContainterLayout>
    </>
  );
};

export default Layout;

const ContainterLayout = styled.div`
  height: 667px;
  width: 100%;
  border-radius: 0px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LayoutName = styled.div`
  height: 59px;
  width: 257px;
  border-radius: nullpx;
  margin-top: 20px;

  h1 {
    font-family: "Righteous";
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -1.2%;
    color: white;
    margin-left: 50px;
  }
`;

const LayoutLogo = styled.div`
img {
  height: 161px;
  width: 136px;
  border-radius: 0px;
}
`
const LayoutText = styled.div`
  height: 54px;
  width: 246px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 30px;
  
  h2 {
  font-family: "Recursive";
  font-weight: 400;
  font-style: Sans Casual;
  font-size: 18px;
  line-height: 22px;
  line-height: 100%;
  color: #d70900;
  }
`