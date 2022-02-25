import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { useResults } from '../util/util';
import { BiSearchAlt2 } from 'react-icons/bi';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
  background-color: #ffffff;
  border-radius: 42px;
  lint-height: 25.6px;
`;

const searchedUl = styled.ul`
  display: flex;
`;

const SearchedItem = styled.li`
  padding: 5px 0px 5px 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #efefef;
  list-style: none;
  &:hover {
    background: #cae9ff;
    color: #ffffff;
  }
  cursor: pointer;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
`;

const ResultField = ({ inputValue, setInputValue }) => {
  const queryClient = useQueryClient();

  const { status, data, error } = useResults(inputValue);

  const onHandleList = (name) => {
    setInputValue(name);
  };

  const getDataByStatus = () => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'error':
        return <span>Error: {error.message}</span>;
      default:
        return (
          <ul>
            {data?.map(item => {
              return (
                <SearchedItem
                  key={item.id}
                  value={item.name}
                  onClick={() => onHandleList(item.name)}
                >
                  {item.name}
                </SearchedItem>
              );
            })}
          </ul>
        );
    }
  };

  return data ? <Wrapper>{getDataByStatus()}</Wrapper> : null;
};

export default ResultField;
