import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import {
  FormContainer, InputArea, Label, Input, Button,
} from '../styles/form';
import { populatePatientsGrid } from '../utils/actions';
import { createPatient, updatePatient } from '../utils/request';

function Form({ onEdit, setOnEdit, setPatients }) {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const patient = ref.current;
      patient.name.value = onEdit.name;
      patient.email.value = onEdit.email;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const patient = ref.current;

    if (!patient.name.value || !patient.email.value) {
      toast.warn('Preencha todos os campos!');
      return;
    }

    if (onEdit) {
      await updatePatient(onEdit._id, { name: patient.name.value, email: patient.email.value })
        .then(() => toast.success('Usuário Atualizado'))
        .catch(() => toast.error('Erro ao atualizar usuário'));
    } else {
      await createPatient({ name: patient.name.value, email: patient.email.value })
        .then(() => toast.success('Novo Usuário Criado'))
        .catch(() => toast.error('Erro ao criar usuário'));
    }

    patient.name.value = '';
    patient.email.value = '';

    await setOnEdit(null);
    await populatePatientsGrid(setPatients);

    setTimeout(() => {
      window.location.reload(false);
    }, 1.5 * 1000);
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
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
