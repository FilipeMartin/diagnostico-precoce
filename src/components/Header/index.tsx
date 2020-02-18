import React from 'react';
import Container from './styles';

interface Props {
    className?: string;
}

const Header: React.FC<Props> = props => {

    const { className } = props; 

    return (
        <Container className={className}>
            Header
        </Container>
    );
}

export default Header;