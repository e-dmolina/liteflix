import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { StyleSheet, Text, View, Modal, TextInput, Pressable, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import SuccessAddMovie from './SuccessAddMovie';
import Loading from '../shared/Loading';
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDb_kPpF-z6VYi8AbE_ht-oDbSrVTDvhfI",
    authDomain: "liteflix-24e7d.firebaseapp.com",
    projectId: "liteflix-24e7d",
    storageBucket: "liteflix-24e7d.appspot.com",
    messagingSenderId: "9048104961",
    appId: "1:9048104961:web:bf77a4484a7e58e7386000",
    measurementId: "G-QMCGK2YBND"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AddMovieModal = ({ setModalVisible, modalVisible }) => {

    const [imageUrl, setimageUrl] = useState('');
    const [success, setsuccess] = useState(0);
    const [newMovie, setnewMovie] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
    }, []);

    const uploadImage = (uri) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onerror = reject;
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    resolve(xhr.response);
                }
            };

            xhr.open("GET", uri);
            xhr.responseType = "blob";
            xhr.send();
        })
    }

    const openGallery = async () => {
        const resultPermission = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

        if (resultPermission) {
            const resultImagePicker = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3]
            });

            if (resultImagePicker.cancelled === false) {
                setimageUrl(resultImagePicker.uri)
            }
        }
    }

    const checkImage = () => {
        if (imageUrl) {
            return (
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: imageUrl }}
                />
            );
        }
        return <View>
            <Pressable
                onPress={openGallery}
            >
                <Text style={{ color: '#0076ff' }}>Agregar archivo</Text>
            </Pressable>
        </View>;
    }

    const loadImage = async (name) => {
        const url = await firebase.storage().ref(`images/${name}`).getDownloadURL();
        return url;
    }

    const saveNewMovie = async (movie) => {
        const db = firebase.firestore();
        await db.collection('movies').add(movie);
        setloading(false);
    }

    const onSubmit = async values => {
        setloading(true);

        try {
            const res = await uploadImage(imageUrl)
            let ref = await firebase.storage().ref().child(`images/${values.name}`);
            await ref.put(res);
            const poster_path = await loadImage(values.name)

            const movie = {
                name: values.name,
                category: values.category,
                poster_path
            }
            setnewMovie(movie);
            saveNewMovie(movie)

            setimageUrl('');
            setsuccess(1);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, success === 0 ? { backgroundColor: 'white' } : { backgroundColor: '#7ed321' }]}>
                        {success === 0 ? <Formik
                            initialValues={{
                                name: '',
                                category: '',
                            }}
                            onSubmit={onSubmit}
                            validationSchema={Yup.object().shape({
                                name: Yup
                                    .string()
                                    .required('Requerido'),
                                category: Yup
                                    .string()
                                    .required('Requerido'),
                            })}
                        >
                            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (

                                <View>
                                    <View style={styles.containerImage}>
                                        {!loading
                                            ?
                                            checkImage()
                                            :
                                            <Loading/>
                                        }
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <TextInput
                                                onChangeText={handleChange('name')}
                                                value={values.name}
                                                style={styles.modalText} placeholder='NOMBRE DE LA PELÍCULA' />
                                            {touched.name && errors.name &&
                                                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
                                            }
                                        </View>
                                        <View>
                                            <TextInput
                                                onChangeText={handleChange('category')}
                                                value={values.category}
                                                style={styles.modalText}
                                                placeholder='CATEGORÍA' />
                                            {touched.category && errors.category &&
                                                <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.category}</Text>
                                            }
                                        </View>
                                    </View>
                                    <Pressable
                                        disabled={loading}
                                        style={[styles.button, !loading ? styles.buttonSubmit : styles.disabledBuuton]}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={styles.textStyle}>Subir Película</Text>
                                    </Pressable>
                                </View>
                            )}
                        </Formik>
                            :
                            <SuccessAddMovie movie={newMovie}  setModalVisible={setModalVisible} modalVisible={modalVisible}/>
                        }
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default AddMovieModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonSubmit: {
        backgroundColor: "#000000",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginBottom: 15,
        textAlign: "center",
        marginHorizontal: 2
    },
    containerImage: {
        height: 100,
        width: 250,
        borderWidth: 1,
        borderBottomColor: '#9b9b9b',
        borderRadius: 10,
        borderStyle: 'dashed',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    disabledBuuton: {
        backgroundColor: '#dedede'
    }
})
