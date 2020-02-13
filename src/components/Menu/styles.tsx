import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
    max-width: 250px;
    background: red;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;

    li {
        background-color: #FFF;
        padding: 18px;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        border-bottom: solid 1px #DBDBDB;
        color: red !important;
        cursor: pointer;

        /* &.active {
            background-image: linear-gradient(#682B8F, #A0238E);
            color: #FFF !important;
        }  */

        /* i:before {
            color: #FFF !important;
        }  */
    }
    
`;

export default Container;