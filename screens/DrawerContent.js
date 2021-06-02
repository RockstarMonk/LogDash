import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerItem,
    DrawerContentScrollView
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons'                                     //for drawer and tab icons
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/Feather';

// ----------------------------------------------- Main Function Here -----------------------------------------------------

const DrawerContent = (props) => {
    return(
        <View style = {{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style = {styles.drawerContent}>
                    <View style = {styles.userInfoSection}>
                        <View style = {{flexDirection:'row'}}>
                            <Avatar.Image 
                                source = {{
                                    uri: 'https://tinyurl.com/ye9swzhv'
                                }}
                                size = {70}
                            />
                            <View style = {{marginLeft: 15, marginTop: 10, flexDirection: 'column'}}>
                                <Title style = {styles.title}>Shashwat C</Title>
                                <Caption style = {styles.caption}>@redsl4p</Caption>
                            </View>
                        </View>

                        <View style = {styles.row}>
                            <View>
                                <Paragraph>21</Paragraph>
                                <Caption>TOPICS FOLLOWED</Caption>
                            </View>
                            <View style = {{marginLeft: 35}}>
                                <Paragraph>Active</Paragraph>
                                <Caption>YOUR STATUS</Caption>
                            </View>
                        </View>
                    </View>
                    
                    <Drawer.Section style = {styles.drawerSection}>
                        <DrawerItem
                            label = "Home"
                            icon = {({ color, size }) => (
                                <Icon2 name="home-outline" color={color} size={size} />
                            )}
                            onPress = {() => {props.navigation.navigate("home")}}
                        />
                        <DrawerItem
                            label = "Explore"
                            icon = {({ color, size }) => (
                                <Icon3 name="compass-outline" color={color} size={size} />
                            )}
                            onPress = {() => {}}
                        />
                        <DrawerItem
                            label = "Activity"
                            icon = {({ color, size }) => (
                                <Icon4 name="activity" color={color} size={size} />
                            )}
                            onPress = {() => {}}
                        />
                        <DrawerItem
                            label = "Profile"
                            icon = {({ color, size }) => (
                                <Icon3 name="account-outline" color={color} size={size} />
                            )}
                            onPress = {() => {}}
                        />
                        <DrawerItem
                            label = "Settings"
                            icon = {({ color, size }) => (
                                <Icon2 name="settings-outline" color={color} size={size} />
                            )}
                            onPress = {() => {}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style = {styles.bottomDrawerSection}>
                <DrawerItem
                    label = "Sign Out"
                    icon = {({ color, size }) => (
                        <Icon name="sign-out" color={color} size={size} />
                      )}
                    onPress = {() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      paddingTop: 20
    },
    title: {
      fontSize: 18,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

export default DrawerContent;