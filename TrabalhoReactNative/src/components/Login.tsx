import { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, TextInputBase, Button } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';


export const Login = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.cPrincipal}>
            <View style={styles.cNavBar}>
                <AntDesign style={styles.voltar} name="left" size={24} color="black" />
            </View>
            <View style={styles.lingua}>
                <Text>Português (Brasil)</Text>
            </View>
            <View style={styles.iconeFac}>
                <Image source={require('./../imgs/facebook.png')} style={styles.img} />
            </View>

            <View style={styles.cInputEmail}>
            <Text>Número do celular ou email</Text>
            <TextInput
                style={styles.tImputEmail}
                placeholder="Digite aqui"
                defaultValue={text}
            />
            </View>

            <View style={styles.cInputEmail}>            
            <Text>Digite sua senha</Text>
            <TextInput type="password"
                style={styles.tImputEmail}
                placeholder="Digite aqui"
                defaultValue={text}
            />
            </View>

            <View style={styles.buttonE}>
            <Button
                title="Entrar"
                accessibilityLabel="Clique aqui para entrar"
            /> 
            
            </View>

            <View style={styles.ctext}>
                <Text >Esqueceu sua senha?</Text>
            </View>

            <View style={styles.buttonc}>
            <Button
                title="Criar nova conta"
                accessibilityLabel="Clique aqui para criar nova conta"
            />
            </View>

            <View style={styles.iconeMeta}>
                <Image source={require('./../imgs/meta.png')} style={styles.img} />
            
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cPrincipal: {
        flex: 1,
        justifyContent:"space-evenly"
    },

    cNavBar: {
        height: "12%",
        alignItems:"flex-start",
        marginTop:"7%",
        marginBottom:"1%"
    },

    voltar:{
        width:15,
        height:20,
        marginLeft:20
    },
    
    lingua: {
        height: "10%",
        alignItems: "center",
    },
    iconeFac: {
        alignItems:"center",
        height: "20%"
    },
    img: { width: "15%", height: "35%" },

    cInputEmail: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "90%",
        alignItems:"flex-start",
        marginLeft:25,
        padding:2

    },

    tImputEmail: {
        padding: 20,
        alignItems:"center",
        fontSize: 12,
        borderWidth: 1,
        borderColor: "lightblue",
        borderRadius: 15,
        width: "95%",
        color: "lightblue"
    },
    buttonE: {
        width:"90%",
        alignSelf:"center"
     },
     buttonc: {
        flexDirection:"column",
        width:"90%",
        alignSelf:"center",
        justifyContent:"flex-end",
        
     },
    iconeMeta:{
        flexDirection:"column",
        height:"5%",
        alignItems:"center",
        justifyContent:"flex-start"
    },
    ctext: {
        marginLeft:"35%",
        marginTop:"0%",
        marginBottom:"50%"
    },
}); 