import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Hari from '../jadwal';
import MataKuliah from '../matakuliah';

class Beranda extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>   Jadwal Mata Kuliah</Text>
        <Text style={styles.titleExpand}></Text>
        <Hari hari= ' Senin'/>
        <View style = {styles.rectangleStyle}>
            <MataKuliah matkul= ' 1. Sistem Operasi'/>
            <MataKuliah matkul= ' 2. Praktikum Basis Data Lanjut'/>
            <MataKuliah matkul= ' 3. Teori Bahasa Dan Automata'/>
        </View>
        <Hari hari= ' Selasa'/>
        <View style = {styles.rectangleStyle}>
            <MataKuliah matkul= ' 1. Praktikum Sistem Operasi'/>
            <MataKuliah matkul= ' 2. Pemrograman Berorientasi Objek'/>
        </View>
        <Hari hari= ' Rabu'/>
        <View style = {styles.rectangleStyle}>
            <MataKuliah matkul= ' 1. Praktikum Pemrograman Berorientasi Objek'/>
            <MataKuliah matkul= ' 2. Analisis Algoritma'/>
        </View>
        <Hari hari= ' Kamis'/>
        <View style = {styles.rectangleStyle}>
            <MataKuliah matkul= ' 1. Statistik Dan Probabilitas'/>
            <MataKuliah matkul= ' 2. Basis Data Lanjut'/>
            <MataKuliah matkul= ' 3. Arsitektur Dan Organisasi Komputer'/>
            <MataKuliah matkul= ' misc: Kelas Android Beginner'/>
        </View>
        <Hari hari= ' Jumat'/>
        <View style = {styles.rectangleStyle}>
            <MataKuliah matkul= ' 1. Technopreneurship'/>
            <MataKuliah matkul= ' 2. Praktikum Statistik Dan Probabilitas'/>
            <MataKuliah matkul= ' misc: Kelas Web Bang Jo'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        flex: 1,
    },
    titleStyle: {
        backgroundColor: '#FFBB00',
        fontWeight: 'bold',
        color: '#000',
        fontSize: 20,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    titleExpand: {
      borderBottomLeftRadius: 14,
      borderBottomRightRadius: 14,
      backgroundColor: '#FFBB00',
      fontSize: 10,
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
	      height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6, 
  },
    rectangleStyle: {
        backgroundColor: "#FFF",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginLeft: 16,
        marginRight: 16,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6, 
    },
  });

export default Beranda;