import React from 'react';
import {HighlightComponent} from '../HighlightCard';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  Usergreeting,
  UserName,
  Icon,
  HighlightCards,
} from './styles';

function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/73440063?v=4',
              }}
            />

            <User>
              <Usergreeting>Olá</Usergreeting>
              <UserName>Luccas</UserName>
            </User>
          </UserInfo>
          <Icon name="power-off" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightComponent />
        <HighlightComponent />
        <HighlightComponent />
        <HighlightComponent />
      </HighlightCards>
    </Container>
  );
}

export default Dashboard;
