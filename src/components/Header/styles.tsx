import styled from 'styled-components';

import styles from 'styles/styles.module.scss';
import logo from 'assets/logo.png';

const Container = styled.header`
    display: flex;
    align-items: center;
    background: ${styles.white};
    box-shadow: 1px 1px 5px ${styles.greyLight};

    .logo {
        width: 168px;
        height: 68px;
        background: url(${logo}) no-repeat center;
    }

    .border-left {
        border-left: 2px solid ${styles.greyLight} !important;
    }

    .border-right {
        border-right: 2px solid ${styles.greyLight} !important;
    }

    .show {
        .dropdown-toggle i {
            color: ${styles.purple} !important;
        }
    }
`;

export default Container;

export const DropdownToggle = styled.a`

    cursor: pointer;

    &::before {
        display: none !important;
    }
`;