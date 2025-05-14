import styled from 'styled-components';
import { CoordinateList } from '../CoordinateList';
import { NewitemList } from '../NewitemList';

export const Main = () => {
  return (
    <div>
      <div>
        <h1>NEWARRIVAL</h1>
        <NewitemList />
      </div>
      <div>
        <hr />
        <h1>STAFF COORDINATE</h1>
        <CoordinateList />
      </div>
      <div>
        <hr />
        <h2>instagram</h2>
        <p>フォローで入荷情報をチェック</p>
        <IconImage src="./images/instaicon.png" />
      </div>
    </div>
  );
};

const IconImage = styled.img`
  height: 30px;
  width: 30px;
`;
