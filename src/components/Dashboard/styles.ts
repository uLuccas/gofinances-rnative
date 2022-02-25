import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import IconPower from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  align-items: center;
  padding-top: ${RFPercentage(4)}px;
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;

  justify-content: space-between;
  padding: 0px 24px;
`;

export const UserInfo = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  border-radius: 10px;
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border: solid 1px red;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const Usergreeting = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.black};
  color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(IconPower)`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.secondary};
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: true,
  contentContainerStyle: {paddingHorizontal: 24},
})`
  margin-top: -${RFValue(100)}px;
`;
