import { createI18n } from "vue-i18n";

const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "Dollar",
    },
  },
  fr: {
    currency: {
      style: "currency",
      currency: "EUR",
    },
  },
  es: {
    currency: {
      style: "currency",
      currency: "EUR",
    },
  },
};

const setDateTimeFormats = {
  short: {
    year: "numeric",
  },
  long: {
    month: "long",
    day: "numeric",
    weekday: "long",
  },
};
const datetimeFormats = {
  en: setDateTimeFormats,
  fr: setDateTimeFormats,
  es: setDateTimeFormats,
};

function loadLocaleMessages() {
  const locales = require.context(
    "../src/locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}
const lst = localStorage.getItem("user-lang-preference");
if (lst) {
  var default_locale = lst;
} else {
  var default_locale = import.meta.env.VUE_APP_I18N_LOCALE || "en";
  localStorage.setItem("user-lang-preference", default_locale);
}

var fallback_locale = import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "en";

const i18n = createI18n({
  locale: default_locale,
  fallbackLocale: fallback_locale,
  messages: loadLocaleMessages(),
  datetimeFormats,
  numberFormats,
});
export default i18n;
