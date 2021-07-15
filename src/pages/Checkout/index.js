import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { formatPrice } from '../../util';
import { Row, Col } from 'react-bootstrap';
import { Title, Text, Button, Box, Link, Image } from '../../components';

function Checkout() {
  const history = useHistory();
  const { subscription, offers } = useSelector((state) => state.checkout);

  /* 
    TODAS AS INFORMAÇÕES VINDAS A API ESTÃO FIXAS 
  */
  const offer = offers.filter((o) => o.id === subscription?.offerId)[0];
  const priceWithDiscount = offer?.fullPrice - offer?.discountAmmount;

  return (
    <Row className="mt-5">
      <Col
        xl={{
          span: 4,
          offset: 4,
        }}
        md={{
          span: 6,
          offset: 3,
        }}
        sm={{
          span: 8,
          offset: 2,
        }}
        className="align-items-center d-flex flex-column"
      >
        <Image image="iconSuccess" className="mb-4" />
        <Title color="blue">Parabéns</Title>
        <Text color="grey">Sua assinatura foi realizada com sucesso.</Text>

        <Box
          className="my-4"
          fluid
          shadow
          radius="15px"
          background="white"
          padding="20px"
        >
          <Box
            fluid
            row
            radius="15px"
            background="grey_50"
            padding="20px"
            className="justify-content-center"
          >
            <Image image="iconStar" size="45px" />
            <Box className="align-items-end">
              <Text color="blue">{offer?.title}</Text>
              <Text color="blue">
                {formatPrice(priceWithDiscount)} | {subscription.installments}x
                de {formatPrice(priceWithDiscount / subscription.installments)}/
                {offer?.periodLabel}
              </Text>
            </Box>
          </Box>

          <Box row className="justify-content-between mt-4">
            <Text color="grey">E-mail</Text>
            <Text>fulano@cicrano.com.br</Text>
          </Box>
          <Box row className="justify-content-between mt-2">
            <Text color="grey">CPF</Text>
            <Text>{subscription?.creditCardCPF}</Text>
          </Box>
        </Box>

        <Link>Gerenciar assinatura</Link>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          IR PARA HOME
        </Button>
      </Col>
    </Row>
  );
}

export default Checkout;
