const getEnv = (env: string, defaultValue: string = ''): string => {
    return process.env[env] ? process.env[env] : defaultValue;
};

export { getEnv };
