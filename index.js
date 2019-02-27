import React from "react";
import { AppRegistry, Text } from "react-native";

function TestApp(props) {
  return <Text>HOGEHOGE</Text>;
}

AppRegistry.registerComponent("root", () => TestApp);

AppRegistry.runApplication("root", {
  rootTag: document.getElementById("root")
});
