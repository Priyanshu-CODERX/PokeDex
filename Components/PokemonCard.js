import React, { useState } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from 'react-native'

const PokemonCard = ({ name, imageLoc, bg, details, type }) => {
    const [visible, setVisible] = useState(false);
    const pressed = () => {
        console.log("Pressed!");
    }

    return (
        <View>
            <Modal animationType="slide" transparent={false} visible={visible} onRequestClose={() => {
                setVisible(!visible)
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            style={styles.image}
                            source={{ uri: imageLoc }}
                        />
                        <Text style={styles.modalText}>{name}</Text>
                        <View style={styles.textBg}>
                            <Text style={styles.modalDetailText}>{details}</Text>
                            <View style={{ alignSelf: 'center', margin: 10 }}>
                                <Text style={styles.btn}>{type}</Text>
                            </View>
                        </View>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setVisible(!visible)}
                        >
                            <Text style={styles.textStyle}>Done</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.card} onPress={() => setVisible(true)}>
                <Image
                    style={styles.image}
                    source={{ uri: imageLoc }}
                />
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PokemonCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        width: 320,
        height: 350,
        borderRadius: 20,
        margin: 10,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 40,
        backgroundColor: "#FDD835",
        padding: 10,
        borderRadius: 100,
        borderWidth: 4,
        fontWeight: "bold",
    },

    // Modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: "95%",
        // shadowOffset: {
        //     width: 0,
        //     height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 3,
        width: 100,
        marginTop: 20
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        margin: 15,
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold"
    },
    modalDetailText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "800"
    },
    textBg: {
        backgroundColor: "#FDD835",
        padding: 10,
        borderWidth: 2,
        borderRadius: 10
    },
    btn: {
        backgroundColor: "#FF6F00",
        padding: 5,
        borderRadius: 20,
        width: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff"
    },
})
