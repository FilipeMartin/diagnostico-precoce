import React from 'react';
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
       <Container className={className}>
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
       </Container>
    );
}

export default MenuItem;