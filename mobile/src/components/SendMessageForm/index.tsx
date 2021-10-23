import React, { useState } from 'react';

import { TextInput, View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance='dark'
        style={styles.input}
        multiline
        maxLength={140}
        placeholder='Qual a sua expectativa para o evento?'
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />
      <Button
        title='Enviar mensagem'
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
      />
    </View>
  );
}
