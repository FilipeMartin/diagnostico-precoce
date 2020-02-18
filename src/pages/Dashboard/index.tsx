import React from 'react';
import Container from './styles';
import { Menu, MenuItem, MenuSub } from 'components/Menu';
import Header from 'components/Header';

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
                {menu.map((item: any) => (
                    <MenuItem title={item.text} icon={item.icon} path={item.path} >
                        {item.children.length > 0 &&
                            <MenuSub>
                                {item.children.map((subItem: any) => (
                                    <MenuItem title={subItem.text} icon={subItem.icon} path={subItem.path} />
                                ))}
                            </MenuSub>
                        }
                    </MenuItem>
                ))}
            </Menu>
            {/* <Menu>
                <MenuItem title="Meu Dashboard" icon="icon-logo" path="/" />
                <MenuItem title="Configurações Sistema" icon="icon-config" path="/">
                    <MenuSub>
                        <MenuItem title="Cadastrar Paciente" icon="icon-add" path="/" />
                        <MenuItem title="Consultar Pacientes" icon="icon-user-group" path="/">
                            <MenuSub>
                                <MenuItem title="Cadastrar Paciente" icon="icon-add" path="/" />
                                <MenuItem title="Consultar Pacientes" icon="icon-user-group" path="/" >
                                    <MenuSub>
                                        <MenuItem title="Cadastrar Paciente" icon="icon-add" path="/" />
                                        <MenuItem title="Consultar Pacientes" icon="icon-user-group" path="/" />
                                    </MenuSub>
                                </MenuItem>
                                <MenuItem title="Consultar Pacientes" icon="icon-user-group" path="/" />
                            </MenuSub>
                        </MenuItem>
                        <MenuItem title="Meu Dashboard" icon="icon-logo" path="/" />
                    </MenuSub>
                </MenuItem>
                <MenuItem title="Cadastrar Paciente" icon="icon-add" path="/" />
                <MenuItem title="Consultar Pacientes" icon="icon-user-group" path="/" />
            </Menu> */}
            <main>
                <p>Conteúdo</p>
            </main>
        </Container>
    );
}

export default Dashboard;