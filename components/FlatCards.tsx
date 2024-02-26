import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
      <View style={[styles.dabba, styles.firstBox]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.dabba, styles.secondBox]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.dabba, styles.thirdBox]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.dabba, styles.forthBox]}>
            <Text>Brown</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
        color: 'black'

    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5

    },
    dabba: {
        
        width : 100,
        height : 100,
        borderRadius : 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    firstBox: {
        backgroundColor : 'red',
    },
    secondBox: {
        backgroundColor : 'green',
    },
    thirdBox: {
        backgroundColor : 'blue',
    },
    forthBox: {
        backgroundColor : 'brown',
    }

})

export default FlatCards