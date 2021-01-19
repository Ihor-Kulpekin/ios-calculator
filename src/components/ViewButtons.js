import React from "react";
import { View, StyleSheet } from "react-native";
import MyButton from "./MyButton";

const ViewButtons = ({calculate}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MyButton title="С" onPress={()=>calculate('clear')} light="light"/>
        <MyButton title="+/-" onPress={()=>calculate('posneg')} light="light"/>
        <MyButton title="%" onPress={()=>calculate('percentage')} light="light"/>
        <MyButton title="/" onPress={()=>calculate('operator','/')} last={true}/>
      </View>
      <View style={styles.row}>
        <MyButton title="7" onPress={()=>calculate('number',7)} dark="dark"/>
        <MyButton title="8" onPress={()=>calculate('number',8)} dark="dark"/>
        <MyButton title="9" onPress={()=>calculate('number',9)} dark="dark"/>
        <MyButton title="x" onPress={()=>calculate('operator','x')} last={true}/>
      </View>
      <View style={styles.row}>
        <MyButton title="4" onPress={()=>calculate('number',4)} dark="dark"/>
        <MyButton title="5" onPress={()=>calculate('number',5)} dark="dark"/>
        <MyButton title="6" onPress={()=>calculate('number',6)} dark="dark"/>
        <MyButton title="—" onPress={()=>calculate('operator','—')} last={true}/>
      </View>
      <View style={styles.row}>
        <MyButton title="1" onPress={()=>calculate('number',1)} dark="dark"/>
        <MyButton title="2" onPress={()=>calculate('number',2)} dark="dark"/>
        <MyButton title="3" onPress={()=>calculate('number',3)} dark="dark"/>
        <MyButton title="+" onPress={()=>calculate('operator','+')} last={true}/>
      </View>
      <View style={styles.row}>
        <MyButton title="0" onPress={()=>calculate('number',0)} dark="dark" zero={true}/>
        <MyButton title="." onPress={()=>calculate('number','.')} dark="dark"/>
        <MyButton title="=" onPress={()=>calculate('equal')} last={true}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  button: {
    color: 'white'
  }
});

export default ViewButtons;
