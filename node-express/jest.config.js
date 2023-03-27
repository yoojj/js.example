export default async () => {
    return {

        globals: {
            'ts-jest': {
                tsconfig: 'tsconfig.json',
            },
        },

        moduleFileExtensions: [
            'ts',
            'js',
        ],

        transform: {
            '^.+\\.(ts|js)$': 'ts-jest',
        },

        testMatch: [
            '**/test/**/*.test.(ts|js)',
        ],

        testEnvironment: 'node',

        moduleNameMapper: {
            '@/(.*)': '<rootDir>/src/$1'
        },
    };
};