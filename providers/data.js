import { fetchUtils } from "ra-core";
import esopDataProvider from "./esopDataProvider";
import jsonDataProvider from "./jsonProvider";

import fakeDataProvider from "ra-data-fakerest";
import data from "../../tests/data";
import { getToken, logout } from "./auth";

/**
 * Provides the httpClient for the data API
 * @param {String} url API url
 * @param {Object} options API options
 *
 * @returns {HttpClient} httpClient for the data API
 */
export const httpClient = (url, options = {}) => {
    const token = getToken();

    if (!options.headers) {
        options.headers = new Headers({ Accept: "application/json" });
    }
    options.headers.set("Access-Control-Allow-Origin", "*");
    options.headers.set("Authorization", `Bearer ${token}`);
    const request = fetchUtils.fetchJson(url, options);

    request.catch(response => {
        if (window.ESOP.statusToLogout.includes(response.status)) {
            logout();
        }
    });

    return request;
}

/**
 * Provides the abstraction layer for the data API
 *
 * @class dataProvider
 */

let subDataProvider = fakeDataProvider(data);

if (window.fetch && window.ESOP) {
    subDataProvider = jsonDataProvider(window.ESOP.api.url, httpClient);
}

const dataProvider = esopDataProvider(subDataProvider);

export default dataProvider;