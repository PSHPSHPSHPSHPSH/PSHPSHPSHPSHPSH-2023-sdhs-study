import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex'
  width: 100#;
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
`;
export const Button = styled.button`
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: transparent;
  padding: 5px 10px;
  border: 1px solid #eee;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
