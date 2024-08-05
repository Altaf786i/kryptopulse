// components/Exchanges.js
import React from 'react';
import { useGetExchangesQuery } from '../services/exchangeApi';
import { Row, Col, Typography, Card } from 'antd';
import Loader from './Loader';

const { Title } = Typography;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">Exchanges</Title>
      <Row gutter={[24, 24]}>
        {data?.data?.map((exchange) => (
          <Col xs={24} sm={12} lg={8} key={exchange.exchangeId}>
            <Card title={exchange.name} hoverable>
              <p>Rank: {exchange.rank}</p>
              <p>Volume (24h): {exchange.volumeUsd24Hr}</p>
              <p>Trading Pairs: {exchange.tradingPairs}</p>
              <p>Exchange Url: <a href={exchange.exchangeUrl} target="_blank" rel="noopener noreferrer">{exchange.exchangeUrl}</a></p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
