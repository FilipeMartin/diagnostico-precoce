import React, { Suspense, lazy } from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';

import MeuDashboard from './pages/MeuDashboard';
// import CadastrarPaciente from './pages/CadastrarPaciente';
import ConsultarPaciente from './pages/ConsultarPaciente';
import ExamesPendentesAgendamento from './pages/ExamesPendentesAgendamento';
import ExamesAgendados from './pages/ExamesAgendados';
import ExamesPendentesDevolutiva from './pages/ExamesPendentesDevolutiva';
import ExamesRealizados from './pages/ExamesRealizados';
import ExamesPerdidos from './pages/ExamesPerdidos';
import BancoConhecimento from './pages/BancoConhecimento';
import GeradorRelatorios from './pages/GeradorRelatorios';
import ConfiguracoesSistema from './pages/ConfiguracoesSistema';
import NotFound from 'pages/NotFound';

const CadastrarPaciente = React.lazy(() => {
    return new Promise<any>(resolve => {
      setTimeout(() => resolve(import('./pages/CadastrarPaciente')), 5000);
    });
  });
// lazy(() => import('./OtherComponent'));

const Routes = () => {
    const { path } = useRouteMatch(); 

    return (
        <Suspense fallback={<div>Loading 2...</div>}>
            <Switch>
                <Route exact path={`${path}/meu-dashboard`} component={MeuDashboard} />
                <Route exact path={`${path}/cadastrar-paciente`} component={CadastrarPaciente} />
                <Route exact path={`${path}/consultar-paciente`} component={ConsultarPaciente} />
                <Route exact path={`${path}/exames-pendentes-agendamento`} component={ExamesPendentesAgendamento} />
                <Route exact path={`${path}/exames-agendados`} component={ExamesAgendados} />
                <Route exact path={`${path}/exames-pendentes-devolutiva`} component={ExamesPendentesDevolutiva} />
                <Route exact path={`${path}/exames-realizados`} component={ExamesRealizados} />
                <Route exact path={`${path}/exames-perdidos`} component={ExamesPerdidos} />
                <Route exact path={`${path}/banco-conhecimento`} component={BancoConhecimento} />
                <Route exact path={`${path}/gerador-relatorios`} component={GeradorRelatorios} />
                <Route exact path={`${path}/configuracoes-sistema`} component={ConfiguracoesSistema} />
                
                <Redirect exact path={`${path}`} to={`${path}/meu-dashboard`} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Suspense>
    );
}

export default Routes;
