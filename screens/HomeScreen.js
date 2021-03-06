import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
	  title: '       Be Responsible    Be Involved',
	  backgroundColor: '#990033',
	  titleStyle: {fontSize: 17, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    }
  }

  render() {
    return (   
		<View style={styles.mainContainer}>   	
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/HHS.png')}
              style={styles.welcomeImage}
            />
          </View>
		  
          <View style={styles.hhsInfoContainer}>
			<Text>
              <MonoText style={styles.infoText}>Helena High School</MonoText>
            </Text>
			<Text>
              <MonoText style={styles.infoText}>1300 Billings Ave.</MonoText>
            </Text>
			<Text>
              <MonoText style={styles.infoText}>Helena, MT 59601</MonoText>
            </Text>
		  </View>
		  
		   <View style={styles.webContainer}>
            <TouchableOpacity onPress={this._handleMainPress}>
              <Text style={styles.webLinkText}>
                 Main Office (406)324-2200
              </Text>
            </TouchableOpacity>
          </View>
		  
		  <View style={styles.webContainer}>
            <TouchableOpacity onPress={this._handleAttendencePress}>
              <Text style={styles.webLinkText}>
                 Attendance (406)324-2211
              </Text>
            </TouchableOpacity>
          </View>
		  
		   <View style={styles.webContainer}>
            <TouchableOpacity onPress={this._handleHHSWebpagePress} style={styles.webLink}>
              <Text style={styles.webLinkText}>
                Webpage
              </Text>
            </TouchableOpacity>
          </View>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            Be Respectful     Be a Graduate
          </Text>
        </View>
      </View>
    );
  }
  
  _handleAttendencePress = () => {
    Linking.openURL('tel:4063242211');
  }
  
  _handleMainPress = () => {
    Linking.openURL('tel:4063242200');
  }

  _handleHHSWebpagePress = () => {
    Linking.openURL('http://hhs.helenaschools.org');
  }
}

const styles = StyleSheet.create({
  mainContainer: {
	flex: 1,
    backgroundColor: '#999999',
    paddingVertical: 5,
    paddingHorizontal: 5,
	marginTop: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#CC0033',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  welcomeImage: {
    width: 300,
    height: 115,
    marginTop: 5,
  },
  hhsInfoContainer: {
	marginTop: 20,
	marginBottom: 10,
    alignItems: 'center',
    marginHorizontal: 30,
  },
 infoText: {
	fontSize: 20,
	fontWeight: '600',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#990033',
    paddingVertical: 10,
	height: 55,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: '#dddddd',
    textAlign: 'left',
	fontWeight: '600',
  },
  webContainer: {
    marginTop: 10,
	marginBottom: 5,
    alignItems: 'center',
  },
  webLinkText: {
    fontSize: 22,
    color: '#990033',
	textDecorationLine: 'underline',
	
  },
});
