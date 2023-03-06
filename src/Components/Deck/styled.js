import styled from "styled-components";
export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  margin-left: 20px;
`;
export const FlashCardContainer= styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin:6%;
  margin-bottom: 40px;
  img {
    width: 20px;
    height: 23px;
    margin-right: 20px;
  }
  span {
    font-family: "Recursive";
    font-weight: 700;
    font-style: Sans casual Bold;
    font-size: 16px;
    line-height: 19px;
    margin-left: 15px;
  }
`;
export const FrontCard = styled.div`
  height: 65px;
  width: 300px;
  display:${props => props.displayFront? 'flex':'none'};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  img {
    width: 20px;
    height: 23px;
    margin-right: 20px;
  }
  span {
    font-family: "Recursive";
    font-weight: 700;
    font-style: Sans casual Bold;
    font-size: 16px;
    line-height: 19px;
    margin-left: 15px;
    text-decoration: ${props => props.textdecoration?'line-through':'none'};
  }
`;
export const BackCard = styled.div`
  height: 131px;
  width: 299px;
  border-radius: 5px;
  display: ${props => props.displayBack? 'flex':'none'};
  flex-direction: row;
  justify-content: space-between;
  background-color: #FFFFD4;
;
  img {
    margin-top: 100px;
  }
  span {
    font-family: "Recursive";
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 10px;
  }
`;
export const ResultCard = styled.div`
  height: 131px;
  width: 300px;
  display:${props => props.displayResult ? 'flex':'none'};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #FFFFD4;
;
    span {
    font-family: "Recursive";
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    margin-top: 12px;
  }
`;
export const ContainerOptions = styled.div`
  width: 272px;
  height: 40px;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-bottom: 10px;
   h1,h2,h3 {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    display: flex;
    text-align: center;
    align-items: center;
  }
`;
export const Red = styled.div`
  height: 37px;
  width: 85px;
  margin-left: 7.5px;
  border-radius: 5px;
  background-color: #ff3030;
  h1{
width: 65.04px;
height: 37.17px;
margin-left : 8.5px ;
  }
`;
export const Orange = styled.div`
  height: 37px;
  width: 85px;
  margin-left: 7.5px;
  border-radius: 5px;
  background-color: #f3902c;
  h2{
width: 75.88px;
height: 37.17px;
margin-left: 4.5px;
  }
`;
export const Green = styled.div`
  height: 37px;
  width: 85px;
  margin-left: 7.5px;
  border-radius: 5px;
  background-color: #2fbe34;
  h3 {
    width: 29px;
    height: 37px;
    margin-left: 28px;
  }
`;
