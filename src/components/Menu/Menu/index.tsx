import React from 'react';
import Container from './styles';

interface Props {
    tag?: boolean;
    className?: string
}

const Menu: React.FC<Props> = props => {
    const { tag = true, className, children } = props;

    const container = <Container className={className}>{children}</Container>;

    return (
        <>
        { tag ? <aside>{container}</aside> : <>{container}</> }
        </>
    );
}

export default Menu;