import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

// Custom
import PokemonCard from '../Components/PokemonCard';

export default function Home(navigation) {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            {/* <Text style={styles.text}>PokeDex</Text> */}
            <ScrollView style={styles.scrollV} >
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <PokemonCard
                        name="Pikachu"
                        imageLoc="https://i.ibb.co/VYC2g3n/pikachu.png"
                        bg="#fff"
                        details="Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy. When Pikachu meet, they’ll touch their tails together and exchange electricity through them as a form of greeting."
                        type="Electric"
                    />

                    <PokemonCard
                        name="Bulbasaur"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                        bg="#fff"
                        details="There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger. While it is young, it uses the nutrients that are stored in the seed on its back in order to grow."
                        type="Ground"
                    />

                    <PokemonCard
                        name="Charmander"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
                        bg="#fff"
                        details="It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail. From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out."
                        type="Fire" />

                    <PokemonCard
                        name="Charizard"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
                        bg="#fff"
                        details="It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames. Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures."
                        type="Fire"
                    />

                    <PokemonCard
                        name="Charmeleon"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
                        details="It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws. If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings."
                        type="Fire" />

                    <PokemonCard
                        name="Raichu"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"
                        bg="#fff"
                        details="Its long tail serves as a ground to protect itself from its own high-voltage power. If its electric pouches run empty, it raises its tail to gather electricity from the atmosphere."
                        type="Electric"
                    />

                    <PokemonCard
                        name="Squirtle"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
                        details="When it retracts its long neck into its shell, it squirts out water with vigorous force. When it feels threatened, it draws its limbs inside its shell and sprays water from its mouth."
                        type="Water" />

                    <PokemonCard
                        name="Metapod"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
                        details="It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack. Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack."
                        type="Bug" />

                    <PokemonCard
                        name="Butterfree"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
                        details="In battle, it flaps its wings at great speed to release highly toxic dust into the air. It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest."
                        type="Flying" />

                    <PokemonCard
                        name="Mewtwo"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
                        details="Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different. "
                        type="Psychic" />

                    <PokemonCard
                        name="Elgyem"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/605.png"
                        details="If this Pokémon stands near a TV, strange scenery will appear on the screen. That scenery is said to be from its home. This Pokémon was discovered about 50 years ago. Its highly developed brain enables it to exert its psychic powers."
                        type="Psychic" />

                    <PokemonCard
                        name="Blastoise"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
                        details="It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell. The rocket cannons on its shell fire jets of water capable of punching holes through thick steel."
                        type="Grass" />

                    <PokemonCard
                        name="Jigglypuff"
                        imageLoc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"
                        details="Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep. By freely changing the wavelength of its voice, Jigglypuff sings a mysterious melody sure to make any listener sleepy."
                        type="Fairy" />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#fff",
        marginTop: 10,
        fontSize: 40,
        fontWeight: "bold"
    },
    scrollV: {
        marginBottom: 10,
        width: "100%",
        // alignItems: 'center'
    }
});
