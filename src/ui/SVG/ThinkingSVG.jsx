import styled from "styled-components";

const SymbolContainer = styled.div`
  display: flex;
  width: 51px;
  height: 52px;
  padding: 9.5px 9.547px 9.5px 8.453px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const CenteredSVG = styled.svg`
  width: 100%; /* Ensure the SVG takes up the full width of the container */
  height: 100%; /* Ensure the SVG takes up the full height of the container */
  background-color: #fed500;
  border-radius: 10px;
  display: block; /* Center horizontally */
  margin: auto; /* Center vertically */
`;

const ThinkingSVG = () => {
  return (
    <SymbolContainer>
      <CenteredSVG
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="52"
        viewBox="0 0 52 53"
        fill="none"
      >
        <path
          d="M13.7501 24.75V24.6029C13.7501 23.5097 13.0681 22.5569 12.2142 21.8749C11.0997 20.9861 10.289 19.7728 9.89442 18.403C9.4998 17.0332 9.54073 15.5746 10.0116 14.2291C10.4824 12.8836 11.3598 11.7177 12.5224 10.8928C13.685 10.068 15.0752 9.62484 16.5007 9.62484C17.9262 9.62484 19.3165 10.068 20.4791 10.8928C21.6417 11.7177 22.5191 12.8836 22.9899 14.2291C23.4607 15.5746 23.5017 17.0332 23.1071 18.403C22.7124 19.7728 21.9018 20.9861 20.7873 21.8749C19.9321 22.5583 19.2501 23.5097 19.2501 24.6029V24.75M13.7501 24.75V27.5C13.7501 27.8647 13.8949 28.2144 14.1528 28.4723C14.4106 28.7301 14.7604 28.875 15.1251 28.875H17.8751C18.2397 28.875 18.5895 28.7301 18.8473 28.4723C19.1052 28.2144 19.2501 27.8647 19.2501 27.5V24.75M13.7501 24.75H19.2501M27.5001 16.5H28.8751M5.50005 16.5H4.12505M16.5001 5.5V4.125M24.2784 8.72162L25.2506 7.7495M8.72305 8.72162L7.74955 7.7495M16.5001 20.625V17.875"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </CenteredSVG>
    </SymbolContainer>
  );
};

export default ThinkingSVG;
