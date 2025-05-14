import styled from 'styled-components';
import { CoordinateDate } from './CoordinateDate';
import { CoordinateCard } from './CoordinateCard';

export const CoordinateList = () => {
  return (
    <ItemlistContainer>
      {CoordinateDate.map((item) => (
        <CoordinateCard key={item.id} item={item} />
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
