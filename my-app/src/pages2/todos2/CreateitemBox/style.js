import styled from 'styled-components';

import { Button } from '../../../Button/style';

export const InputBox = styled.div`
  dispaly: flex;
  justify-content: center;
  display: flex;
  width: 100%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, hotpink, lightblue);
    background-size: 92% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.25s;
  }
  &:hover::before {
    transform: scaleX(1);
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
