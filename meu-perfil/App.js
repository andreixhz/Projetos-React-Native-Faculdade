import React from 'react';
import { View, Text, Image } from 'react-native';
 
function App(){
  return(
    <View style={{alignItems: 'center'}}>
      <Text>Meu Perfil</Text>
  
<Image
source={{ uri: 'https://static.wixstatic.com/media/f18a74_6d31ada3024248779e7234d1fe63da98~mv2.jpg/v1/fit/w_2500,h_1330,al_c/f18a74_6d31ada3024248779e7234d1fe63da98~mv2.jpg' }}
style={{ width: 100, height: 150}}
/>
      <Text>Dados Pessoais</Text>
      <Text>Cássio Silva</Text>
      <Text>Formação</Text>
      <Text>ADS Análise e Desenvolvimento de Sistema</Text>
      <Text>Experiência</Text>
      <Text>Gestão Telecom</Text>
      <Text>Projetos</Text>
      <Text>Rede Telecom Óptica e Metálica - Diversas</Text>
    </View>
  )}




export default App;
