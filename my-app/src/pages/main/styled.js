import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const MainWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  box-shadow: 0 0 4 5px rgba(156, 156, 156, 0.4);
  > div {
    font-size: 24px;
    font-weight: 700;
  }
  > ${Button} {
    padding: 8px 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: darken(#f0f0f0, 10%);
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 4px;
  padding: 5px;
  font-size: 1.15rem;
  outline: none;
  border: 1px solid #eee;
  transition: all 0.25s;
  /* &:focus {
    background: linear-gradient(90deg, hotpink, lightblue);
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
  } */
`;
