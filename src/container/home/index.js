import React, { useState } from "react";
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

  const [primaryCurrency, setPrimaryCurrency] = useState(1)
  const [convertedCurrency, setconvertedCurrency] = useState(2)

  const brl = BRL
  const eua = EUA

  const listMoney = [
    {id: 1, currency: "R$ Real", image: brl },
    {id: 2, currency: "$ Dolar", image: eua },
    {id: 3, currency: "€ Euro"},
  ]

  let image

  if (primaryCurrency === 1) {
    image = BRL
  } else if (primaryCurrency === 2) {
    image = eua
  }

  return (
    <Container>
      <Header>
        <Logo src={LogoImg} />
        <Title>Currency Converter</Title>
      </Header>
      <Hero>
        <Label>
          <SubText>Value</SubText>
          <HeroInput type="number" placeholder={"100.000"} />
        </Label>
        <Label>
          <SubText>From</SubText>
          <Select value={primaryCurrency} onChange={e => setPrimaryCurrency(e.target.value)} >
            {listMoney.map((item, index) => (
              <Money value={item.id}>{item.currency}</Money>
            ))}
          </Select>
        </Label>
        <Label>
          <SubText>To</SubText>
          <Select value={convertedCurrency} onChange={e => setconvertedCurrency(e.target.value)} >
            {listMoney.map((item, index) => (
              <Money value={item.id}>{item.currency}</Money>
            ))}
          </Select>
        </Label>
        <HeroBnt>Click Me</HeroBnt>

        <Section>
          <Converter>
            <ImgConverter src={image} />
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
