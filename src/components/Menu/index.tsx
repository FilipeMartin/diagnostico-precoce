import React from 'react';
import Container from './styles';

interface Props {
    
}

export const Menu: React.FC<Props> = () => {

    return (
        <Container>
            <li className="active">
                <span className="fs-22 mr-3">
                    <i className="icon-ampulheta"></i>
                </span>
                Exames Pendentes de Devolutiva
            </li>
            <li>
                <span className="fs-22 mr-3">
                    <i className="icon-ampulheta"></i>
                </span>
                Configuração
            </li>
        </Container>
    );
}

export default Menu;