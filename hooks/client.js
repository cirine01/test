import { useState } from "react";
import { httpClient } from "../providers/data";
import { useLogout } from "react-admin";

/**
 * Hook to retrieve client
 *
 * @function
 * @returns {Promise} - Client
 */
const useClient = () => {
    const [
        client,
        setClient
    ] = useState(null);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    const logout = useLogout();

    if (!client && !requestInProgress) {
        if (window.clientReqSent) {
            return window.clientReqData || null;
        }
        window.clientReqSent = true;
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/contacts/me`).
        then(({ json }) => {
            const [data] = json.data;

            window.clientReqData = data;
            setClient(data);

            setTimeout(() => {
                window.clientReqSent = false;
                window.clientReqData = null;
            }, 15000)
        }).
        catch(() => logout());

    }

    return client;
};

export default useClient;