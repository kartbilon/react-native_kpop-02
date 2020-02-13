import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview'


let blackpink = require('./blackpink.json')


export default class App extends Component {
  render() {
    // const menus = ['메뉴1', '메뉴2', '메뉴3', '메뉴4']
    // const MenuList = menus.map((menus) => ("     " + menus))

    // const numbers = [1, 2, 3, 4, 5]
    // const NumberList = numbers.map((k, i) => k * 2)

    // const BlackpinkList = blackpink.map((blackpink) => (`${blackpink.youtube_title} \n`))

    return (
      <View>
        <Contacts />
      </View>

    )
  }
}

class Contacts extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   contactData: [
    //     { name: "Abet", phone: "010-0000-0001" },
    //     { name: "Betty", phone: "010-0000-0002" },
    //     { name: "Charlie", phone: "010-0000-0003" },
    //     { name: "David", phone: "010-0000-0004" }
    //   ]

    // }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* {this.state.contactData.map((contact, i) => {
            return (
              <ContactInfo
                name={contact.name}
                phone={contact.phone}
                key={i} />
            )
          })} */}

          {blackpink.map((blp, i) => {
            return (
              <BlackpinkInfo
                url={blp.youtube_url}
                title={blp.youtube_title}
                img={blp.youtube_thumbnail}
                key={i}
              />
            )
          })}
        </View>
      </ScrollView>
    )
  }
}

// class ContactInfo extends Component {
//   render() {
//     return (
//       <Text>name : {this.props.name} phone number : {this.props.phone}</Text>
//     )
//   }
// }

class BlackpinkInfo extends Component {
  render() {
    return (
      // <TouchableHighlight onPress={() => Linking.openURL(`https://${this.props.url}`)}>

      <TouchableOpacity onPress={() => Linking.openURL(`https://${this.props.url}`)}>
        <View style={styles.two}>
          {/* <Text>url : {this.props.url} </Text> */}
          {/* <Text>img : {this.props.img}</Text> */}

          <Image
            style={{ width: 110, height: 110, borderColor: 'white', borderWidth: 2.5 }}
            source={{ uri: this.props.img }}
          />
          <Text style={styles.white}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
      // </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  white: {
    color: 'white',
    fontSize: 20,
  },
  two: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});