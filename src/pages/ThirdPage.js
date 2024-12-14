import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const Separtor = () => <View style={styles.separator} />;

const ThirdPage = ({ navigation }) => {
  <View style={{ flex: 1, padding: 16, backgroundColor: "#ffc300" }}>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Está é a tela inical e da opção "Terceira Tela"
      </Text>
      <Button
        color="#e37d00"
        onPress={() => navigation.navigate("FirstPage")}
        title="Ir para a Primeira Tela"
      />
      <Separtor />
      <Button
        color="#e37d00"
        onPress={() => navigation.navigate("SecondPage")}
        title="Ir para a Segunda Tela"
      />
      <Separtor />
      <Text style={{ fontSize: 18, textAlign: "center", color: "#730000" }}>
        React Navigation Drawe Customizado
      </Text>
      <Text style={{ fontSize: 16, textAlign: "center", color: "#730000" }}>
        pauloamaral.com.br
      </Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ThirdPage;
