import React, { Component, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

// create class component of App
export default class App extends Component {
  state = initialState;


  // handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // render method
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Status bar here */}

          {/* Display area */}
          <View style={styles.displayArea}>
            <Text style={styles.value}>
              {parseFloat(this.state.currentValue).toLocaleString()}
            </Text>
          </View>

          {/* Grid area */}
          <View style={styles.gridArea}>
            <Row>
              <Button
                text="AC"
                theme="clear"
                onPress={() => this.HandleTap("clear")}
              />

              <Button
                text="+/-"
                theme="accent"
                onPress={() => this.HandleTap("posneg")}
              />

              <Button
                text="%"
                theme="accent"
                onPress={() => this.HandleTap("percentage")}
              />

              <Button
                text="/"
                theme="accent"
                onPress={() => this.HandleTap("operator", "/")}
              />
            </Row>

            {/* Number */}
            <Row>
              <Button text="7" onPress={() => this.HandleTap("number", 7)} />
              <Button text="8" onPress={() => this.HandleTap("number", 8)} />
              <Button text="9" onPress={() => this.HandleTap("number", 9)} />
              <Button
                text="x"
                theme="accent"
                onPress={() => this.HandleTap("operator", "*")}
              />
            </Row>

            <Row>
              <Button text="4" onPress={() => this.HandleTap("number", 5)} />
              <Button text="5" onPress={() => this.HandleTap("number", 6)} />
              <Button text="6" onPress={() => this.HandleTap("number", 7)} />
              <Button
                text="-"
                theme="accent"
                onPress={() => this.HandleTap("operator", "-")}
              />
            </Row>

            <Row>
              <Button text="1" onPress={() => this.HandleTap("number", 1)} />
              <Button text="2" onPress={() => this.HandleTap("number", 2)} />
              <Button text="3" onPress={() => this.HandleTap("number", 3)} />
              <Button
                text="+"
                theme="accent"
                onPress={() => this.HandleTap("operator", "+")}
              />
            </Row>

            <Row>
              <Button text="0" onPress={() => this.HandleTap("number", 0)} />
              <Button text="." onPress={() => this.HandleTap("number", ".")} />
              <Button text="<x" onPress={() => this.HandleTap("delete")} />
              <Button
                text="="
                theme="equal"
                onPress={() => this.HandleTap("equal", "=")}
              />
            </Row>
          </View>
      </SafeAreaView>
    );
  }
}

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