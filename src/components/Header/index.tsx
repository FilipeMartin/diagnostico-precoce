import React from 'react';
import { Dropdown } from 'react-bootstrap';

import Container, { DropdownToggle } from './styles';
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
            <Dropdown drop="left">
                <Dropdown.Toggle as={DropdownToggle} id="menu-config" className="ml-4 mr-6">
                    <i className="icon-settings text-grey-1 fs-34"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Sair</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    );
}

export default Header;