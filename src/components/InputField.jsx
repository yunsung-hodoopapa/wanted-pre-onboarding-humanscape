import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

const Wrapper = styled.div`
  display: flex;
  width: 660px;
  height: 64.7969px;
  position: relative;
  background-color: #ffffff;
  border-radius: 42px;
  lint-height: 25.6px;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  line-height: 28.8px;
  width: 660px;
  padding: 20px 24px;
  font-weight: 400;
  font-size: 16px;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
`;

const Div = styled.div`
  padding-right: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 22.69px;
  padding: 1px 2px;
  border: none;
  outline: none;
  cursor: text;
  font-size: 18px;
  line-height: 20.7px;
  text-align: start;
`;

const Button = styled.button`
  width: 94.76px;
  padding: 12px 24px;
  cursor: pointer;
  line-height: 18px;
  border-width: 0;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;
  background-color: #007be9;
  color: #ffffff;
  font-size: 1.12rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.018em;
`;

const InputField = () => {
  const [text, setText] = useState('');
  const onChangeInput = e => {
    setText(e.target.value);
  };
  return (
    <Wrapper>
      <InputFieldWrapper>
        <IconContainer>
          <BiSearchAlt2 />
        </IconContainer>
        <Div />
        <Input
          type={text}
          onChange={onChangeInput}
          placeholder="질환명을 입력해주세요"
        />
      </InputFieldWrapper>
      <Button>검색</Button>
    </Wrapper>
  );
};

export default InputField;
