import { Input } from "../../components/Input";
import { ButtonSign } from "../../components/ButtonSign";
import { Logo } from "../../components/Logo";

import { Account, Container, FormControl, FormTitle, Frame, Title } from "./styles";

export function SignIn() {
  return (
      <Container>
        <Logo />
         
          <Frame>
            <Title>Crie sua conta</Title>
            
            <FormControl>
              <FormTitle>Seu nome</FormTitle>
                <Input
                  type='text' 
                  placeholder='Exemplo: Maria da Silva'
                />
              </FormControl>
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
              title='Criar conta' 
            />
            <Account
              onClick={() => {
                window.location.href = '/register';
              }}
            >
              Já tenho uma conta
            </Account>
          </Frame>
        </Container>
  )
}