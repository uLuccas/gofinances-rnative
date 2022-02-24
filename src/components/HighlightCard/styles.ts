import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import IconPower from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)};
`;

export const Header = styled.View``;

export const Title = styled.Text``;

export const Icon = styled(IconPower)``;

export const Footer = styled.View``;

export const Amount = styled.Text``;

export const LastTransaction = styled.Text``;
