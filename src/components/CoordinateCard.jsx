import styled from 'styled-components';

export const CoordinateCard = ({ item }) => {
  return (
    <ItemCard>
      <ItemImage src={item.image} alt={item.id} />
    </ItemCard>
  );
};

const ItemCard = styled.div`
  border: 1px solid #a9a9a9;
  margin: 16px;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  justify-content: space-between;
  background-color: #ffffff;
`;
const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;
