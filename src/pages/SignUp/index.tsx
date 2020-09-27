import React from 'react';
import {FiArrowLeft , FiMail , FiUser, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/web';

const SignUp: React.FC = () =>  {
    function handleSubmit(data: object): void {
        console.log(data);
    }

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="Easy Barber"/>
                <Form onSubmit={handleSubmit}>
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
