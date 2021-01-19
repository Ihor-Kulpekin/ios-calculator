import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
    background-color: ${({ last }) => last ? "orange" : "gray"};
    width: ${({ zero }) => zero ? "180px" : "90px"};
    height: 90px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;
const StyledText = styled.Text`
font-size: 40px;
color: white;
`;

const MyButton = ({ title, zero = false, last = false, onPress }) => {
  return (
    <Wrapper zero={zero} last={last} onPress={onPress}>
      <StyledText>
        {title}
      </StyledText>
    </Wrapper>
  );
};

export default MyButton;
