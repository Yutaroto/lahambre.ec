import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NewItemCard = ({ item }) => {
  return (
    <ItemCardLink to={`/ItemDetail/${item.id}`}>
      <ItemImage src={item.image} alt={item.name} />
      <ItemName>{item.brand}</ItemName>
      <ItemName>{item.name}</ItemName>
      <p>{item.price}</p>
    </ItemCardLink>
  );
};

const ItemCardLink = styled(Link)`
  border: 1px solid #a9a9a9;
  margin: 16px;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  justify-content: space-between;
  background-color: #ffffff;
  text-decoration: none;
  color: black;
`;
const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;
const ItemName = styled.h3`
  font-size: medium;
  margin-top: 4px;
  margin-bottom: 4px;
`;
