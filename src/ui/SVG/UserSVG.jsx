import styled from 'styled-components';

const StyledSVG = styled.svg`
  width: 48px;
  height: 48px;
  border-radius: 11px;
  background: white;
`;

const UserSVG = () => {
  return (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
      <path d="M34 42V38C34 35.8783 33.1571 33.8434 31.6569 32.3431C30.1566 30.8429 28.1217 30 26 30H10C7.87827 30 5.84344 30.8429 4.34315 32.3431C2.84285 33.8434 2 35.8783 2 38V42" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 22C22.4183 22 26 18.4183 26 14C26 9.58172 22.4183 6 18 6C13.5817 6 10 9.58172 10 14C10 18.4183 13.5817 22 18 22Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M46 42V38C45.9987 36.2275 45.4087 34.5056 44.3227 33.1046C43.2368 31.7037 41.7163 30.7031 40 30.26" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 6.26001C33.7208 6.70061 35.2461 7.70141 36.3353 9.10463C37.4245 10.5078 38.0157 12.2337 38.0157 14.01C38.0157 15.7864 37.4245 17.5122 36.3353 18.9154C35.2461 20.3186 33.7208 21.3194 32 21.76" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </StyledSVG>
  );
};

export default UserSVG;
