import styled from "styled-components";
import Page from "../../components/layout/Page";
import Card from "../../components/CardPrice";
import useGetCurrentPrice from "./hook/useGetCurrentPrice";
import useGetSupportedCurrencies from "./hook/useGetSupportedCurrencies";
import { useEffect, useState } from "react";
const Title = styled.span`
  font-weight: 500;
  font-size: 36px;
`;
const LabelSM = styled.span`
  font-size: 14px;
  color: #4b4b4b;
`;
const LabelMD = styled.span`
  font-size: 18px;
`;

const LayoutLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Select = styled.select`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  width: 220px;
  height: 32px;
`;
const WrapperCard = styled.div`
  padding-top: 20px;
`;

const CardPrice = styled(Card)`
  margin-bottom: 20px;
  width: 609px;
  height: 210px;
`;

const Price = () => {
  const [select, setSelect] = useState();
  const [{bpi, count, date}, getAddCurrnet, getAllAddCurrnet ] = useGetCurrentPrice();
  const option = useGetSupportedCurrencies();
  const changeSelect = (event) => {
    setSelect(event.target.value);
  };

  const handleAdd = () => {
    select && getAddCurrnet(select)
  }
  const handleAddAll = () => {
    getAllAddCurrnet(option)
  }

  return (
    <>
      <Page>
        <Title>Bitcoin Price</Title>
        <LayoutLabel>
          <LabelSM>update: {date}</LabelSM>
          <div>
            <LabelMD style={{ paddingRight: "10px" }}>add currencies:</LabelMD>
            <Select onChange={changeSelect} value={select}>
              <option style={{display:"none"}}/>
              {option.map(({ currency },index) => (
                <option key={index}value={currency}>{currency}</option>
              ))}
            </Select>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleAddAll}>ADD ALL</button>
          </div>
          <LabelSM>count: {count}</LabelSM>
        </LayoutLabel>
        <WrapperCard>
          {bpi.map(({ code, description, rate_float }, index) => (
            <CardPrice
              key={index}
              title={code}
              description={description}
              amount={rate_float.toFixed(2)}
            />
          ))}
        </WrapperCard>
      </Page>
    </>
  );
};

export default Price;
