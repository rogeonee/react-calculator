import React, { Component, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

const App = () => {
  const [state, setState] = useState(initialState);

  // handle tap method
  const handleTap = (type, value) => {
    setState(prevState => calculator(type, value, prevState));
  };

  // render method
    return (
      <SafeAreaView style={styles.container}>
        {/* Status bar here */}

          {/* Display area */}
          <View style={styles.displayArea}>
            <Text style={styles.value}>
              {parseFloat(state.currentValue).toLocaleString()}
            </Text>
          </View>

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
      </SafeAreaView>
    );
};

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1b21', // Dark background
  },
  displayArea: {
    height: 280, // reduced height for display area
    backgroundColor: '#35323d', // Lighter shade than container
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    borderRadius: 20,
  },
  gridArea: {
    flex: 0.5,
    backgroundColor: "#1c1b21",
    // Style your button grid layout
    padding: 10, // some padding around the button grid for better aesthetics
  },
  value: {
    color: "#fff",
    fontSize: 60,
    textAlign: "right",
    marginRight: 20,
  },
});

export default App;