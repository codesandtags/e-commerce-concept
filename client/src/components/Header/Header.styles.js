import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 70px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 150px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
   @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 50px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  width: 100%;
  max-width: 50px;
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 0.2s linear;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const LogoText = styled.div`
  display: block;
  
  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;