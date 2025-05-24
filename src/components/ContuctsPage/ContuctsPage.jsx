import styled from 'styled-components';

export const ContuctsPage = () => {
  return (
    <div>
      <p>お問い合わせ内容</p>
      <label>
        お名前:
        <br />
        <InputA type="text" name="name" />
      </label>
      <br />
      <label>
        内容:
        <br />
        <InputS type="text" name="name" />
      </label>
    </div>
  );
};
const InputA = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputS = styled.input`
  width: 300px;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
