import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import { WebView } from 'react-native-webview'
import Swiper from 'react-native-swiper'
import G from './G';


let blackpink = require('./blackpink.json')

const styles = StyleSheet.create({

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default class F extends Component {
  render() {
    return (
      <View>
        <F1 />
        <Text>blackpink</Text>
        <F3 />
        <F2 />
      </View>

    )
  }
}

class F1 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Swiper
        autoplay={true}
        style={{ height: G.height / 3 }}
        showsPagination={false}>

        {blackpink.map((b, i) => {
          return (
            <View>
              <Jasik
                url={b.yotube_url}
                title={b.youtube_title}
                thumbnail={b.youtube_thumbnail}
                key={i}
              />
            </View>
          )
        })}
      </Swiper>
    )
  }
}

class F2 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        {blackpink.map((blp, i) => {
          return (
            <BlackpinkJasik
              url={blp.youtube_url}
              title={blp.youtube_title}
              img={blp.youtube_thumbnail}
              key={i}
            />
          )
        })}
      </View>
    )
  }
}

class F3 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ScrollView horizontal={true}>
        {blackpink.map((blp, i) => {
          return (
            <BlackpinkJasik2
              url={blp.youtube_url}
              title={blp.youtube_title}
              img={blp.youtube_thumbnail}
              key={i}
            />
          )
        })}
      </ScrollView>
    )
  }
}

class Jasik extends Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: this.props.thumbnail }}
          style={{ width: G.width, height: G.height / 3 }}
        />
      </View>
    )
  }
}

class BlackpinkJasik extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => {
          this.setModalVisible(true);
        }}>
          <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <Image
              style={{ width: 110, height: 110, borderColor: 'white', borderWidth: 2.5 }}
              source={{ uri: this.props.img }}
            />
            <Text>{this.props.title}</Text>
          </View>
        </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false} // 불투명
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>

        <WebView
          source={{ uri: this.props.url }}
          style={{ marginTop: 50 }}
        />
        </Modal>
      </View >
    )
  }
}

class BlackpinkJasik2 extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <View>
          <Image
            style={{ width: 165, height: 150, borderColor: 'white', borderWidth: 2.5 }}
            source={{ uri: this.props.img }}
          />
          <Text>{this.props.title.length ? this.props.title.substring(0, 22) : this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}