import styled from "styled-components";

interface IAsideProps {}

export const Aside = ({}: IAsideProps) => {
  return (
    <StyledAside>
      <div>Aside</div>
    </StyledAside>
  );
};

export const StyledAside = styled.aside`
  padding: 50px 45px 25px 40px;
  background-color: white;
`;
