import styled, { css } from 'styled-components';
import Images from '../assets';

import {
  TextField as MaterialTextField,
  MenuItem as MaterialMenuItem,
  Select as MaterialSelect,
  InputLabel as MaterialInputLabel,
  Chip as MaterialChip,
  Radio as MaterialRadio,
  CircularProgress as MaterialCircularProgress,
} from '@material-ui/core';

import { Button as BootstrapButton } from 'react-bootstrap';

export const Image = styled.img.attrs((props) => ({
  src: Images[props.image],
}))`
  width: ${(props) => props.size || 'auto'};
  height: ${(props) => props.size || 'auto'};
`;

export const Title = styled.h4`
  color: ${(props) => props.theme[props.color || 'dark']};
`;

export const Text = styled.span`
  display: block;
  color: ${(props) => props.theme[props.color || 'dark']};
`;

export const Small = styled.small`
  display: block;
  color: ${(props) => props.theme[props.color || 'dark']};
`;

export const InputText = styled(MaterialTextField)`
  width: 100%;
`;

export const Select = styled(MaterialSelect)`
  width: 100%;
`;

export const MenuItem = styled(MaterialMenuItem)``;

export const InputLabel = styled(MaterialInputLabel)``;

export const Chip = styled(MaterialChip)`
  color: ${(props) => props.theme.dark};
`;

export const Radio = styled(MaterialRadio).attrs({
  color: 'primary',
})``;

export const Button = styled(BootstrapButton)`
  background: ${(props) => props.theme[props.color || 'blue']};
  border-color: ${(props) => props.theme[props.color || 'blue']};
  padding: 15px 30px;
  border-radius: 25px;
  width: 100%;
`;

export const Link = styled.a`
  color: ${(props) => props.theme[props.color || 'blue']};
  font-size: 18px;
  text-decoration: none;
  padding: 15px 30px;
  display: block;
  width: 100%;
  text-align: center;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme[props.color || 'blue']};
    cursor: pointer;
  }
`;

export const ActivityIndicator = styled(MaterialCircularProgress).attrs({
  size: 80,
})``;

export const Box = styled.div`
  display: flex;
  flex: 1;
  width: ${(props) => (props.fluid ? '100%' : 'auto')};
  background: ${(props) => props.theme[props.background] || `transparent`};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => props.padding || `0px`};
  border-radius: ${(props) => props.radius || `0px`};
  border: ${(props) =>
    props.theme[props.borderColor]
      ? `1px solid ${props.theme[props.borderColor]}`
      : `none`};

  /* PSEUDO SELECTORS */
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        // 1A = 10% opacity
        background: ${(props) =>
          props.theme[props.hover]
            ? `${props.theme[props.hover]}1A`
            : 'transparent'};
        cursor: pointer;
      }
    `}

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
    `}
`;
