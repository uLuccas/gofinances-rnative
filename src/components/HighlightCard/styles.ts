import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import IconPower from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  width: ${RFValue(300)}px;
  margin-right: 20px;
  border-radius: 5px;
  border: solid 1px ${({theme}) => theme.colors.primary};
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)};
  height: ${RFValue(120)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const Icon = styled(IconPower)`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.success};
`;

export const Footer = styled.View`
  padding: 0px 10px;
  color: ${({theme}) => theme.colors.background};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  margin-bottom: 10px;
`;

export const LastTransaction = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(10)}px;
`;
