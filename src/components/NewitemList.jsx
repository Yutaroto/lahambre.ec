import { newItemDate } from './NewitemDate';
import { NewItemCard } from './NewItemCard';
import styled from 'styled-components';

export const NewitemList = () => {
  return (
    <ItemlistContainer>
      {newItemDate.map((item) => (
        <NewItemCard key={item.id} item={item} />
      ))}
    </ItemlistContainer>
  );
};

const ItemlistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;
