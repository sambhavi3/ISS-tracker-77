import React,{Component} from 'react';
import {Text, 
    View, 
    SafeAreaView, 
    StyleSheet, 
    StatusBar,
  TouchableOpacity,   
  Platform,
ImageBackground,
Image
} from 'react-native';

export default class HomeScreen extends Component {
render(){
    return(
        <View>
           <SafeAreaView style={styles.AndroidSafeArea}/>
           <ImageBackground 
           source={require("../assets/bg_image.png")}
           style={styles.backgroundImg}>
        
           <View style={styles.titleBar}>
            <Text style={styles.titleText}> ISS Tracker App </Text>
            </View>
            <TouchableOpacity 
            style={styles.rootCards}
            onPress={()=>{
                this.props.navigation.navigate("IssLocation")
            }}
            >
                <Text style={styles.rootText}> ISS Location </Text>
                <Text style={styles.knowMore}> {"know more-->"} </Text>
                <Text style={styles.bgDigit}> 1 </Text>
                <Image source={require("../assets/iss_icon.png")} style={styles.iconImg}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.rootCards}
             onPress={()=>{
                this.props.navigation.navigate("Meteor")
            }}>
                <Text style={styles.rootText}> Meteors </Text>
                 <Text style={styles.knowMore}> {"know more-->"} </Text>
                 <Text style={styles.bgDigit}> 2 </Text>
                <Image source={require("../assets/meteor_icon.png")} style={styles.iconImg}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rootCards}>
                <Text style={styles.rootText}> Updates </Text>
                <Text style={styles.knowMore}> {"know more-->"} </Text>
                <Text style={styles.bgDigit}> 3 </Text>
                <Image source={require("../assets/rocket_icon.png")} style={styles.iconImg}/>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
}
const styles=StyleSheet.create({
    AndroidSafeArea:{
    marginTop:Platform.os==="android"? StatusBar.currentHeight:0
    },
    container:{
    flex:1,
    },
    titleBar:{
    textAlign:'center',
    flex:0.15,
    justifyContent:'center',
    alignItems:'center'
    },
    rootCards:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color: 'white'
    },
    backgroundImg:{
        flex:1,
        resizeMode: 'cover',

    },
    iconImg:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80
    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15
    },
    rootText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30
    },
    bgDigit:{
        position:'absolute',
        color:'rgba(183,183,183,0.5)',
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex: -1
    }
})