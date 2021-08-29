import polyglotI18nProvider from "ra-i18n-polyglot";
import i18nen from "../translations/en";
import i18nfr from "../translations/fr";
import i18nes from "../translations/es";

const messages = {
    en: i18nen,
    fr: i18nfr,
    es: i18nes
};

/**
 * Provides the abstraction layer for the translations. English is loaded by default, if another language is requested
 * it will be lazy loaded
 *
 * @class i18nProvider
 */
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

export default i18nProvider;