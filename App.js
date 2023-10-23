import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

const App = () => {
  const [state, setState] = useState(initialState);
  const [safeAreaHeight, setSafeAreaHeight] = useState(0);

  const displayAreaHeight = safeAreaHeight * 0.35;
  const gridAreaHeight = safeAreaHeight - displayAreaHeight;

  // handle tap method
  const handleTap = (type, value) => {
    setState(prevState => calculator(type, value, prevState));
  };

  const styles = {
    container: {
      flex: 1,
      flexDirection: 'column-reverse',
      //justifyContent: 'flex-end',
      backgroundColor: '#1c1b21',
    },
    displayArea: {
      flex: 1,
      //height: displayAreaHeight,
      backgroundColor: '#35323d',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 20,
      borderRadius: 20,
    },
    gridArea: {
      flex: 1.9,
      //height: gridAreaHeight,
      backgroundColor: "#1c1b21",
      paddingTop: 30,
      paddingRight: 10,
      paddingLeft: 10,
      marginBottom: 10,
    },
    value: {
      color: "#fff",
      fontSize: 60,
      textAlign: "right",
      marginRight: 20,
    },
  }
  // {parseFloat(state.currentValue).toLocaleString()}

    return (
      <SafeAreaView 
        onLayout={(event) => {
          const height = event.nativeEvent.layout.height;
          setSafeAreaHeight(height);
        }}
        style={styles.container}
      >
          {/* Display area */}
          

          {/* Grid area */}
          <View style={styles.gridArea}>
            <Row>
              <Button
                text="AC"
                theme="clear"
                onPress={() => handleTap("clear")}
              />

              <Button
                text="+/-"
                theme="accent"
                onPress={() => handleTap("posneg")}
              />

              <Button
                text="%"
                theme="accent"
                onPress={() => handleTap("percentage")}
              />

              <Button
                text="/"
                theme="accent"
                onPress={() => handleTap("operator", "/")}
              />
            </Row>

            {/* Number */}
            <Row>
              <Button text="7" onPress={() => handleTap("number", 7)} />
              <Button text="8" onPress={() => handleTap("number", 8)} />
              <Button text="9" onPress={() => handleTap("number", 9)} />
              <Button
                text="x"
                theme="accent"
                onPress={() => handleTap("operator", "*")}
              />
            </Row>

            <Row>
              <Button text="4" onPress={() => handleTap("number", 5)} />
              <Button text="5" onPress={() => handleTap("number", 6)} />
              <Button text="6" onPress={() => handleTap("number", 7)} />
              <Button
                text="-"
                theme="accent"
                onPress={() => handleTap("operator", "-")}
              />
            </Row>

            <Row>
              <Button text="1" onPress={() => handleTap("number", 1)} />
              <Button text="2" onPress={() => handleTap("number", 2)} />
              <Button text="3" onPress={() => handleTap("number", 3)} />
              <Button
                text="+"
                theme="accent"
                onPress={() => handleTap("operator", "+")}
              />
            </Row>

            <Row>
              <Button text="0" onPress={() => handleTap("number", 0)} />
              <Button text="." onPress={() => handleTap("number", ".")} />
              <Button text="<x" onPress={() => handleTap("delete")} />
              <Button
                text="="
                theme="equal"
                onPress={() => handleTap("equal", "=")}
              />
            </Row>
          </View>
          <View style={styles.displayArea}>
            <Text style={styles.value}>
              {gridAreaHeight}
            </Text>
          </View>
      </SafeAreaView>
    );
};

// create styles of app


export default App;