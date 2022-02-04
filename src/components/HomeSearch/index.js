import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HomeSearch = () => {
  return (
    <View>
      {/* input Box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text style={styles.now}>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </View>

      {/* previous Destination */}
      <View style={styles.row}>
        <View style={styles.iconcontainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#fff'} />
        </View>
        <Text style={styles.destitnationText}>Spin Nightclub</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
