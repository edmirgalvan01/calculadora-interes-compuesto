import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Input from './components/Input';

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
   const handleSubmit = () => {};

   return (
      <Container>
         <Section>
            <Formik
               initialValues={{
                  deposit: '',
                  contribution: '',
                  years: '',
                  rate: '',
               }}
               onSubmit={handleSubmit}
            >
               <Form>
                  <Input name='deposit' label='Deposito inicial' />
                  <Input name='contribution' label='Contribucion anual' />
                  <Input name='year' label='Años' />
                  <Input name='rate' label='Interes estimado' />
               </Form>
            </Formik>
         </Section>
      </Container>
   );
}

export default App;
