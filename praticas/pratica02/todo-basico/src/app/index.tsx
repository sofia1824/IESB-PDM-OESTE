import { View, Text } from 'react-native';
export default function(){
  return(
    < View style={{ flex:1, justifyContent: 'center', alignItems: 'center', padding: 20    }} >
    <Text style={{  fontSize: 20, fontWeight:'bold' }}> Programação para Dispositivos Móveis</Text>
    <Text style={{ fontSize: 18 }}> Olá, Sofia!</Text>
    <Text style={{ fontSize:  16, marginTop:10 }}> Meu sugundo passo com o Expop e React Native</Text>
   
    </View>
  );
  }