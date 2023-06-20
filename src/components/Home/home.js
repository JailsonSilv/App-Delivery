import React, {useState} from 'react';
import { 
    View,
    Text,
    ScrollView,
    StatusBar,
    Image, 
    TouchableOpacity, 
    TextInput, 
    FlatList
} from 'react-native';
import { COLOURS, Categories } from '../../database/items';
import Material from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";


const Home = ({navigation}) => {

    const [currentSelected, setCurrentSelected] = useState([0])

    const renderCategories = ({item, index}) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.9} 
                onPress={() => setCurrentSelected(index)}>
                <View 
                    style={{
                        width: 146,
                        height: 170,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor:
                            currentSelected == index ? COLOURS.accent : COLOURS.white,
                        borderRadius: 20, 
                        margin: 10,
                        elevation: 7,
                        paddingStart: 10,
                        paddingEnd: 10,

                    }}> 
                    <View style={{width:65, height: 65}}>
                        <Image source={item.image} style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'center',
                        }}/>
                    </View>
                    <Text 
                        style={{
                            fontSize: 17,
                            color:COLOURS.black,
                            fontWeight: '600',
                        }}>
                        {item.name}
                    </Text>
                    <View 
                        style={{
                            width: 30,
                            height: 30, 
                            borderRadius:100,
                            backgroundColor: 
                                currentSelected == index ? COLOURS.white : COLOURS.accentRed,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <FontAwesome
                            name='angle-right'
                            style={{
                                fontSize: 13, 
                                color: currentSelected == index ? COLOURS.black : COLOURS.white,
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const renderItems = (data, index) => {
        return(
            <TouchableOpacity 
                key={index}
                opacity={0.9}
                style={{
                    width: '100%',
                    height: 180,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => 
                    navigation.push(`details`,{
                        name: data.name,
                        price: data.price,
                        image: data.image,
                        size: data.size,
                        crust: data.crust,
                        delivery: data.delivery,
                        ingredientes: data.ingredientes,
                        isTopOfTheWeek: data.isTopOfTheWeek,
                        navigation: data.navigation,
                    })
                }>
                <View style={{
                    width: '90%',
                    height: 160,
                    backgroundColor:COLOURS.white,
                    borderRadius: 20,
                    elevation: 4,
                    position: 'relative',
                    padding: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',              
                }}>
                    <View style={{marginBottom: 50}}>
                        <View style={{
                            flexDirection:"row",
                            alignItems: 'center',
                            display: data.isTopOfTheWeek ? 'flex' : 'none',
                        }}>
                            <FontAwesome
                                name='crown'
                                style={{
                                    fontSize:12,
                                    color:COLOURS.accent,
                                }}
                            />
                            <Text 
                                style={{
                                    fontSize:13, 
                                    color:COLOURS.black,
                                    opacity:0.8,
                                    marginLeft: 5,

                                }}>
                                Top da semana
                            </Text>
                        </View>
                        <Text 
                            style={{
                                fontSize: 22,
                                color: COLOURS.black,
                                fontWeight: 'bold',
                                paddingTop: 10,
                            }}>     
                            {data.name}
                        </Text>
                        <Text 
                            style={{
                                fontSize:13,
                                color: COLOURS.black,
                                opacity: 0.5,

                            }}>
                            {data.weight}
                        </Text>
                    </View>
                    <View 
                        style={{
                            width: 150,
                            height: 150,
                            marginRight: 5,
                            marginLeft: 5,
                        }}    
                    >
                        <Image source={data.image} 
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: "contain",
                            }}
                        />
                    </View>
                    <View 
                        style={{
                            position: 'absolute',
                            bottom:0,
                            flexDirection: 'row',
                            alignItems: 'center',

                        }}
                    >
                        <View 
                            style={{
                                width:85, 
                                height: 50,
                                backgroundColor:COLOURS.accent,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Entypo 
                                name='plus'
                                style={{
                                    fontSize: 18,
                                    color: COLOURS.black,

                                }}
                            />
                        </View>
                        <View 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginLeft: 20,

                            }}>
                            <AntDesign 
                                name='star'
                                style={{
                                    fontSize:12,
                                    color: COLOURS.accent,
                                    paddingLeft: 10 / 2,
                                }}
                            />
                            <Text 
                                style={{
                                    fontSize: 15,
                                    color: COLOURS.black,
                                    fontWeight: 'bold',
                                }}
                            >{data.rating}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View 
            style={{
                width: '100%',
                height: '100%',
                backgroundColor:COLOURS.white,
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor:COLOURS.white,
                        position: 'relative',
                    }}>
                    <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"/>
                    <Image 
                        source={require('../../database/images/background.png')}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: -100
                        }}
                    /> 
                    <View 
                        style={{
                            flexDirection:'row',
                            justifyContent: 'space-between',
                            padding: 20
                        }}>
                        <TouchableOpacity 
                            style={{
                                width: 40,
                                height: 40,
                            }}>
                            <Image 
                                source={require('../../database/images/perfil.png')} 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'contain',
                                    borderRadius: 500, 
                                }}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Material 
                                name="segment" 
                                style={{
                                    fontSize:28,
                                    color:COLOURS.black,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{padding:20}}>
                        <Text 
                            style={{
                                fontSize:17,
                                color:COLOURS.black,
                                opacity:0.5,
                                fontWeight: '400'
                            }}
                        >
                            Food
                        </Text>
                        <Text 
                            style={{
                                fontSize:48, 
                                color:COLOURS.black,
                                fontWeight: '600',
                                letterSpacing: 2,
                            }}>
                            Delivery
                        </Text>
                    </View>
                    <View 
                        style={{
                            paddingHorizontal:20,
                            paddingVertical:10,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Ionicons 
                            name='search'
                            style={{
                                fontSize:20,
                                color:COLOURS.black,
                                opacity: 0.8
                            }}
                        />
                        <TextInput placeholder='Procurar...'
                            style={{
                                color:COLOURS.black,
                                fontSize:16,
                                paddingVertical: 5,
                                borderBottomWidth:1,
                                borderBottomColor:COLOURS.black + 20,
                                width: '90%',
                                marginLeft: 10,
                                letterSpacing:1,
                            }}
                        />
                    </View>
                    <Text style={{
                        paddingTop:20,
                        paddingHorizontal: 20,
                        fontWeight: '700',
                        color:COLOURS.black,
                        letterSpacing:1,
                        fontSize: 18,
                    }}> 
                        Categorias
                    </Text>
                    <FlatList
                        horizontal={true}
                        data={Categories}
                        renderItem={renderCategories}
                        showsHorizontalScrollIndicator={false}
                    />
                    <Text 
                        style={{
                            paddingTop: 20,
                            paddingHorizontal: 20,
                            fontSize: 18,
                            fontWeight: '700',
                            color: COLOURS.black
                        }}>
                        Popular
                    </Text>
                    {Categories[currentSelected].items.map(renderItems)}
                    <TouchableOpacity 
                        style={{
                            margin: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: 0.5,
                        }}
                    >
                        <Text 
                            style={{
                                fontSize: 16,
                                color: COLOURS.black,
                                borderBottomWidth:1,
                                borderBottomColor: COLOURS.black
                            }}    
                        >
                            Carregar mais
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;
