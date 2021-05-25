import styled from "styled-components";
import config from "./config";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding-top: 60px;
  padding-left: 76px;
`;
const Title = styled.span`
  font-weight: 500;
  font-size: 48px;
  color: #f2c94c;
  padding-right: 28px;
`;

const TextMenu = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #2f80ed;
  margin-right: 30px;
`;

const Menu = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Title> EASY RICE </Title>
        {config.map(({ label, href }, index) => (
          <Link key={index} to={href} style={{ textDecoration: "none" }}>
            <TextMenu>{label}</TextMenu>
          </Link>
        ))}
      </Wrapper>{" "}
      {children}
    </>
  );
};

export default Menu;
