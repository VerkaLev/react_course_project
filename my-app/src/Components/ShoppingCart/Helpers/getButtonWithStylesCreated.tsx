import styled from 'styled-components';
import { AccType, PropsShop } from '../../../Ducks/Types/types';

export const ButtonWithStylesShop = styled.button(({ props }: PropsShop) => {
  const arrWithStyles = Object.entries(props);

  const objWithStyles = arrWithStyles.reduce((acc: AccType, item) => {
    if (item[0] !== 'id' || 'name') {
      acc[item[0]] = item[1];
    }
    return acc;
  }, {});
  console.log(objWithStyles);

  return objWithStyles;
});
