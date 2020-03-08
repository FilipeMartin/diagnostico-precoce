import React from 'react';
import { Menu, MenuItem, MenuSub } from 'components/Menu';
import Header from 'components/Header'; 

import Container from './styles';
import Routes from './routes';

const Dashboard = () => {
    //const BASE_URL = process.env.REACT_APP_BASE_URL;

    const menu: Array<any> = [
        { text: 'Meu Dashboard', icon: 'icon-logo', path: 'meu-dashboard' },
        { text: 'Cadastrar Paciente',icon: 'icon-add',path: 'cadastrar-paciente' },
        { text: 'Consultar Pacientes', icon: 'icon-user-group', path: 'consultar-paciente' },
        { text: 'Exames Pendentes de Agendamento', icon: 'icon-hourglass', path: 'exames-pendentes-agendamento' },
        { text: 'Exames Agendados', icon: 'icon-calendar', path: 'exames-agendados' },
        { text: 'Exames Pendentes de Devolutiva', icon: 'icon-update', path: 'exames-pendentes-devolutiva' },
        { text: 'Exames Realizados', icon: 'icon-confirm', path: 'exames-realizados' },
        { text: 'Exames Perdidos', icon: 'icon-worning', path: 'exames-perdidos' },
        { text: 'Banco de Conhecimento', icon: 'icon-file-all', path: 'banco-conhecimento' },
        { text: 'Gerador de Relatórios', icon: 'icon-file', path: 'gerador-relatorios' },
        { text: 'Configurações Sistema', icon: 'icon-config', path: 'configuracoes-sistema' },
    ];

    return (
        <Container>
            <Header className="header" />
            <Menu className="menu">
                {menu.map((item: any, index: number) => (
                    <MenuItem key={index} title={item.text} icon={item.icon} path={item.path} >
                        {item.children && item.children.length > 0 &&
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
                <Routes />
            </main>
        </Container>
    );
}

export default Dashboard;