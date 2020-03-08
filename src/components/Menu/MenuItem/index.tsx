import React from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';

import Container from './styles';

interface Props {
    title: string;
    icon: string;
    path: string;
    className?: string;
}

const MenuItem: React.FC<Props> = props => {
    const { title, icon, path, className, children } = props;

    return (
       <Container className={className} >
           <NavLink to={path} >
                <span className="fs-22 mr-3">
                    <i className={icon}></i>
                </span>
                {title}
                {children && (
                    <>
                    <span className="fs-16 ml-auto">
                        <i className="icon-arrow-right"></i>
                    </span>
                    {children}
                    </>
                )}
           </NavLink>
       </Container>
    );
}

export default MenuItem;