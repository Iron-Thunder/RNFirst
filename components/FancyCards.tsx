import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.dabba, styles.elevation]}>
        <Image
        source={{
            uri: 'https://i.pinimg.com/564x/f7/19/a4/f719a4e418d96b0cf4e31de5c70eef26.jpg'

        }}
        style={styles.image}
        />
        <View style={styles.dabbaBody}>
            <Text style={styles.dabbaTitle}>Ram Mandir</Text>
            <Text style={styles.dabbaLoc}>Ayodhya, Uttar Pradesh</Text>
            <Text style={styles.dabbaDesc}>It has a length (east-west) of 380 feet, a width of 250 feet, and a height of 161 feet</Text>
            <Text style={styles.dabbaFooter}>Must visit once in a lifetime</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    headingText: {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
        color: 'black'

    },
    dabba:{
        height: 340,
        width: 360,
        backgroundColor: "#F0FFFF",
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 6,

    },
    elevation:{
        elevation: 3,
        shadowOffset:{
            height: 1,
            width: 1,
        }
    },
    image:{
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    dabbaBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    dabbaTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        
        // marginBottom: 2,
    },
    dabbaLoc: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 5,
    },
    dabbaDesc: {
        color: 'black',
        fontSize: 14,
        marginBottom: 8,
        marginTop: 5,
    },
    dabbaFooter: {
        color: 'black',
        fontSize: 14,
    }
})