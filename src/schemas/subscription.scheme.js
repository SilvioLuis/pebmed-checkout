import * as yup from 'yup';
import valid from 'card-validator';

const SubscriptionSchema = yup.object().shape({
  creditCardNumber: yup
    .string()
    .test(
      'credit-card-test',
      'Insira um cartão de crédito válido',
      (value) => valid.number(value).isValid
    )
    .required(),
  creditCardExpirationDate: yup
    .string()
    .min(5, 'Insira uma data de expiração no formato MM/YY')
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      'Insira uma data de expiração no formato MM/YY'
    )
    .required(),
  creditCardCVV: yup
    .string()
    .min(3, 'Insira um CVV de no mínimo 3 Dígitos.')
    .required(),
  creditCardHolder: yup
    .string()
    .min(4, 'Insira o nome impresso no cartão completo.')
    .required(),
  creditCardCPF: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Insira um CPF Válido.')
    .required(),
  couponCode: yup.string().notRequired(),
  gateway: yup.string().required(),
  installments: yup.number().min(1).required(),
  offerId: yup.number().min(1).required(),
  userId: yup.number().min(1).required(),
});

export default SubscriptionSchema;
