import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <div>
      <h1>SignIn</h1>
      <Input
      type='text' 
      placeholder='Exemplo: Maria da Silva'
      />
      <Input 
      type='email'
      placeholder='Exemplo: exemplo@exemplo.com.br'
      />
      <Input 
      type='password'
      placeholder='No mínimo 6 caracteres'
      />
    </div>
  )
}