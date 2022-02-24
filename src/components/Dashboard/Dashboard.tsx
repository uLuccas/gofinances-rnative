import React from 'react';
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
          {/* <Icon name="power-off" size={30} color={'#f87e0c'} /> */}
        </UserWrapper>
      </Header>
    </Container>
  );
}

export default Dashboard;
