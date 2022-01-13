import React from 'react';

import { Link } from 'react-router-dom';

import { AreaLogin } from './styled';

import { BtnDefaultIcons } from '../../components/styled';

import FacebookIcon from 'https://fontawesome.com/v5.15/icons/facebook?style=brands';

export default () => {

    return(

        <BrowserRouter>
            <AreaLogin>
                <h1>Faça login em sua conta</h1>

                <BtnDefaultIcons>
                    <FacebookIcon />
                    <div className="center">Fazer login com Facebook</div>
                </BtnDefaultIcons>

                <BtnDefaultIcons>
                    <FacebookIcon />
                    <div className="center">Fazer login com Google</div>
                </BtnDefaultIcons>

                <p>OU</p>

                <form>
                    <div className="form--input">
                        <label>E-mail</label>
                        <input type="email" />
                    </div>

                    <div className="form--input">
                        <label>Palavra-passe</label>
                        <input type="password" />
                    </div>

                    <BtnDefault>Entrar</BtnDefault>

                    <div className="footerLogin">
                        Não tem uma conta?
                        <Link to="registrar">Regista-se</Link>
                    </div>
                </form>
                
            </AreaLogin>
        </BrowserRouter>
    );
}