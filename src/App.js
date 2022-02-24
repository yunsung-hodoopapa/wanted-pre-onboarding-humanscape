


import React from 'react';
import styled from 'styled-components';

import Layout from './view/Layout';
import HeadLine from './components/HeadLine';
import InputField from './components/InputField';
import ResultField from './components/ResultField';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 290px 0px;
  max-width: 700px;
  width: 700px;
  padding: 20px 0px;
`;

function App() {
  return (
    <Layout>
      <Container>
        <HeadLine />
        <InputField />
        <br />
        <ResultField />
      </Container>
    </Layout>
  );
}

export default App;
