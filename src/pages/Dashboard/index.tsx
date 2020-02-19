import React from 'react';
import Container, { Teste } from './styles';
import { Menu, MenuItem, MenuSub } from 'components/Menu';
import Header from 'components/Header';
import { Dropdown } from 'react-bootstrap';

const Dashboard = () => {
    const menu: Array<any> = [
        {
            text: 'Meu Dashboard',
            icon: 'icon-logo',
            path: '/dashboard',
            children: [
                { text: 'Meu Dashboard', icon: 'icon-logo', path: '/dashboard' },
                { text: 'Meu Dashboard 2', icon: 'icon-logo', path: '/dashboard' },
                { text: 'Meu Dashboard 3', icon: 'icon-logo', path: '/dashboard' },
            ]
        },
        {
            text: 'Cadastrar Paciente',
            icon: 'icon-add',
            path: '/dashboard',
            children: [
                { text: 'Cadastrar Paciente', icon: 'icon-logo', path: '/dashboard' },
                { text: 'Cadastrar Paciente 1', icon: 'icon-logo', path: '/dashboard' },
                { text: 'Cadastrar Paciente 2', icon: 'icon-logo', path: '/dashboard' },
                { text: 'Cadastrar Paciente 3', icon: 'icon-logo', path: '/dashboard' },
                { text: 'Cadastrar Paciente 4', icon: 'icon-logo', path: '/dashboard' },
            ]
        },
        { text: 'Consultar Pacientes', icon: 'icon-user-group', path: '/dashboard', children: [] },
        { text: 'Exames Pendentes de Agendamento', icon: 'icon-hourglass', path: '/dashboard', children: [] },
        { text: 'Exames Agendados', icon: 'icon-calendar', path: '/dashboard', children: [] },
        { text: 'Exames Pendentes de Devolutiva', icon: 'icon-update', path: '/dashboard', children: [] },
        { text: 'Exames Realizados', icon: 'icon-confirm', path: '/dashboard', children: [] },
        { text: 'Exames Perdidos', icon: 'icon-worning', path: '/dashboard', children: [] },
        { text: 'Banco de Conhecimento', icon: 'icon-file-all', path: '/dashboard', children: [] },
        { text: 'Gerador de Relatórios', icon: 'icon-file', path: '/dashboard', children: [] },
        { text: 'Configurações Sistema', icon: 'icon-config', path: '/dashboard', children: [] },
    ];

    return (
        <Container>
            <Header className="header" />
            <Menu className="menu">
                {menu.map((item: any, index: number) => (
                    <MenuItem key={index} title={item.text} icon={item.icon} path={item.path} >
                        {item.children.length > 0 &&
                            <MenuSub>
                                {item.children.map((subItem: any, index: number) => (
                                    <MenuItem key={index} title={subItem.text} icon={subItem.icon} path={subItem.path} />
                                ))}
                            </MenuSub>
                        }
                    </MenuItem>
                ))}
            </Menu>
            <main>
                <Dropdown>
                    <Dropdown.Toggle as={Teste} id="teste">
                        <i className="icon-settings fs-34 text-grey-1"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-3">Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </main>
        </Container>
    );
}

export default Dashboard;