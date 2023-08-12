document.addEventListener('DOMContentLoaded', () => {
    const googleSignInButton = document.getElementById('googleSignIn');

    // Initialize Firebase with your configuration
    firebase.initializeApp(firebaseConfig);

    // Google Sign-In
    googleSignInButton.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                console.log('Google user:', user);
            })
            .catch(error => {
                console.error('Google sign-in error:', error);
            });
    });
});
