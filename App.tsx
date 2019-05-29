import React from 'react';
import { Component } from 'react';
import {Overlay} from 'react-native-elements'

import { StyleSheet, Text, View, KeyboardAvoidingView, Button, ImageBackground, TouchableOpacity, RefreshControl, ScrollView, Modal, Alert, TextInput } from 'react-native';

export interface Props{
  pontoA:number,
  pontoB:number,
  truco:number,
  vitoriaA:number,
  vitoriaB:number,
  visibleA:boolean,
  visibleB:boolean,
  nameA:string,
  nameB:string
}

interface State extends Props{}

export default class App extends React.Component<Props, State>{

  constructor(props:Props){
    super(props);

    this.state = {
      pontoA:0,
      pontoB:0,
      truco: 0,
      vitoriaA:0,
      vitoriaB:0,
      visibleA:false,
      visibleB:false,
      nameA:"Nós",
      nameB:"Eles"
    }
    
  }

  render(){
    return(
       <ImageBackground style={{flex:1}} source={{uri:"https://img.freepik.com/vetores-gratis/projeto-de-fundo-escuro-abstrato-de-meio-tom_1017-15505.jpg?size=338&ext=jpg"}}>  
          
          
          <Overlay 
            isVisible={this.state.visibleA}
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor="#FFF"
            width="auto"
            height="auto"
            onBackdropPress={() => this.setState({ visibleA: false })}>
            <View>
              <Text>{this.state.nameA}</Text>
              <TextInput autoFocus onChangeText={
                  x => x.length < 8? 
                  this.setState({"nameA":x}) :
                  this.setState({"nameA":x.substr(0,10).concat('..')}) 
                  }/>
            </View>
          </Overlay>

          <Overlay 
            isVisible={this.state.visibleB}
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor="#FFF"
            width="auto"
            height="auto"
            onBackdropPress={() => this.setState({ visibleB: false })}>
            <View>
              <Text>{this.state.nameB}</Text>
              <TextInput autoFocus onChangeText={
                  x => x.length < 8?
                  this.setState({"nameB":x}) :
                   this.setState({"nameB":x.substr(0,10).concat('..')})
                   }/>
            </View>
          </Overlay>


          <View style={{flex: 1.0, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:40, fontStyle:"italic", color:"white" }}> Truco Marcator</Text>
          </View>
          
          <View style = {{flex:1.6, justifyContent:"center"}}>
            <View style={styles.box}>
              <View><Text  style={styles.nome} onLongPress = {()=>{this.setState({'visibleA':true})}}>{this.state.nameA}</Text></View>
              <View><Text style={styles.nome} onLongPress = {()=>{this.setState({'visibleB':true})}}>{this.state.nameB}</Text></View>
            </View>
              
            <View style = {[{flex:0.6}, styles.box]}>
                <View>
                  <TouchableOpacity style={styles.button} onPressIn={
                    async ()=> {
                      await
                      this.state.pontoA <= 0?"":
                       this.state.truco == 0 
                            ? this.setState({'pontoA':this.state.pontoA-1})
                            : ""
 
                      this.setState({"truco":0})}
                  }>
                    <Text style={styles.textButton}>-</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.button} onPressIn={
                    async ()=>{
                      await 
                      this.state.pontoB <= 0?"":
                        this.state.truco == 0 
                            ? this.setState({'pontoB':this.state.pontoB-1})
                            : ""                     
                        
                        this.setState({"truco":0})}
                  }>
                    <Text  style={styles.textButton}>-</Text>
                  </TouchableOpacity>
                </View>
            </View>  

            <View style={styles.box}>
              <View><Text style={{fontSize:50, color:"white"}}>{this.state.pontoA}</Text></View>
              <View><Text style={{fontSize:50, color:"white"}}>{this.state.pontoB}</Text></View>
            </View>
          </View>
            
            <View style = {[{flex:0.6}, styles.box]}>
            <View>
                  <TouchableOpacity style={styles.button} onPressIn={
                    async ()=>{
                      await this.state.truco == 0 
                            ? this.setState({'pontoA':this.state.pontoA+1})
                            : this.setState({'pontoA':this.state.pontoA+this.state.truco});
                        
                        this.state.pontoA >=12? (this.setState({"vitoriaA":this.state.vitoriaA+1}), this.setState({'pontoB':0}), this.setState({'pontoA':0})):""
                        
                        this.setState({"truco":0})}
                 }>
                    <Text  style={styles.textButton}>+</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.button} onPressIn={
                    async ()=>{
                      await this.state.truco == 0 
                            ? this.setState({'pontoB':this.state.pontoB+1})
                            : this.setState({'pontoB':this.state.pontoB+this.state.truco});
                        
                        this.state.pontoB >=12? (this.setState({"vitoriaB":this.state.vitoriaB+1}), this.setState({'pontoA':0}), this.setState({'pontoB':0})):""
                        
                        this.setState({"truco":0})}
                  }>
                    <Text  style={styles.textButton}>+</Text>
                  </TouchableOpacity>
                </View>
            </View>

           
            <View style = {{flex:1.2}}>
              <View>
                <Text style={{alignSelf:"center", fontSize:55, color:"white"}}>{this.state.truco==0?1:this.state.truco}</Text>
                <TouchableOpacity style={{backgroundColor:"#2875ef", marginHorizontal:30, borderRadius:8, paddingVertical:3}} onPressIn={
                  () => {
                      this.state.truco <=9 ? 
                        this.setState({"truco":this.state.truco+3}):"" }
                }>
                  <Text style={[styles.textButton, {fontSize:25, alignSelf:"center", fontStyle:"italic"}]}>Truco</Text>  
                </TouchableOpacity>
              </View>
            </View>

            <View style = {{flex:1}}>
              <View style={{alignItems:"center"}}>
                <Text style={{fontSize:25, color:"white"}}>Vitórias</Text>
              </View>
              <View style = {styles.box}>
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
    fontSize:30,
    color:"white"
  },
  titulos:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  box:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  textButton:{
    fontSize:40,
    color:"white",
    fontWeight:"bold"
  },
  button:{
    paddingHorizontal:20,
    paddingVertical:12
  }
});
 
