import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import InputView from "./src/components/InputView";
import ViewButtons from "./src/components/ViewButtons";

export default function App() {
  const [result, setResult] = useState("0");
  const [operation, setOperation] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const calculate = (operation, value) => {
    if (operation === "number") {
      setResult(`${result}${value}`);
    }

    if (operation === "operator") {
      setOperation(value);
      setPrevValue(result);
      setResult("0");
    }

    if (operation === "clear") {
      setResult("0");
      setOperation(null);
      setPrevValue(null);
    }

    if (operation === "posneg") {
      setResult(`${parseFloat(result) * -1}`);
    }

    if(operation==='percentage'){
      setResult(`${parseFloat(result)*0.01}`)
    }

    if(operation === 'equal'){
      const current = parseFloat(result);
      const previous = parseFloat(prevValue);

      if(operation === '+'){
        setResult(previous+current);
        setOperation(null);
        setPrevValue(null);
      }

      if(operation === '/'){
        setResult(previous/current);
        setOperation(null);
        setPrevValue(null);
      }

      if(operation === '—'){
        setResult(previous-current);
        setOperation(null);
        setPrevValue(null);
      }

      if(operation === 'x'){
        setResult(previous*current);
        setOperation(null);
        setPrevValue(null);
      }

    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputView result={result}/>
        <ViewButtons calculate={calculate}
                     setOperation={setOperation}
                     findFirst={findFirst}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black"
  },
  container: {
    flex: 1,
    padding: 20
  }
});
