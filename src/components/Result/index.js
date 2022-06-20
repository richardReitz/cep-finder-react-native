import React from 'react';
import { ResultView, ResultWrap, Title, SubTitle, ResultText } from './styles';

export default function Result({data}) {
    return (
        <ResultView>
            <Title>
                CEP encontrado:
            </Title>
            <ResultWrap>
                <SubTitle>CEP:</SubTitle>
                <ResultText>{data.cep}</ResultText>    
            </ResultWrap>
            <ResultWrap>
                <SubTitle>Logradouro:</SubTitle>
                <ResultText>{data.logradouro}</ResultText> 
            </ResultWrap>
            <ResultWrap>
                <SubTitle>Bairro:</SubTitle>
                <ResultText>{data.bairro}</ResultText>  
            </ResultWrap>
            <ResultWrap>
                <SubTitle>Cidade:</SubTitle>
                <ResultText>{data.localidade}</ResultText>
            </ResultWrap>
            <ResultWrap>
                <SubTitle>Estado:</SubTitle>
                <ResultText>{data.uf}</ResultText>
            </ResultWrap>
        </ResultView>
    );
}