import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollCards from './components/ScrollCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactLists from './components/ContactLists'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.body}>

        {/* Flatcards */}
        <FlatCards />

        <ScrollCards />

        <FancyCards />

        <ActionCards/>

        <ContactLists/>


      </ScrollView>
    </SafeAreaView>
  )
}

export default App


const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'gray'
  }

})