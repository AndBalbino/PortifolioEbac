import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282435' : '#949494')};
  font-size: 14px;
  line-weight: 22px;
  margin-bottom: 16px;
`