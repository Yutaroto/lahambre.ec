import styled from 'styled-components';
import { AllItemCard } from './AllItemCard';
import { AllItemDate } from './AllItemDate';

export const AllItemList = () => {
  return (
    <ItemlistContainer>
      {AllItemDate.map((item) => (
        <AllItemCard key={item.id} item={item} />
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
