import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8.5rem 10.5rem 8.5rem 7.5rem;
`;

export const Frame = styled.div`
display: inline-flex;
padding: 4rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;

border-radius: 1rem;
background: ${({ theme }) => theme.COLORS.DARK_700};
`
export const FormControl = styled.div`
display: flex;
width: 21.75rem;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;

opacity: 0.8;
`

export const Title = styled.h1`
color: ${({ theme }) => theme.COLORS.LIGHT_100};

text-align: center;

font-family: Poppins;
font-size: 2rem;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 2.8rem */
`

export const FormTitle = styled.p`
font-family: Roboto;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 1rem */

color: ${({ theme }) => theme.COLORS.LIGHT_400};
`

export const Account = styled.button`
color: ${({ theme }) => theme.COLORS.LIGHT_100};
text-align: center;
/* Poppins/100-medium */
font-family: Poppins;
font-size: 0.875rem;
font-style: normal;
font-weight: 500;
line-height: 1.5rem; /* 171.429% */

background: transparent;
border: 0;
`