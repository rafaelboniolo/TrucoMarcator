import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, KeyboardAvoidingView, Button, ImageBackground } from 'react-native';

export  interface Props{
  pontoA:number,
  pontoB:number,
  truco:number,
  vitoriaA:number,
  vitoriaB:number
}

interface State{
  pontoA:number,
  pontoB:number,
  truco:number,
  vitoriaA:number,
  vitoriaB:number
}

export default class App extends React.Component<Props, State>{

  constructor(props:Props){
    super(props);

    this.state = {
      pontoA:0,
      pontoB:0,
      truco: 0,
      vitoriaA:0,
      vitoriaB:0
    }
    
  }

  render(){
    return(
        <ImageBackground style={{flex:1}} source={{uri:"https://img.freepik.com/vetores-gratis/projeto-de-fundo-escuro-abstrato-de-meio-tom_1017-15505.jpg?size=338&ext=jpg"}}>
          <View></View>  
          <View style={{flex: 2, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:40, fontStyle:"italic", color:"white" }}> Truco Marcator</Text>
          </View>
          
          <View style = {{flex:1.6, justifyContent:"center"}}>
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
              <View><Text style={styles.nome}>Nós</Text></View>
              <View><Text style={styles.nome}>Eles</Text></View>
            </View>
              
            <View style={{flexDirection:"row", justifyContent:"space-around"}}>
              <View><Text style={{fontSize:50, color:"white"}}>{this.state.pontoA}</Text></View>
              <View><Text style={{fontSize:50, color:"white"}}>{this.state.pontoB}</Text></View>
            </View>
          </View>
            
            <View style = {{flex:0.6, flexDirection:"row", justifyContent:"space-around"}}>
                <View>
                  <Button title={"+"} onPress={
                      async ()=> {
                        await this.state.truco == 0 
                              ? this.setState({'pontoA':this.state.pontoA+1})
                              : this.setState({'pontoA':(this.state.pontoA+this.state.truco)});
                                                
                          this.state.pontoA >=12? (this.setState({"vitoriaA":this.state.vitoriaA+1}), this.setState({'pontoA':0}), this.setState({'pontoB':0})):""

                        this.setState({"truco":0})}}/>
                </View>
                <View>
                  <Button title={"+"} onPress={
                  async ()=>{
                      await this.state.truco == 0 
                            ? this.setState({'pontoB':this.state.pontoB+1})
                            : this.setState({'pontoB':this.state.pontoB+this.state.truco});
                        
                        this.state.pontoB >=12? (this.setState({"vitoriaB":this.state.vitoriaB+1}), this.setState({'pontoA':0}), this.setState({'pontoB':0})):""
                        
                        this.setState({"truco":0})}}/>
                </View>
            </View>

          
            <View style = {{flex:1.8}}>
              <View>
                <Text style={{alignSelf:"center", fontSize:55, color:"white"}}>{this.state.truco==0?1:this.state.truco}</Text>
                <Button title={"TRUCO"} onPress={
                    () => {
                      this.state.truco <=9 ? 
                        this.setState({"truco":this.state.truco+3}):"" }}/>
              </View>
            </View>

            <View style = {{flex:1}}>
              <View style={{alignItems:"center"}}>
                <Text style={{fontSize:25, color:"white"}}>Vitórias</Text>
              </View>
              <View style = {styles.titulos}>
                <View><Text style={styles.nome}>{this.state.vitoriaA}</Text></View>
                <View><Text style={styles.nome}>{this.state.vitoriaB}</Text></View>
              </View>
            </View>
        </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  nome:{
    fontSize:30,color:"white"
  },
  titulos:{
    flexDirection:"row",
    justifyContent:"space-around"
  }
});

