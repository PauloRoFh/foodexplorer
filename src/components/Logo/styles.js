import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.9rem;

  flex-shrink: 0;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  /* Roboto/Giant bold */
  font-family: Roboto;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`