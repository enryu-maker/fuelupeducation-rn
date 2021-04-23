import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Pie from 'react-native-pie';


export default class Exam extends Component {
    render() {
        return (
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              width: 350,
              justifyContent: 'space-between',
            }}
          >
            <Pie
              radius={80}
              strokeCap='butt'
              sections={[
                {
                  percentage: 10,
                  color: '#C70039',
                },
                {
                  percentage: 20,
                  color: '#44CD40',
                },
                {
                  percentage: 30,
                  color: '#404FCD',
                },
                {
                  percentage: 40,
                  color: '#EBD22F',
                },
              ]}
              
            />
            </View>

        )
    }
}

const styles = StyleSheet.create({})
/*
<ScrollView>
      <Header/>
      <Attendance/>
      <Course/>
  

      <Discussion/>
      <Certificate/>

    </ScrollView>
*/