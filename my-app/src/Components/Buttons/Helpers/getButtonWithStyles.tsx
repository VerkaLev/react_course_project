import styled from 'styled-components';

import { AccType, Props } from '../../../Ducks/Types/types';

export const ButtonWithStyles = styled.button(({ props }: Props) => {
  const arrWithStyles = Object.entries(props);

  const objWithStyles = arrWithStyles.reduce((acc: AccType, item) => {
    if (item[0] !== 'id' || 'name') {
      acc[item[0]] = item[1];
    }
    return acc;
  }, {});

  return objWithStyles;
});