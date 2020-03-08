import React, {ReactElement} from 'react';

import Container from './styles';
import { Menu, MenuItem } from '../index'

interface Props {
    className?: string;
    children: ReactElement<typeof MenuItem> | Array<ReactElement<typeof MenuItem>>;
}

const MenuSub: React.FC<Props> = props => {
    
    const { className, children } = props;

    return (
        <Container className={className}>
            <Menu tag={false}>
                {children}
            </Menu>
        </Container>
    );
}

export default MenuSub;