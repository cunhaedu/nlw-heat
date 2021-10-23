import React, { useEffect, useState } from 'react';

import {
  ScrollView,
  View
} from 'react-native';
import { IMessage } from '../../interfaces/IMessage';
import { IUser } from '../../interfaces/IUser';
import { api } from '../../services/api';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList(){
  // const [messages, setMessages] = useState<IMessage[]>([]);

  // useEffect(() => {
  //   api.get<IMessage[]>('messages').then(data => {
  //     const { data: response } = data;

  //     console.log(response);

  //     setMessages(response);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }, []);

  const message: IMessage = {
    text: 'olá',
    id: '1234',
    created_at: new Date(),
    user: {
      avatar_url: 'https://github.com/cunhaedu.png',
      name: 'Eduardo',
      id: '2345'
    } as IUser
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      {/* {messages.length && (
        <>
          <Message data={message} />
          <Message data={message} />
          <Message data={message} />
        </>
      )} */}
    </ScrollView>
  );
}
