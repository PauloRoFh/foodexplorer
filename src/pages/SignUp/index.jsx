import { Input } from "../../components/Input";
import { ButtonSign } from "../../components/ButtonSign";
import { Logo } from "../../components/Logo";

import { Account, Container, FormControl, FormTitle, Frame, Title } from "./styles";

export function SignUp() {
  return (
    <Container>
        <Logo />
        
        <Frame>
          <Title>Faça Login</Title>
          <FormControl>
          <FormTitle>Email</FormTitle>
            <Input 
              type='email'
              placeholder='Exemplo: exemplo@exemplo.com.br'
            />
          </FormControl>
          <FormControl>
          <FormTitle>Senha</FormTitle>
            <Input 
              type='password'
              placeholder='No mínimo 6 caracteres'
            />
          </FormControl>
          <ButtonSign 
            title='Entrar' 
          />
          <Account
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Criar conta
          </Account>
        </Frame>
      </Container>
    )
  }