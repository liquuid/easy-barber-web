import React from 'react';
import {FiArrowLeft , FiMail , FiUser, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
<Container>
    <Background />
    <Content>
        <img src={logoImg} alt="Easy Barber"/>
        <form>
            <h1>Faça seu Cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome"/>
            <Input name="email" icon={FiMail} placeholder="E-Mail"/>
            <Input name="password" icon={FiLock} placeholder="Senha" />
            <Button name="submit">Cadastrar</Button>
        </form>

        <a href="login"><FiArrowLeft/>Voltar para Logon</a>
    </Content>

</Container>

);
export default SignUp;
