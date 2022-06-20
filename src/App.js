import React, { useState, useRef } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import Logo from './components/Logo';
import Result from './components/Result';
import Error from './components/Error';
import { Container, SearchView, Input, ButtonView, SearchBtn, ResetBtn, TextBtn } from './styles'
import api from './services/api';
import Icon from 'react-native-vector-icons/Feather';

console.disableYellowBox=true;

export default function App() {
  const inputRef = useRef(null);

  const [cep, setCep] = useState('');
  const [dataCep, setDataCep] = useState('');
  const [result, setResult] = useState(false);
  const [error, setError] = useState(false);

  async function searchCep(){
    if(cep === ''){
      alert('Preencha o campo para buscar o CEP!')
      return;
    }
    
    if(result){
      setResult(false);
    }

    try{
      const response = await api.get(`/${cep}/json`);

      setDataCep(response.data);
      setResult(true);
      Keyboard.dismiss();
      setError(false);
      setCep('');
    }catch(err){
      Keyboard.dismiss();
      setCep('');
      setError(true);
    }
    
  }
  
  function reset(){
    inputRef.current.focus();

    setCep('');
    setDataCep('');
    setResult(false);
    setError(false);
  }

  return (
    <Container>
      <StatusBar backgroundColor="#181920" barStyle='light-content'/>
      <Logo/>
      <SearchView>
        <Input
        placeholder="Ex: 01007-060"
        keyboardType="numeric"
        value={cep}
        onChangeText={ (text) => setCep(text) }
        ref={inputRef}
        />
        <ButtonView>
          <SearchBtn onPress={searchCep}>
            <TextBtn>
              Pesquisar CEP
            </TextBtn>
          </SearchBtn>
          <ResetBtn onPress={reset}>
            <TextBtn>
              <Icon name="rotate-ccw" size={24} color="#FFF" />
            </TextBtn>
          </ResetBtn>
        </ButtonView>
        {result && <Result data={dataCep}/>}
        {error && <Error/>}
      </SearchView>
    </Container>
  );
}