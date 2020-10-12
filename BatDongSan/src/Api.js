import firestore from '@react-native-firebase/firestore';
const usersCollection = firestore().collection('Users');
export const themDuLieuSauDangKy = (uid, name, email, password) => new Promise((resolve, reject) => {
    usersCollection.doc(uid).set(
        {
            name: name,
            email: email,
            password: password
        }
    ).then(() => {
        resolve("success")
    })
        .catch(() => {
            reject("fail")
        })
})