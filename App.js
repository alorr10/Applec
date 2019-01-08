import React from 'react';
import { StyleSheet, Text, View, Linking, Button, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class App extends React.Component {
  facetime() {
    Linking.openURL('facetime://12154295512');
  }
  call() {
    Linking.openURL('tel:12154295512');
  }
  text() {
    Linking.openURL('sms://12154295512');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Applec</Text>
        <DeepLink title="Facetime Alec" onPress={this.facetime} />
        <DeepLink title="Text Alec" onPress={this.text} />
        <DeepLink title="Call Alec" onPress={this.call} />
      </View>
    );
  }
}

const DeepLink = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.deepLinkContainer}>
    <Text style={styles.deepLinkText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },

  title: {
    position: 'absolute',
    top: 50,
    fontSize: 30,
    color: '#fd5e53',
  },
  deepLinkContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 30,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  deepLinkText: {
    // fontFamily: '$mainTextFont',
    paddingHorizontal: 15,
    paddingVertical: 15,
    // '@media (max-height: 570)': {
    //   paddingVertical: 10,
    // },
    color: 'black',
    fontSize: 16,
  },
});
