import React, { useEffect } from 'react';
import _ from 'underscore';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import SubscriptionSchema from '../../schemas/subscription.scheme';

import TextField from '../../components/TextField';
import Toggle from '../../components/Toggle';
import {
  Title,
  Text,
  ActivityIndicator,
  Select,
  MenuItem,
  InputLabel,
  Chip,
  Box,
  Button,
  Image,
} from '../../components';

import alert from '../../services/alert';

import Icon from '@mdi/react';
import { mdiHelpCircleOutline } from '@mdi/js';

import {
  getOffers,
  updateSubscription as updateSubscriptionAction,
  saveSubscription as saveSubscriptionAction,
} from '../../store/modules/checkout/actions';

function Home() {
  const dispatch = useDispatch();
  const { offers, subscription, form } = useSelector((state) => state.checkout);

  const selectedOffer = offers.filter((o) => o.id === subscription.offerId)[0];

  const updateSubscription = (e) => {
    const { name, value } = e.target;
    dispatch(updateSubscriptionAction({ [name]: value }));
  };

  const saveSubscription = async () => {
    try {
      await SubscriptionSchema.validate(subscription);
      dispatch(saveSubscriptionAction());
    } catch (err) {
      alert({
        title: 'Ops...',
        html: err.message,
        icon: 'error',
      });
    }
  };

  useEffect(() => {
    dispatch(updateSubscriptionAction({ installments: 1 }));
  }, [subscription?.offerId]);

  useEffect(() => {
    dispatch(getOffers());
  }, []);

  return (
    <Row className="mt-5">
      {form.loading && (
        <Box className="align-items-center">
          <ActivityIndicator className="my-5" />
          <Title>Um momento...</Title>
          <Text>Estamos buscando algumas informações...</Text>
        </Box>
      )}

      {!form.loading && (
        <>
          <Col
            xl={{
              span: 4,
              offset: 1,
              order: 0,
            }}
            lg={{
              span: 4,
              offset: 1,
              order: 0,
            }}
            md={{
              span: 6,
              offset: 0,
              order: 0,
            }}
            sm={{
              span: 12,
              order: 1,
            }}
            xs={{
              span: 12,
              order: 1,
            }}
          >
            <Title>Estamos quase lá!</Title>
            <Text>Insira seus dados de pagamento abaixo:</Text>
            <Image
              image="cardBrands"
              className="img-fluid d-block mx-auto mt-4"
            />
            <Row>
              <Col xl="12" className="mt-4">
                <TextField
                  data-cy="creditCardNumber"
                  name="creditCardNumber"
                  label="Número do cartão"
                  placeholder="0000 0000 0000 0000"
                  mask="9999 9999 9999 9999"
                  onChange={updateSubscription}
                />
              </Col>
              <Col xl="12" className="mt-4 d-flex">
                <TextField
                  data-cy="creditCardExpirationDate"
                  name="creditCardExpirationDate"
                  label="Validade"
                  placeholder="MM/AA"
                  mask="99/99"
                  onChange={updateSubscription}
                />
                <TextField
                  data-cy="creditCardCVV"
                  name="creditCardCVV"
                  label="CVV"
                  placeholder="000"
                  mask="999"
                  onChange={updateSubscription}
                />
              </Col>
              <Col xl="12" className="mt-4">
                <TextField
                  data-cy="creditCardHolder"
                  name="creditCardHolder"
                  label="Nome impresso no cartão"
                  placeholder="Seu Nome"
                  onChange={updateSubscription}
                />
              </Col>
              <Col xl="12" className="mt-4">
                <TextField
                  data-cy="creditCardCPF"
                  name="creditCardCPF"
                  label="CPF"
                  placeholder="000.000.000-00"
                  mask="999.999.999-99"
                  onChange={updateSubscription}
                />
              </Col>
              <Col xl="12" className="mt-4">
                <TextField
                  data-cy="couponCode"
                  name="couponCode"
                  label="Cupom"
                  placeholder="Insira aqui"
                  onChange={updateSubscription}
                />
              </Col>
              <Col xl="12" className="mt-4">
                <InputLabel shrink id="installments-number">
                  Número de parcelas
                </InputLabel>
                <Select
                  data-cy="installments"
                  name="installments"
                  labelId="installments-number"
                  value={subscription?.installments}
                  onChange={updateSubscription}
                >
                  {_.times(selectedOffer?.installments || 1, (index) => (
                    <MenuItem value={index + 1}>{index + 1}x</MenuItem>
                  ))}
                </Select>
              </Col>
              <Col xl="12" className="mt-4">
                <Button
                  name="button-save"
                  disabled={form.saving}
                  onClick={saveSubscription}
                >
                  {form.saving
                    ? 'Finalizando compra...'
                    : 'Finalizar pagamento'}
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            xl={{
              span: 5,
              offset: 1,
              order: 1,
            }}
            lg={{
              span: 5,
              offset: 1,
              order: 1,
            }}
            md={{
              span: 6,
              offset: 0,
              order: 1,
            }}
            sm={{
              span: 12,
              order: 0,
            }}
            xs={{
              span: 12,
              order: 0,
            }}
          >
            <Title>Confira o seu plano:</Title>
            <Chip
              className="mb-4"
              label="fulano@cicrano.com.br"
              variant="outlined"
            />

            {offers.map((offerItem) => (
              <>
                <Toggle item={offerItem} />
                <br />
              </>
            ))}

            <Box row className="justify-content-center mb-5" hover>
              <Text>Sobre a cobrança</Text>
              <Icon size={1} path={mdiHelpCircleOutline} />
            </Box>
          </Col>
        </>
      )}
    </Row>
  );
}

export default Home;
