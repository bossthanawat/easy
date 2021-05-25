import styled from "styled-components";

const Card = styled.div`
  border: 2px solid #FFC674;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 30px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 36px;
`;
const Description = styled.div`
  font-size: 24px;
  color: #7A7A7A;
`;
const Amount = styled.span`
  font-weight: 500;
  font-size: 36px;
  text-align: right;
`;

const CardPrice = ({title, description, amount, ...props}) => {
  return (
    <Card {...props}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div style={{display:"grid"}}>
        <Amount>{amount}</Amount>
      </div>
    </Card>
  );
};
export default CardPrice;
