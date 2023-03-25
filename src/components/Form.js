import { useRef } from 'react';
import {
  FormContainer, InputArea, Label, Input, Button,
} from '../styles/form';

function Form() {
  const ref = useRef();

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
}

export default Form;
