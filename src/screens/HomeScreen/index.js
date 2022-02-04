import React from 'react';
import {View, Text} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import Map from '../../components/Map';
const HomeScreen = () => {
  return (
    <View>
      <Map />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
