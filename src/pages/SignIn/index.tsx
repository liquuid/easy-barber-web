import React from 'react';
import {FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
<Container>
    <Content>
        <img src={logoImg} alt="Easy Barber"/>
        <form>
            <h1>Faça seu Logon</h1>

            <input placeholder="E-Mail"/>
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
            <a href="forgot"> Esqueci minha senha</a>

        </form>

        <a href="forgot"><FiLogIn/> Criar conta</a>
    </Content>
    <Background />
</Container>

);
export default SignIn;
