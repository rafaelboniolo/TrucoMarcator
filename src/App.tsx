import React from 'react';
import { ImageBackground } from 'react-native';
import MarcatorPage from './pages/MarcatorPage';
import LinearGradient from 'react-native-linear-gradient'

export default class App extends React.Component{

  render(){
    return(
       <ImageBackground style={{flex:1}} source={{uri:"https://img.freepik.com/vetores-gratis/projeto-de-fundo-escuro-abstrato-de-meio-tom_1017-15505.jpg?size=338&ext=jpg"}}>  
          <MarcatorPage></MarcatorPage>
        </ImageBackground>
    );
  }
}


