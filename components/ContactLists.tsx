import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ContactLists = () => {
    const contacts = [
        {
            uid: 1,
            name: 'Akash Jha',
            work: 'React Native Developer',
            imageUrl : 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg',
        },
        {
            uid: 2,
            name: 'Kunal Jha',
            work: 'React JS Developer',
            imageUrl : 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg',
        },
        {
            uid: 3,
            name: 'Ashutosh Jha',
            work: 'All Round Developer',
            imageUrl : 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
        },
        {
            uid: 4,
            name: 'Mukesh Kuiry',
            work: 'Full Stack Developer',
            imageUrl : 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactLists</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {/* {contacts.map(() => {})} if we are using {} here than we have to return something but if we use () we don't have to return anything*/}

        {contacts.map(({uid,name,work,imageUrl}) =>(
            // this key will iterate through each element of the map one by one and will not iterate through the same element again and again and this all is done automatically by the key
            <View style={styles.userCard} key={uid}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View style={styles.userinfo}>
                    <Text style={styles.username}>{name}</Text>
                    <Text style={styles.userwork}>{work}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactLists

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
        color: 'black',
    },
    container: {
        marginVertical: 10,
        marginHorizontal: 16,
        

    },
    userCard: {
        backgroundColor: '#FFF0FF',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        marginBottom: 8,
        alignItems: 'center',


    },
    userinfo: {
        // alignItems: 'center',
        // justifyContent: 'center',
        margin: 14,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        marginLeft: 8,
    },
    username: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    userwork: {
        color: 'black',
        fontStyle: 'italic',
    },

})