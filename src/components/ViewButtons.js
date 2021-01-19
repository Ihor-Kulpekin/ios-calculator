import React from "react";
import { View, StyleSheet } from "react-native";
import MyButton from "./MyButton";

const ViewButtons = ({calculate, findFirst, setOperation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MyButton title="С" onPress={()=>{
          setOperation('C');
          calculate()
        }}/>
        <MyButton title="+/-" onPress={calculate}/>
        <MyButton title="%" onPress={setOperation}/>
        <MyButton title="/" onPress={setOperation} last={true}/>
      </View>
      <View style={styles.row}>
        <MyButton title="7" onPress={()=>findFirst(7)}/>
        <MyButton title="8" onPress={()=>findFirst(8)}/>
        <MyButton title="9" onPress={()=>findFirst(9)}/>
        <MyButton title="x" onPress={calculate} last={true}/>
      </View>
      <View style={styles.row}>
        <MyButton title="4" onPress={()=>findFirst(4)}/>
        <MyButton title="5" onPress={()=>findFirst(5)}/>
        <MyButton title="6" onPress={()=>findFirst(6)}/>
        <MyButton title="—" onPress={setOperation} last={true}/>
      </View>
      <View style={styles.row}>
        <MyButton title="1" onPress={()=>findFirst(1)}/>
        <MyButton title="2" onPress={()=>findFirst(2)}/>
        <MyButton title="3" onPress={()=>findFirst(3)}/>
        <MyButton title="+" onPress={()=>setOperation("+")} last={true}/>
      </View>
      <View style={styles.row}>
        <MyButton title="0" onPress={()=>findFirst(0)} zero={true}/>
        <MyButton title="," onPress={calculate}/>
        <MyButton title="=" onPress={calculate} last={true}/>
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
