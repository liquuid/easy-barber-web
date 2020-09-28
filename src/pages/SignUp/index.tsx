import React, { useCallback, useRef} from 'react';
import {FiArrowLeft , FiMail , FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () =>  {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback( async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email("Digite um e-mail válido"),
                password: Yup.string().min(6, 'No mínimo 6 dígitos'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

        } catch (err) {
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
            console.log(errors);
        }

    },[]);

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="Easy Barber"/>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome"/>
                    <Input name="email" icon={FiMail} placeholder="E-Mail"/>
                    <Input name="password" icon={FiLock} placeholder="Senha" />
                    <Button name="submit">Cadastrar</Button>
                </Form>

                <a href="login"><FiArrowLeft/>Voltar para Logon</a>
            </Content>

        </Container>)

};
export default SignUp;