import styled from 'styled-components';
import styles from 'styles/styles.module.scss';

const Container = styled.li`

    display: flex;
    align-items: center;
    position: relative;
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

    &:hover >div:last-child {
        animation: load-menu 1s forwards;
        display: block;

        & ul li:first-child::before {
            animation: load-before 1s forwards;
        }
    }

    &:first-child::before {
        content: "";
        width: 0;
        height: 0;
        top: 0;
        right: 100%;
        padding-left: 35px;
        position: absolute;
        border-top: 30px solid transparent;
        border-bottom: 30px solid transparent;
        border-right: 25px solid ${styles.white};
    }

    &:hover:first-child::before {
        border-right: 25px solid ${styles.white};
    }

    @keyframes load-menu {
        0% {
            transform: translateX(15px);
        }
        100% {
            opacity: 1;
            transform: translateX(-20px);
        }
    }

    @keyframes load-before {
        100% {
            padding-left: 0;
        }
    }
`;

export default Container;