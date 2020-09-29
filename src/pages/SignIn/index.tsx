import React, { useCallback, useRef, useContext } from 'react';
import {FiLogIn , FiMail , FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const {signIn} = useAuth();
    const {addToast, removeToast} = useToast();
    const handleSubmit = useCallback( async (data: SignInFormData) => {

        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório').email("Digite um e-mail válido"),
                password: Yup.string().required('Senha obrigatória'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            await signIn({
                email: data.email,
                password: data.password
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);
                console.log(errors);
            }
            addToast();

        }

    },[signIn, addToast]);
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
