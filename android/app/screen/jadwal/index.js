import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';

const Hari = (props) => {
    return (
        <>
        <Text style = {styles.subTitleStyle} >{props.hari}  </Text>
        </>
    );
}

const styles = StyleSheet.create({
    subTitleStyle: {
        backgroundColor: "#DDD",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        color: '#444',
        fontWeight: 'bold',
        fontSize: 18,
        shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6, 
    },
  });

export default Hari;