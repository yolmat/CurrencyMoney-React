import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  background-color: #d0de96;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  margin-bottom: 5%;
  width: 20rem;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2rem;
`;

export const Hero = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  gap: 10%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const SubText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const HeroInput = styled.input`
  border: none;
  border-radius: 5px;
  background-color: #eaeaea;
  color: #4f4f4f;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  :hover {
    box-shadow:0px 0px 0px 2px #d0de96 inset;
  }
  :focus{
    box-shadow:0px 0px 0px 2px #d0de96 inset;

  }

`;

export const Select = styled.select`
  border: none;
  border-radius: 5px;
  background-color: #eaeaea;
  color: #4f4f4f;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  :hover {
    box-shadow:0px 0px 0px 2px #d0de96 inset;
  }
  :focus{
    box-shadow:0px 0px 0px 2px #d0de96 inset;

  }
`;

export const Money = styled.option``;

export const HeroBnt = styled.button`
  border: none;
  border-radius: 15px;
  padding: 1rem 5rem;
  background-color: #d0de96;
  color: #ffffff;
  font-size: 1.5rem;

  :hover {
    opacity: 0.9;
  }

  :active{
    opacity: 0.7;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-around;
`;

export const Converter = styled.article``;

export const ImgConverter = styled.img`
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const Value = styled.p`
  font-weight: 700;
  font-size: 1rem;
`;

export const Arrow = styled.img`
  width: 30%;
`;
