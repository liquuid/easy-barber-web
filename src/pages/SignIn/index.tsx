import React, { useCallback, useRef} from 'react';
import {FiLogIn , FiMail , FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback( async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório').email("Digite um e-mail válido"),
                password: Yup.string().required('Senha obrigatória'),
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
            <Content>
                <img src={logoImg} alt="Easy Barber"/>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Logon</h1>

                    <Input name="email" icon={FiMail} placeholder="E-Mail"/>
                    <Input name="password" type="password" icon={FiLock} placeholder="Senha" />
                    <Button name="submit">Entrar</Button>
                    <a href="forgot"> Esqueci minha senha</a>

                </Form>

                <a href="forgot"><FiLogIn/> Criar conta</a>
            </Content>
            <Background />
        </Container>
    );

    };
export default SignIn;
