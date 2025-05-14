import styled from 'styled-components';

export const BrandPage = () => {
  return (
    <div>
      <h1>Brand List</h1>
      <BrandName>PINK HOUSE</BrandName>
      <BrandName>KANEKO ISAO</BrandName>
      <BrandName>WONDERFUL WORLD</BrandName>
    </div>
  );
};

const BrandName = styled.p`
  font-size: 30px;
  color: pink;
  padding-top: 15px;
`;
