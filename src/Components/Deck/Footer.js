import styled from 'styled-components';
const Footer = (props) => {  
  return (
    <>
      <Result data-test="footer">
        <h1>{`${props.cardsCompleted}/${props.allquestions} CONCLUIDOS`}</h1>
      </Result>
    </>
  );
};

export default Footer;

const Result = styled.div`
bottom: 0;
left: 0;
height: 70px;
width: 100%;
border-radius: 0px;
background-color: white;
filter: drop-shadow(0 -4 6 0 #000000 5%);
text-align: center;
position: fixed;
h1{
font-family: "Recursive";
font-weight: 400;
font-size: 18px;
color: #333333;
margin-top: 24px;  
}
`
