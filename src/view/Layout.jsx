import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-cotent: center;
  align-items: center;
  flex-direction: column
  top: 0;
  left: 0;
  width: 1280px;
  min-height: 234px;
  background-color: #CAE9FF;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
`;

const Layout = props => {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

export default Layout;