const { ServiceProvider, Ioc } = require('@adonisjs/fold');
const { Firebase } = require("../src/Firebase");

class FirebaseProvider extends ServiceProvider {
    register() {
        const Config = this.app.use('Adonis/Src/Config');

        this.app.singleton('Jnex/Firebase', () => {
            const config = {
                apiKey: Config.get('firebase.apiKey'),
                authDomain: Config.get('firebase.authDomain'),
                databaseURL: Config.get('firebase.databaseURL'),
                storageBucket: Config.get('firebase.storageBucket')
            };
            
            return Firebase.init(config);
        });
    }


    *boot() {
        // Creating alias to Firebase SDK
        Ioc.alias('Firebase', 'Jnex/Firebase');
    }

}

module.exports = FirebaseProvider;
