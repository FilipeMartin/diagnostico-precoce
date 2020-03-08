import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Container from './styles';

const Login = () => {
    const  history = useHistory();
    
    return (
        <Container>
            <Button type='button' variant='primary' onClick={() => history.push('/dashboard')} >Dashboard</Button>
        </Container>
    );
}

export default Login;