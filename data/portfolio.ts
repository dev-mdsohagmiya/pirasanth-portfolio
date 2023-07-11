export default [
  [
    {
      tag: 'Performance Testing',
      card: {
        feature: [
          'Running a Load test on Tes.com',
          'Running a Stress test on Tes.com',
          'Processing data and displaying it using Grafana & Influxdb',
          'Using Docker to run Grafana & Influxdb in the background ',
        ],
        description:
          'This is a POC to demonstrate Performance testing using K6.io with the support of Grafana, docker & Influxdb. I will be using Tes.com to achieve this.',
        tech: ['Javascript', 'NPM', 'K6', 'Docker', 'Grafana', 'Influxdb'],
        code: 'https://github.com/pirasanthan-jesugeevegan/amt-k6-tes',
        dev: true,
      },
      icons: [
        'simple-icons:javascript',
        'simple-icons:npm',
        'simple-icons:k6',
        'simple-icons:docker',
        'simple-icons:grafana',
        'simple-icons:influxdb',
      ],
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-07a5e5a0c155cb8034b531d9baf2c1fffe33e72a-1080x1080-png',
          _type: 'reference',
        },
      },
      name: 'Tes.com',
      display: true,
      order: 1,
    },
    {
      card: {
        description:
          'This app fetches weather data based on your location.It uses http://openweathermap.org/ API',
        demo: 'https://weather-app-checker.netlify.app/',
        tech: ['HTML/SCSS', 'JavaScript', 'REST', 'Postman', 'Netlify'],
        code: 'https://github.com/pirasanthan-jesugeevegan/dev-weather-app',
        dev: true,
        feature: [
          '- Geolocation',
          '- Modern Icon using https://erikflowers.github.io/weather-icons/',
          '- Wind direction',
          '- Daylight calculation',
        ],
      },
      icons: ['javascript', 'sass', 'netlify'],
      image: {
        asset: {
          _type: 'reference',
          _ref: 'image-6a6a059badb264108c8d78c6f951cfee5fc3743e-1080x1080-png',
        },
        _type: 'image',
      },
      name: 'Weather APP',
      display: false,
      order: 1,
    },
    {
      display: false,
      order: 2,
      tag: 'E2E Testing',
      card: {
        description:
          'Using Cypress and Cucumber to perform test on Login Form. Positive and Nagative testing were covered, extent report produced',
        demo: 'https://pirasanthan-jesugeevegan.github.io/amt-cypress-perlego_login_form/',
        tech: ['Cypress.io', 'Gherkin', 'Machawesome'],
        code: 'https://github.com/pirasanthan-jesugeevegan/amt-cypress-perlego_login_form',
        dev: false,
        feature: [
          '- Test Case 1 - Verify if a user will be able to login with a valid username and valid password',
          '- Test Case 2 - Verify that the login screen contains elements such as                                                 Username, Password, Sign in button, Remember password check box, Forgot                                                 password link, and Create an account link.',
          '- Test Case 3 - Verify if a user will be able to login with a invalid                                                 username and valid password',
          '- Test Case 4 - Verify if a user cannot login with a valid username and                                                 an                                                 invalid password.',
          '- Test Case 5 - Verify the login page for both, when the field is blank                                                 and Submit button is clicked.',
        ],
      },
      icons: ['cypress', 'cucumber', 'chai'],
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-cce624a74fd876793a97c7f7fee29c3f98f2a050-1080x1080-png',
        },
      },
      name: 'Perlego Login',
    },
    {
      icons: [
        'simple-icons:cypress',
        'simple-icons:cucumber',
        'simple-icons:chai',
        'simple-icons:react',
        'simple-icons:docker',
        'simple-icons:jenkins',
      ],
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-b199e4fd658481dbbf6ab24dc417bc0750b954a6-1080x1080-png',
          _type: 'reference',
        },
      },
      name: 'Hotel Booking',
      display: true,
      order: 2,
      tag: 'E2E Testing',
      card: {
        feature: [
          '- CI/CD Pipeline mocking development lifecycle with Three environments ',
          '- Reusable Gherkin scripts ',
          '- JSON mapping file for attributes ',
          '- Config file for different env',
        ],
        description:
          'This is a POC for CI/CD approach with behavior driven development (BBD) with pipeline that deploys to three different environments (Prod,Dev & Staging).',
        demo: 'https://hotel-prod.netlify.app/',
        tech: [
          'Cypress.io',
          'Cucumber.io',
          'Cucumber html reporter',
          'React Js',
          'Netlify',
          'Docker',
          'Jenkins',
        ],
        code: 'https://github.com/pirasanthan-jesugeevegan/amt-hotel-booking',
        dev: true,
      },
    },
    {
      name: 'Skyscanner Mobile App',
      display: true,
      order: 3,
      tag: 'Mobile App Testing',
      card: {
        tech: ['Appium', '-Webdriver.io', 'Browserstack', 'Machawesome'],
        code: 'https://github.com/pirasanthan-jesugeevegan/amt-appium-skyscanner',
        dev: false,
        feature: [
          '- Test Case 1 - Verify that the login screen contains necessary elements',
          '- Test Case 2 - Verify that the user can login with valid creds',
          '- Test Case 3 - Verify if a user cannot login with a valid email and an invalid password',
          '- Test Case 4 - Verify if a user cannot login with a invalid email and an valid password',
          '- Test Case 5 - Verify that the onboarding contains necessary elements',
          '- Test Case 6  - Verify that the Policy Screen contains necessary elements',
          '- Test Case 7 - Verify that the user can complete the onboard flow successfully',
        ],
        description:
          'This is a task to Automate the Skyscanner Native App using Appium and Webdriver, Please see below for the Test Case that are automated',
      },
      icons: [
        'appium',
        'simple-icons:chai',
        'browserstack',
        'simple-icons:webdriverio',
      ],
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-5c5086ef5f15f7d34caef1d51d0a5802db389557-1080x1080-png',
          _type: 'reference',
        },
      },
    },
    {
      order: 4,
      card: {
        description:
          'Using Selenium and Cucumber to perform regression test on user registration. Positive and Negative testing were covered, extent report produced',
        tech: [
          'Selenium WebDriver',
          'Gherkin',
          'JUnit',
          'Extent Reports',
          'BBD',
        ],
        code: 'https://github.com/pirasanthan-jesugeevegan/amt-selenium-userRegistration',
        dev: false,
        feature: [
          '- Test Case 1 - Automate User Registration Process',
          '- Test Case 2 - Verify invalid email address error.',
          '- Test Case 3 - Verify error messages for mandatory fields.',
          '- Test Case 4 - Verify error messages for entering incorrect values in                                                 fields.',
        ],
      },
      icons: ['selenium', 'webdriver', 'cucumber', 'browserstack'],
      image: {
        asset: {
          _type: 'reference',
          _ref: 'image-bad9328bc335536f4d717ce008b20f710954c28d-1080x1080-png',
        },
        _type: 'image',
      },
      name: 'Registration Form',
      display: false,
    },
    {
      card: {
        tech: ['Cypress', 'Mochawsome', 'OpenWeather API'],
        code: 'https://github.com/pirasanthan-jesugeevegan/amt-cypress-weatherAPI',
        dev: false,
        feature: [
          'TC01 - GET /air_pollution/history - 200',
          'TC02 - GET /air_pollution/history - Invalid Latitude - 400',
          'TC03 - GET /air_pollution/history - Invalid Longitude - 400',
          'TC04 - GET /air_pollution/history - Invalid Start Time - 400',
          'TC05 - GET /air_pollution/history - Invalid End Time - 400',
          'TC06 - GET /air_pollution/history - No Location - 400',
          'TC07 - GET /air_pollution/history - No Time - 400',
          'TC08 - GET /air_pollution/history - invalid APP ID - 401',
        ],
        description:
          'This is example is to automate the OpenWeather API using Cypress and Mochawesome report, Please see below for the Test Case that are automated',
        demo: 'https://pirasanthan-jesugeevegan.github.io/amt-cypress-weatherAPI/',
      },
      icons: ['simple-icons:cypress', 'simple-icons:chai'],
      image: {
        asset: {
          _ref: 'image-920548bbeb438ba8175c1da1ffce529afa1b9dac-1080x1080-png',
          _type: 'reference',
        },
        _type: 'image',
      },
      name: 'Open Weather API',
      display: true,
      order: 4,
      tag: 'API Testing',
    },
    {
      name: 'Task Tracker',
      display: false,
      order: 5,
      card: {
        tech: ['React', 'Express', 'Node.js', 'Mongodb', 'Netlify'],
        code: 'https://github.com/pirasanthan-jesugeevegan/dev-task-tracker',
        dev: true,
        feature: [
          '- Add task',
          '- Set reminder ',
          '- Delete Task',
          '- Edit task',
        ],
        description:
          'This is Task tracking app that allows users to create a tack and set reminder. This app was created with React.js & Node.js ',
        demo: 'https://task-tracker-pj.netlify.app/',
      },
      icons: ['mongodb', 'express', 'react', 'node', 'netlify'],
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-35d4513a137b8063303703b67030a534c5b5f596-1080x1080-png',
          _type: 'reference',
        },
      },
    },
    {
      icons: ['mdi:nodejs', 'mdi:docker', 'mdi:aws', 'mdi:slack', 'mdi:github'],
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-64454ceaec5e416356954fcedb56486b8eff23e1-1080x1080-png',
          _type: 'reference',
        },
      },
      name: 'Slack Bot',
      display: true,
      order: 5,
      tag: 'BOT',
      card: {
        feature: [
          '- Tigger a GitHub action workflow via Slack',
          '- Build and push docker image to AWS ECR',
        ],
        description:
          'This is an example of how to create a simiple Slack bot using Slack API, then using Github action (CI) to build and push the latest docker image to AWS ECR. ',
        tech: [
          'Slack API',
          'Node.js',
          'Github Action (CI)',
          'Docker',
          'AWS ECR',
        ],
        code: 'https://github.com/pirasanthan-jesugeevegan/dev-slack-bot',
        dev: true,
      },
    },
    {
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-d39698ce1a31786d4a2b410ca16ff5cbd3b906a4-1080x1080-png',
          _type: 'reference',
        },
      },
      name: 'Applitool vs Percy',
      display: true,
      order: 6,
      tag: 'Visual Testing',
      card: {
        demo: 'https://pirasanthan-jesugeevegan.github.io/amt-cypress-sanity/',
        tech: [
          'Next.js',
          'Cypress',
          'Sanity',
          'Cucumber',
          'Mochawsome',
          'Percy',
          'Applitools',
        ],
        code: 'https://github.com/pirasanthan-jesugeevegan/amt-cypress-sanity',
        dev: true,
        feature: [
          '- Cypress & Cucumber E2E Test script ',
          '- Reusable Cucumber script',
          '- CI/CD Pipeline mocking development lifecycle  ',
          '- Visual Testing integrated to Cypress & Cucumber ',
          '- Option to run visual testing with e2e or just e2e',
        ],
        description:
          'The application is a Next.js with Sanity.io, this is an example application uses to demonstrate how we can achieve a CI/CD using cypress and cucumber and integrating visual testing tool. ',
      },
      icons: [
        'simple-icons:cypress',
        'simple-icons:cucumber',
        'simple-icons:percy',
        'applitools',
        'simple-icons:react',
      ],
    },
    {
      display: false,
      order: 6,
      card: {
        code: 'https://github.com/pirasanthan-jesugeevegan/amt-cypress-Expedia',
        dev: false,
        feature: [
          '- Test Case 1 - Verify that the stay screen contains elements such as Destination, departure Date, Arrival Date, Add Flight, Add Car, Travellers and Search button.',
          "- Test Case 2 - Verify if a user will be able to successfully search with a valid data'",
          '- Test Case 3 - Verify if a user will not be able to book a flight without location',
          '- Test Case 4 - Verify if a user is able to filter deals',
        ],
        description:
          'his is a task to Automate the Expedia Hotel booking system using Cypress and Cucumber with Mochawesome report, Please see below for the Test Case that are automated',
        tech: ['Cypress.io', 'Cucumbers ', 'Machawesome'],
      },
      icons: ['cypress', 'cucumber', 'chai'],
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-2cc675f7e9c0b24d35c5ca4044ac8f6b6e71bf25-1080x1080-png',
          _type: 'reference',
        },
      },
      name: 'Expedia Hotel',
    },
    {
      icons: ['cypress', 'cucumber', 'chai'],
      image: {
        asset: {
          _type: 'reference',
          _ref: 'image-4f1d18d10acde96059be37217130d5cf1319f06c-1080x1080-png',
        },
        _type: 'image',
      },
      name: 'E-Commerce',
      display: false,
      order: 7,
      card: {
        demo: 'https://pirasanthan-jesugeevegan.github.io/amt-cypress-e-commerce-website/',
        tech: ['Cypress.io', 'Cucumber'],
        code: 'https://github.com/pirasanthan-jesugeevegan/amt-cypress-e-commerce-website',
        dev: false,
        feature: [
          '- Test Case 1 - Automate End to End Buy Order functionality',
          '- Test Case 2 - Verify that Add to Wishlist only works after login.',
          '- Test Case 3 - Verify that Total Price is reflecting correctly if user changes quantity on Shopping Cart Summary Page.',
        ],
        description:
          'Using Cypress and Cucumber to perform test on E-commerce, Positive and Nagative testing were covered, extent report produced',
      },
    },
  ],
];
