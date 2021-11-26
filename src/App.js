import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
`;

const Section = styled.section`\
   background-color:#eee;
   border-top: 2px solid palevioletred;
   padding: 20px 25px;
   width: 50%;
   align-items: center;
`;

function App() {
   return (
      <Container>
         <Section>Hola mundo</Section>
      </Container>
   );
}

export default App;
