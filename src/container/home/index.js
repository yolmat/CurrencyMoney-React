import React from "react";
import {
  Container,
  Header,
  Logo,
  Title,
  Hero,
  Label,
  HeroInput,
  SubText,
  Select,
  Money,
  HeroBnt,
  Section,
  Converter,
  ImgConverter,
  Value,
  Arrow,
} from "./style";
import LogoImg from "../../assets/logo.png";
import BRL from "../../assets/Real.svg";
import EUA from "../../assets/Dolar.svg";
import ArrowImg from "../../assets/Arrow.svg";

function ConvertMoney() {
  const money = "R$ ";

  return (
    <Container>
      <Header>
        <Logo src={LogoImg} />
        <Title>Currency Converter</Title>
      </Header>
      <Hero>
        <Label>
          <SubText>Value</SubText>
          <HeroInput type="number" placeholder={money + "100.000"} />
        </Label>
        <Label>
          <SubText>From</SubText>
          <Select id="currencySelectFrom">
            <Money>R$ Real</Money>
            <Money>$ Dolar</Money>
            <Money>€ Euro</Money>
          </Select>
        </Label>
        <Label>
          <SubText>To</SubText>
          <Select id="currencySelectTo">
            <Money>$ Dolar</Money>
            <Money>R$ Real</Money>
            <Money>€ Euro</Money>
          </Select>
        </Label>
        <HeroBnt>Click Me</HeroBnt>

        <Section>
          <Converter>
            <ImgConverter src={BRL} />
            <Value>R$ 0,00</Value>
          </Converter>

          <Arrow src={ArrowImg} />

          <Converter>
            <ImgConverter src={EUA} />
            <Value>$ 0,00</Value>
          </Converter>
        </Section>
      </Hero>
    </Container>
  );
}

export default ConvertMoney;
