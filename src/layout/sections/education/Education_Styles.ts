import styled from "styled-components";

const Education = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 0;

  & > p {
    max-width: 438px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 40px 20px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const S = {
  Education,
  Info,
};
