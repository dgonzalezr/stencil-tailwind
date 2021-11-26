/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.scss'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        01: 'var(--pk-primary-01)',
        02: 'var(--pk-primary-02)',
        03: 'var(--pk-primary-03)',
        04: 'var(--pk-primary-04)',
      },
      secondary: {
        01: 'var(--pk-secondary-01)',
        02: 'var(--pk-secondary-02)',
        03: 'var(--pk-secondary-03)',
        04: 'var(--pk-secondary-04)',
      },
      tertiary: {
        01: 'var(--pk-tertiary-01)',
        02: 'var(--pk-tertiary-02)',
        03: 'var(--pk-tertiary-03)',
        04: 'var(--pk-tertiary-04)',
      },
      accent: {
        01: 'var(--pk-accent-01)',
        02: 'var(--pk-accent-02)',
        03: 'var(--pk-accent-03)',
        alt01: 'var(--pk-accent-alt-01)',
        alt02: 'var(--pk-accent-alt-02)',
        alt03: 'var(--pk-accent-alt-03)',
      },
      interaction: 'var(--pk-interaction)',
      interactionCompl: 'var(--pk-interaction-compl)',
      transparent: 'transparent',
      text: {
        01: 'var(--pk-text-01)',
        02: 'var(--pk-text-02)',
        03: 'var(--pk-text-03)',
        04: 'var(--pk-text-04)',
        05: 'var(--pk-text-05)',
      },
      ui: {
        01: 'var(--pk-ui-01)',
        02: 'var(--pk-ui-02)',
        03: 'var(--pk-ui-03)',
        04: 'var(--pk-ui-04)',
        05: 'var(--pk-ui-05)',
        06: 'var(--pk-ui-06)',
      },
      data: {
        01: 'var(--pk-data-01)',
        02: 'var(--pk-data-02)',
        03: 'var(--pk-data-03)',
        04: 'var(--pk-data-04)',
      },
      background: 'var(--pk-background)',
      elevation: {
        01: 'var(--pk-elevation-01)',
        02: 'var(--pk-elevation-02)',
        03: 'var(--pk-elevation-03)',
      },
      support: {
        01: 'var(--pk-support-01)',
        '01A': 'var(--pk-support-01A)',
        '01B': 'var(--pk-support-01B)',
        02: 'var(--pk-support-02)',
        '02A': 'var(--pk-support-02A)',
        '02B': 'var(--pk-support-02B)',
        03: 'var(--pk-support-03)',
        '03A': 'var(--pk-support-03A)',
        '03B': 'var(--pk-support-03B)',
        04: 'var(--pk-support-04)',
        '04A': 'var(--pk-support-04A)',
        '04B': 'var(--pk-support-04B)',
        05: 'var(--pk-support-05)',
        '05A': 'var(--pk-support-05A)',
        '05B7': 'var(--pk-support-05B7)',
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
