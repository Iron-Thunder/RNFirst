import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ScrollCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ScrollCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.dabba]}>
            <Text style={styles.textColor}>Tap</Text>
        </View>
        <View style={[styles.dabba]}>
            <Text style={styles.textColor}>Me</Text>
        </View>
        <View style={[styles.dabba]}>
            <Text style={styles.textColor}>to</Text>
        </View>
        <View style={[styles.dabba]}>
            <Text style={styles.textColor}>Scroll</Text>
        </View>
        <View style={[styles.dabba]}>
            <Text style={styles.textColor}>More...</Text>
        </View>
        <View style={[styles.dabba]}>
            <Text>🤗😁</Text>
        </View>
      </ScrollView>
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
        padding: 8,


    },
    dabba:{
        flex: 1,
        borderRadius: 4,
        width:100,
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        margin: 5,
        elevation: 10,
    },
    textColor : {
        color: 'blue',
    }
    
})

export default ScrollCards