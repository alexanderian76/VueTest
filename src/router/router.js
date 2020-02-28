import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
    routes
});

export default router;

/* function ensureTokenExists() {
    if (!stash.read("authToken")) {
        // TODO get auth token
        return;
    }
}*/

const auth = {
    authorize: async() => true,
    aclExists: () => true
};

function authorize(to, next) {
    // logger.info("[router] authorize", { to, next });

    const authErrorPath = '/error/auth';

    if (!auth.aclExists(to.name)) {
        router.replace(authErrorPath);
        return;
    }

    auth.authorize(to.name)
        .then((ok) => {
            return ok ?
                next() : () => {
                    router.replace(authErrorPath);
                    return;
                };
        });
}


router.beforeEach((to, from, next) => {
    authorize(to, next);
});
