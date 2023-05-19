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