import styled from 'styled-components';
import Board from './components/Board';

const Wrapper = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

function App() {
    return (
        <Wrapper>
            <Board />
        </Wrapper>
    );
}

export default App;
