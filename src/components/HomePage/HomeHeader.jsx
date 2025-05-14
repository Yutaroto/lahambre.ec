import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

export const HomeHeader = () => {
  return (
    <Header>
      <StyledTitleLink to="/">lachambre online store</StyledTitleLink>
      <Subtitle>
        <SubLink to="/Brand">Brand</SubLink>
        <SubLink to="/Allitem">Allitems</SubLink>
        <SubLink to="/About">about</SubLink>
        <SubLink to="/Contucts">contucts</SubLink>
      </Subtitle>
    </Header>
  );
};
const Header = styled.header`
  background-color: #ffb6c1;
  width: 100%;
  margin-top: 0%;
  padding: 16px;
`;

const StyledTitleLink = styled(Link)`
  margin-top: 0;
  font-size: 30px;
  color: aliceblue;
  text-decoration: none;
`;

const Subtitle = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 10px;
  color: aliceblue;
`;
const SubLink = styled(Link)`
  color: aliceblue;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
`;
