import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';

const MataKuliah = (props) => {
    return (
        <>
        <Text style = {styles.subTextStyle}  >{props.matkul}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    subTextStyle: {
        marginLeft: 3,
        marginTop: 3,
        marginBottom: 3,
        color: '#444',
        fontSize: 14,
    },
  });

export default MataKuliah;