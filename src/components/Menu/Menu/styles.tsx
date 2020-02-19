import styled from 'styled-components';
import styles from 'styles/styles.module.scss';

const Container = styled.ul`
    
    width: 250px;
    height: 100%;
    background: ${styles.white};
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    box-shadow: 2px 0px 6px ${styles.greyLight};
`;

export default Container;