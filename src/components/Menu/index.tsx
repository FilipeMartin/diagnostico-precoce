import React from 'react';
import Container from './styles';

interface Props {
    
}

export const Menu: React.FC<Props> = () => {
    return (
        <Container>
            <li className="active">
                <i className="icon-ampulheta fs-18"></i> Perfil
            </li>
            <li>
                Configuração
            </li>
        </Container>
    );
}

export default Menu;