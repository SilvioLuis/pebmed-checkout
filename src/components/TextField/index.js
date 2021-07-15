import React from 'react';

import InputMask from 'react-input-mask';
import { InputText } from '../../components';

function TextField({ name, mask, label, placeholder, onChange = () => {} }) {
  return (
    <InputMask name={name} mask={mask} onChange={onChange}>
      <InputText
        label={label}
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={placeholder}
      />
    </InputMask>
  );
}

export default TextField;
