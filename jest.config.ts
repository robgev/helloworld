import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }]
  },
  testMatch: ['<rootDir>/src/**/__tests__/**/*.(test|spec).(ts|tsx)', '<rootDir>/src/__tests__/**/*.(test|spec).(ts|tsx)', '<rootDir>/src/**/*.(test|spec).(ts|tsx)']
};

export default config;
