import React from 'react';
import { Title, Text, Box, Small, Radio, Chip } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util';

import { updateSubscription } from '../../store/modules/checkout/actions';

function Toggle({ item }) {
  const dispatch = useDispatch();
  const priceWithDiscount = item.fullPrice - item.discountAmmount;

  const { subscription } = useSelector((state) => state.checkout);

  const setOffer = () => {
    dispatch(updateSubscription({ offerId: item.id }));
  };

  return (
    <Box
      row
      borderColor="blue"
      padding="20px"
      radius="20px"
      hover="dark"
      onClick={setOffer}
    >
      <Box>
        <Title color="blue">{item.title}</Title>
        <Text color="blue" className="mt-1">
          De {formatPrice(item.fullPrice)} | Por{' '}
          {formatPrice(priceWithDiscount)}{' '}
          <Chip
            color="secondary"
            label={`-${item.discountPercentage * 100}%`}
          />
        </Text>
        <Small color="orange" className="mt-1">
          {item.installments}x de{' '}
          {formatPrice(priceWithDiscount / item.installments)}/
          {item.periodLabel}
        </Small>
      </Box>
      <Radio checked={subscription.offerId === item.id} />
    </Box>
  );
}

export default Toggle;
