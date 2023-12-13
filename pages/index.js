import styled from "styled-components";

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
`;

const StyledParagraph = styled.p`
  display: flex;
  justify-content: center;
`;

export default function HomePage() {
  return (
    <div>
      <StyledTitle>Hello World!</StyledTitle>
      <StyledParagraph>
        Today we are styling the navbar and links!
      </StyledParagraph>
    </div>
  );
}
