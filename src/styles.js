import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #181920;
align-items: center;
padding: 30px;
`;

export const SearchView = styled.View`
margin-top: 80px;
width: 100%;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999999'
})`
background-color: #252A34;
border-radius: 25;
height: 50;
padding: 0 20px;
font-size: 16;
color: #FFFFFF;
`;

export const ButtonView = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 15px 0;
`;

export const SearchBtn = styled.TouchableOpacity`
background-color: #5568FE;
width: 82%;
height: 50;
border-radius: 25;
align-items: center;
justify-content: center;
`;

export const ResetBtn = styled.TouchableOpacity`
background-color: #5568FE;
width: 50px;
height: 50px;
border-radius: 25;
align-items: center;
justify-content: center;
`;

export const TextBtn = styled.Text`
color: #FFFFFF;
font-size: 16;
font-weight: 600;
letter-spacing: .8;
`;