import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from "react-native";
import F from './F'

export default ({ navigation }) => (

  <ScrollView>
    <F />
     {/* <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <Text>
        go home
  </Text>
    </TouchableOpacity> */}

    {/* <Text style={styles.container}>
      {admins[0].youtube_title}
    </Text> */}
    
    <Image
      style={{ width: 110, height: 110, borderColor: 'red', borderWidth: 5 }}
      source={{ uri: admins[0].youtube_thumbnail }}
    />
    <Text style={styles.container}>
      {admins[0].youtube_title}
    </Text>


  </ScrollView>
);

let admins = require('./CR KPOP/CR_BLACKPINK');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
