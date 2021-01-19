import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  background-color: ${({ last, dark }) => (last ? 'orange' : (dark?'#202020':'#a9a9a9'))};
  width: ${({ zero }) => (zero ? '180px' : '90px')};
  height: 90px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  
`;
const StyledText = styled.Text`
  font-size: 40px;
  color: ${({dark, last})=>dark || last?'white':'black'};
`;

const MyButton = ({ title, zero = false, last = false, onPress, dark }) => {
  return (
    <Wrapper zero={zero} last={last} onPress={onPress} dark={dark}>
      <StyledText dark={dark} last={last}>{title}</StyledText>
    </Wrapper>
  );
};

export default MyButton;
