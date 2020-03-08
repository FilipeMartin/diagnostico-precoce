import styled from 'styled-components';

const Container = styled.div`

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 128px auto;
    grid-template-areas: "header header" "aside main";
    height: 100vh;

    .header {
        grid-area: header;
        z-index: 1000;
    }

    .menu {
        grid-area: aside;
    }

    main {
        grid-area: main;
        padding: 25px;
    }
`;

export default Container;
