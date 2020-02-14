import React from 'react';
import styled from 'styled-components';
import styles from '../../styles/styles.module.scss';

const Container = styled.ul`

    display: flex;
    flex-direction: column;
    max-width: 250px;
    list-style: none;
    padding: 0;
    box-shadow: 2px 0px 6px ${styles.greyLight};

    li {
        display: flex;
        align-items: center;
        background-color: ${styles.white};
        height: 60px;
        padding: 0 1rem;
        font-size: 14px;
        color: ${styles.grey};
        border-bottom: solid 1px ${styles.greyLight};
        transition: all ease-in 200ms;
        cursor: pointer;

        &:hover, 
        &.active {
            background-image: linear-gradient(#682B8F, #A0238E);
            color: ${styles.white};
        }
    }
    
`;

export default Container;