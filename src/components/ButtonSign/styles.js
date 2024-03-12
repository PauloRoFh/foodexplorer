import styled from 'styled-components'

export const Container = styled.button`
display: flex;
padding: 0.75rem 2rem;
justify-content: center;
align-items: center;
gap: 0.5rem;
align-self: stretch;

border-radius: 0.3125rem;
background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

color: ${({ theme }) => theme.COLORS.LIGHT_100};

border: 0;
`