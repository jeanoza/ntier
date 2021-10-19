import "./App.css";
import styled from "styled-components";
import Table from "./Table";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
`;

function App() {
  return (
    <>
      <Title>Quelle téléphone vous faut-il ?</Title>
      <Table />
    </>
  );
}

export default App;
