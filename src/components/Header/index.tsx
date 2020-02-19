import React from 'react';
import Container from './styles';
import avatar from 'assets/avatar.png';

interface Props {
    className?: string;
}

const Header: React.FC<Props> = props => {

    const { className } = props; 

    return (
        <Container className={className}>
            <div className="logo ml-4 mr-6"></div>
            <div className="flex-fill px-4 py-2 border-left">
                <h1 className="font-raleway text-uppercase text-purple fs-26 m-0">
                    Diagnóstico Precoce
                </h1>
            </div>
            <div className="d-flex border-right">
                <img src={avatar} alt="Perfil" className="rounded-circle" width="50" height="50"/>
                <div className="d-flex flex-column pl-3 pr-4 fs-15">
                    <span className="text-purple font-weight-bold">
                        André Moraes
                    </span>
                    <span className="text-grey-1">
                        Nome Cargo
                    </span>
                </div>
            </div>
            <div className="d-flex ml-4 mr-6">
                <i className="icon-settings fs-34 text-grey-1"></i>
            </div>
        </Container>
    );
}

export default Header;