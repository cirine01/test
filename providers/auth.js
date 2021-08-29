import Keycloak from "keycloak-js";

let auth = false;

let tokenRefreshIntervalID = null;

if (window.ESOP) {
    auth = { ...window.ESOP.auth };
}

const keycloak = new Keycloak(auth);

const updateToken = () => {
    tokenRefreshIntervalID = setInterval(() => keycloak.updateToken(15), 10000);
};

export const getToken = () => (auth ? keycloak.token : "NO_TOKEN");

export const keycloakInit = () => (auth ? keycloak.init({
    onLoad: "login-required",
    promiseType: "native"
}).then(() => updateToken()) : Promise.resolve());

/**
 * Provides the abstraction layer for the authentication
 *
 * @class authProvider
 *
 */
const authProvider = auth ? {

    /**
     * @memberof authProvider
     * @returns {Promise} - Will resolve or reject depending on credentials correctness
     * @instance
     */
    login: () => keycloak.login().then(() => updateToken()),

    /**
     * @memberof authProvider
     * @param {Object} params - User info
     * @returns {Promise} - Will resolve once the user is logged out
     * @instance
     */
    logout: () => {
        clearInterval(tokenRefreshIntervalID);
        return keycloak.logout();
    },

    /**
     * @memberof authProvider
     * @param {Object} params - User info
     * @returns {Promise} - Will resolve returning if the user is authenticated
     * @instance
     */
    checkAuth: () => (keycloak.token ? Promise.resolve() : Promise.reject(new Error("Unauthenticated user"))),

    /**
     * @memberof authProvider
     * @param {Object} error - Error to raise
     * @returns {Promise} - Will resolve with the errors if some
     * @instance
     */
    checkError: () => Promise.resolve(),

    /**
     * @memberof authProvider
     * @param {Object} params - User info
     * @returns {Promise} - Will resolve with the permissions of the currently logged in user
     * @instance
     */
    getPermissions: () => Promise.resolve()
} : null;

export const logout = auth ? authProvider.logout : () => {};

export default authProvider;