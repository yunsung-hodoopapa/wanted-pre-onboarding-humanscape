import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 720px;
  min-height: 234px;
  background-color: #CAE9FF;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = props => {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

export default Layout;
