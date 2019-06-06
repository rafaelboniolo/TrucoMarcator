import React from 'react';
import {Overlay, Image} from 'react-native-elements'
import iMarcator from '../interfaces/iMarcator'
import { StyleSheet, Text, View, KeyboardAvoidingView, Button, ImageBackground, TouchableOpacity, RefreshControl, ScrollView, Modal, Alert, TextInput, ActivityIndicator } from 'react-native';
import VitoriaPanel from '../components/VitoriaPanel';

export interface Props extends iMarcator{}
interface State extends iMarcator{}

export default class MarcatorPage extends React.Component<Props, State>{

  constructor(props:Props){
    super(props);

    this.state = {
      pontoA      :0,
      pontoB      :0,
      truco       :0,
      vitoriaA    :0,
      vitoriaB    :0,
      visibleA    :false,
      visibleB    :false,
      nameA       :"Nós",
      nameB       :"Eles",
      ariba       : false
    }
    
  }

  render(){
    return(
        <View style={{flex:1}}>
            
            <Overlay 
            isVisible={this.state.ariba}
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor="#FFF"
            width="auto"
            height="auto"
            onBackdropPress={()=>this.setState({ariba:false})}
            >
            <Image
              source={{uri:'https://scontent.ftow1-1.fna.fbcdn.net/v/t1.0-9/37912124_2167983593487399_1904873160335949824_n.jpg?_nc_cat=102&_nc_eui2=AeH2_NXN7-dMzRaAGudz7vrbupwQQeSsaLTEKV2xbmG0BDsz7cTz__1t5Q3HljmHH-RvZ4UmnG6MfkNpIwj-uZ2hXdfbYtCoaiiTPXn6a42xjg&_nc_oc=AQmN3EIb46u89zMABdfHxbHADSWTDRRD_I_tk-kFHUrboK4SM2iecF23SwEiKnOBuxg&_nc_ht=scontent.ftow1-1.fna&oh=e550b22b0b9ea86c61821f884eaff48f&oe=5D9FB9C2'}}
              style={{ width: 300, height: 300 }}
              PlaceholderContent={<ActivityIndicator />}
            />
    
          </Overlay>

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
              <View><Text style={styles.nome} onLongPress = {()=>{this.setState({'visibleA':true})}}>{this.state.nameA}</Text></View>
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
                        
                        this.state.pontoA >=12? (
                          this.setState({"vitoriaA":this.state.vitoriaA+1}),
                          this.setState({'pontoB':0}),
                          this.setState({'pontoA':0}),
                          this.setState({ariba:true}),
                          setTimeout(()=>this.setState({ariba:false}),500))
                          :""
                        
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
                        
                        this.state.pontoB >=12? (
                          this.setState({"vitoriaB":this.state.vitoriaB+1}),
                          this.setState({'pontoA':0}), this.setState({'pontoB':0}),
                          this.setState({ariba:true}),
                          setTimeout(()=>this.setState({ariba:false}),500))
                          :""
                        
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

            <VitoriaPanel vitoriaA={this.state.vitoriaA} vitoriaB={this.state.vitoriaB} />
            
        </View>
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
 
