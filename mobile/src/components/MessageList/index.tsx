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
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    api.get<IMessage[]>('messages').then(data => {
      const { data: response } = data;

      console.log(response);

      setMessages(response);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      {messages.map(message => <Message key={message.id} data={message} />)}
    </ScrollView>
  );
}
