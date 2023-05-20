console.log(firebase)

const signedOut = document.getElementById("signedOut")
const signInBtn = document.getElementById("signInBtn")
const signedIn = document.getElementById("signedIn")
const userDetails = document.getElementById("userDetails")
const signOutBtn = document.getElementById("signOutBtn")

signInBtn.onclick = () => auth.signInWithPopup(provider)
signOutBtn.onclick = () => auth.signOut()

//Atualizar ui com base se o usuario esta logado ou não
auth.onAuthStateChanged(user =>{
    if(user){
        //logado
        signedIn.hidden = false
        signedOut.hidden = true
        userDetails.innerHTML = `<h3>Olá ${user.displayName}</h3>`

    }
    else{
        //não logado
        signedIn.hidden = true
        signedOut.hidden = false
        userDetails.innerHTML = ''
    }
})

const created = document.getElementById("created")
const create = document.getElementById("create")
const field = document.getElementById("field")

let thingsRef
let unsubscribe


auth.onAuthStateChanged(user =>{
    if(user){
        thingsRef = db.collection("things") //cria uma colection no firebase

        create.onclick = () =>{
            thingsRef.add({  //adiciona um documento(objeto) a coleção
                uid: user.uid,
                name: field.value,
                createdAt: Date.now()
            })
        }
        unsubscribe = thingsRef
            .where("uid","==",user.uid) //mostra apenas coisas com o id do user
            .orderBy('createdAt')
            .onSnapshot(querySnapshot =>{
                const items = querySnapshot.docs.map(doc =>{ //itera o documento e retorna para cada item especificado
                    return `<li>${doc.data().name}</li>`
                })
                created.innerHTML = items.join("")  //atualiza as informações na div
            })
    }
    else{
        unsubscribe && unsubscribe()  //para de mexer na coleção caso o user não estiver logado
    }
})