const { ServiceProvider, Ioc } = require('@adonisjs/fold');
const { FirebaseAdmin } = require("../src/FirebaseAdmin");

class FirebaseProvider extends ServiceProvider {
    register() {

        this.app.singleton('Jnex/Firebase/Admin', () => {
            const Config = this.app.use('Adonis/Src/Config');
            const config = {
                credential: Config.get('firebase.credential'),
                databaseURL: Config.get('firebase.databaseURL')
            };
            return FirebaseAdmin.init(config);
        });
    }


    *boot() {
        // Creating alias to Firebase Admin SDK
        Ioc.alias('FirebaseAdmin', 'Jnex/Firebase/Admin');
    }

}

module.exports = FirebaseProvider;
