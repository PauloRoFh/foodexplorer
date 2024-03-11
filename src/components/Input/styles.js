import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 21.75rem;
  height: 3rem;
  padding: 0.75rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  > input {
    flex: 1 0 0;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      opacity: 0.5;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
