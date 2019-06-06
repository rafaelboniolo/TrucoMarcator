import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {iVitoria} from '../interfaces/iMarcator'

export interface Props extends iVitoria{};

const VitoriaPanel = (props:Props) =>(
    <View style = {{flex:1}}>
        <View style={{alignItems:"center"}}>
            <Text style={styles.nome}>Vitórias</Text>
        </View>
        <View style = {styles.box}>
            <View><Text style={styles.nome}>{props.vitoriaA}</Text></View>
            <View><Text style={styles.nome}>{props.vitoriaB}</Text></View>
        </View>
    </View>
 ) 

 
const styles = StyleSheet.create({
    nome:{
      fontSize:30,
      color:"white"
    },
    box:{
      flexDirection:"row",
      justifyContent:"space-around"
    },
  });

export default VitoriaPanel;