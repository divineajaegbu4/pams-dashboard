export const config = {
    base_url: process.env.REACT_APP_BASE_URL,
    node_env: process.env.NODE_ENV,
    app_env: process.env.REACT_APP_ENV,
    title: process.env.REACT_APP_TITLE,
    requestLoopInterval: 30000, // ms
    isProduction: process.env.NODE_ENV === "production",
    isDev: process.env.NODE_ENV === "development",
    isStaging: process.env.NODE_ENV === "staging",
    email_rex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    ng_gsm_phone_rex: /^[0]\d{10}$|^[+]?[234]\d{12}$/,
    pageSize: 50,
    CONTACT_CENTER_SOURCE: process.env.REACT_APP_CONTACT_CENTER_SOURCE
};
