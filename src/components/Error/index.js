import React from 'react';
import { ErrorView, Title, ErrorText } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function Error() {
    return (
        <ErrorView>
            <Title>
                CEP não encontrado!
            </Title>
            <Icon name="frown" size={55} color="#999" />
            <ErrorText>
                Verifique se está correto e tente novamente!
            </ErrorText>
        </ErrorView>
    );
}