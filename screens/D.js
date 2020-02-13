import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview'

export default class F extends Component {
   
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    // 바텀 스크롤 기능여부

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false} // 불투명
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                            <WebView
                                source={{ uri: 'https://www.youtube.com/watch?v=Pg7nBHXQCCA' }}
                                style={{ marginTop: 50 }}
                            />
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text style={styles.instructions}>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    instructions: {
        fontSize: 50,
        justifyContent: 'center'
    },
    imagestyle: {
        width: 180,
        height: 120,
        margin: 5

    }
})