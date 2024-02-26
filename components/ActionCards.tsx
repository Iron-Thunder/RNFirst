import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCards = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCards</Text>
      <View style={[styles.dabba, styles.elevated]}>
        <View style={styles.headingContainer}>
        <Text style={styles.dabbaHeading}> What's new about Black Holes ?</Text>
        </View>
        <Image
        source = {{
          uri: 'https://media.istockphoto.com/id/1408272121/photo/illustration-of-galaxy-space-background-the-universe-consists-of-stars-black-hole-nebula.webp?b=1&s=170667a&w=0&k=20&c=D8O2080oxmBfkQZDmS1DGaMI95PXpon9w1E2CbHmDAo='
        }}
        style={styles.image}
        />
        <View style={styles.bodyContainer}>
        <Text numberOfLines={3} style={styles.imageContent}>A black hole is a region of spacetime where gravity is so strong that nothing, including light and other electromagnetic waves, has enough energy to escape it.[2] Einstein's theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.</Text>
        </View>
        
        <View>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => openWebsite('https://en.wikipedia.org/wiki/Black_hole')}>
              <Text style={styles.buttonText}>Read More</Text>
              
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openWebsite('https://unsplash.com/s/photos/black-hole')}>
              <Text style={styles.buttonText}>More Pics</Text>
              
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ActionCards

const styles = StyleSheet.create({
  headingText: {
    fontSize : 24,
    fontWeight : 'bold',
    paddingHorizontal : 8,
    color: 'black'
  },
  dabba: {
    marginVertical: 10,
    marginHorizontal: 14,
    backgroundColor: '#F0FFFF',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    
  },
  elevated: {
    elevation: 3,
        shadowOffset:{
            height: 1,
            width: 1,
        }
  },
  dabbaHeading: {
    color: 'black',
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize: 18,
  },
  headingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    borderRadius: 6,
    marginBottom: 8,
  },
  bodyContainer:{
    paddingHorizontal: 1,
  },
  imageContent: {
    color: 'black',
    // marginBottom: 6,
    
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 3,
    paddingVertical: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'green',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
    
  }

})