export default [
  {
    categories: [
      {
        title: 'Cypress',
      },
      {
        title: 'Jenkins',
      },
      {
        title: 'Docker',
      },
    ],
    author: {
      name: 'PJ',
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
          _type: 'reference',
        },
      },
    },
    mainImage: {
      _type: 'image',
      asset: {
        _ref: 'image-7aeeaec40abf094f933289f8e82dcb16ef78d7f8-800x400-svg',
        _type: 'reference',
      },
    },
    _id: '292a2c51-0dd3-4f7f-b45c-9d8b3717d4c8',
    publishedAt: '2022-04-22T14:44:00.000Z',
    comments: [],
    publish: true,
    likes: 8,
    description:
      "In this post I'm going to show you how to run Cypress in a Jenkins pipeline (via Docker)....",
    body: [
      {
        children: [
          {
            marks: [],
            text: 'Introduction',
            _key: 'ff4aa3f3c0f90',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'dfebf0c326e6',
        markDefs: [],
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'In this post we are going to cover a top that is highly important to take your cypress project to the next level.\nI will be going to show you how to run cypress in a Jenkins pipeline via Docker container.',
            _key: '562bbb7bc4620',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'b769c1b6bd5e',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'h4',
        _key: 'd6c2fd2c6e0a',
        markDefs: [],
        children: [
          {
            marks: [],
            text: '\nPrerequisites',
            _key: '82bcd1ecbdff',
            _type: 'span',
          },
        ],
      },
      {
        children: [
          {
            text: 'Cypress Project',
            _key: 'af3e6c2277fb0',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'edbbd55164b7',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: '08ab6954ede1',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Docker installed & configured on your local machine',
            _key: 'adaeb478e0af0',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            text: '',
            _key: '0a69188d7c94',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '97f91fdde681',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '04e61316c9f70',
            _type: 'span',
            marks: [],
            text: 'Docker',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'df7fa45cbc66',
      },
      {
        children: [
          {
            text: 'Setting up Docker',
            _key: '772960bfe1cb0',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _type: 'span',
            marks: [],
            text: ':\nWe will need to create some volumes for Jenkins Docker container',
            _key: '05b06717d341',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '8903146b8194',
        markDefs: [],
      },
      {
        _type: 'code',
        language: 'bash',
        _key: '1f9944bc86c8',
        code: '# from the terminal\ndocker volume create jenkins-data \ndocker volume create npm-cache\ndocker volume create cypress-cache',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Run Docker:',
            _key: '8082b6dc5935',
            _type: 'span',
            marks: ['strong'],
          },
          {
            text: '\nWe can use ',
            _key: '2d58d8d47b02',
            _type: 'span',
            marks: [],
          },
          {
            marks: ['code'],
            text: 'docker run',
            _key: '1de7ef3012e4',
            _type: 'span',
          },
          {
            text: ' command to pull down the Jenkins Docker image and serving the Jenkins App on ',
            _key: 'da3aebba711f',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'localhost:8080',
            _key: 'a61860d8e15c',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'd6a66d4daed7',
      },
      {
        _key: '81cdad23644b',
        code: '# from the terminal\ndocker run -u root -d --name jenkins-tut -p 8080:8080 --ipc=host \\\n-v jenkins-data:/var/jenkins_home \\\n-v npm-cache:/root/.npm \\\n-v cypress-cache:/root/.cache \\\n-v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean:latest',
        _type: 'code',
        language: 'bash',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '4c71c5f3c829',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Jenkins',
            _key: 'ccffcdfb90680',
            _type: 'span',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'f821bbfe137c',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Unlocking Jenkins:',
            _key: 'f08816d67413',
          },
        ],
      },
      {
        _key: '7331d7f9b502',
        asset: {
          _ref: 'image-f5cd2b68484be5dafa5ad35ad00c9d1768788550-990x679-jpg',
          _type: 'reference',
        },
        _type: 'image',
      },
      {
        markDefs: [],
        children: [
          {
            text: "If it's your first time running Jenkins, It will prompt you with Unlock Jenkins Page where you will need to enter an admin password. To retrieve this we can find it in the logs. It looks like this: ",
            _key: '5ea210642438',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['code'],
            text: '6f0s4d3663814687954b682940572567',
            _key: 'd4b3cc848259',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'b57f98749dce',
      },
      {
        _key: 'bee529313f0b',
        code: '# from the terminal\ndocker logs jenkins-tut',
        _type: 'code',
        language: 'bash',
      },
      {
        _key: 'bd881ccbb8b0',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "You'll be requested to establish a user and log in for future sessions when you go passed the 'Unlock Jenkins' screen. Continue by creating your selected user.",
            _key: 'f2ab04eb2eee0',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'cffd164cee90',
        markDefs: [],
        children: [
          {
            _key: 'e930c01db1f7',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Install Plugins:',
            _key: '01d749aa3ca1',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '1f9636a0375a',
      },
      {
        style: 'normal',
        _key: '20cad43954bc',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "The 'Customize Jenkins' page will appear after that. Continue by selecting 'Install Suggested Plugins'.",
            _key: '11ad743f696a0',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '3b609b009ee0',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '9c69bbf331c0',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '099629c19359',
            _type: 'span',
            marks: [],
            text: 'Creating Dockerfile & Jenkinfile',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'fe9acb3f872b',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'These are examples, you will need to modify them for your own project ',
            _key: '1c69aee02478',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'ea9552e393ef',
        markDefs: [],
      },
      {
        _key: 'bf9c6d8f4c61',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Dockerfile\n',
            _key: 'bdceea3773cf',
          },
          {
            text: 'Docker file is optional as we can pull down the cypress docker image from Jenkinfile directly ',
            _key: 'd32b7cb523bb',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        language: 'bash',
        _key: '3799346e6397',
        code: '# use Cypress provided image with all dependencies included\nFROM cypress/base:10\nWORKDIR /home/node/app - replace with your desire directory \n# copy our application\nCOPY package.json package-lock.json ./\nCOPY app ./app\nCOPY serve.json ./\n# copy Cypress tests\nCOPY cypress.json cypress ./\nCOPY cypress ./cypress\n\n# avoid many lines of progress bars during install\nENV CI=1\n\n# install NPM dependencies and Cypress binary\nRUN npm ci\n# check if the binary was installed successfully\nRUN $(npm bin)/cypress verify',
        _type: 'code',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '4dc5da50530c',
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Jenkinfile',
            _key: '682c9ef10109',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' ',
            _key: '291e2b98863d',
          },
        ],
      },
      {
        _type: 'code',
        language: 'bash',
        _key: '53e3125f99cd',
        code: "pipeline {\n\n    agent { dockerfile true }\n\n    triggers {\n         cron('H 08 * * *')\n    }\n    \n    parameters {\n        choice(name: 'BROWSER', choices: ['chrome', 'electron', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')\n        choice(name: 'ENVIRONMENT', choices: ['stage','dev', 'prod'], description: 'Pick the environment to test against')\n        choice(name: 'TEST', choices: ['@regression','@smoke'], description: 'Pick the type of test to runned')\n    }\n\n    options {\n        ansiColor('xterm')\n    }\n    \n    stages {\n        stage('Run Tests') {\n            parallel {\n                stage('Test Home') {\n                    steps {\n                        script {\n                            sh \"npx cypress run --browser ${BROWSER} --env configFile=${ENVIRONMENT}\"\n                        } \n                    }\n                }\n                \n            }\n        }\n    }\n    post {\n        always {\n           sh 'run reporting commands etc..'\n   \n        }\n    } \n}",
      },
    ],
    keyword: 'Cypress, Jenkins, Docker',
    slug: {
      current: 'integrate-docker-and-jenkins-in-to-cypress',
      _type: 'slug',
    },
    title: 'Integrate Docker  & Jenkins in to Cypress',
    text: '2 min read',
    minutes: 1.88,
    time: 112800,
    words: 376,
  },
  {
    likes: 7,
    categories: [
      {
        title: 'Cypress',
      },
      {
        title: 'Mailslurp',
      },
    ],
    author: {
      name: 'PJ',
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
        },
      },
    },
    publishedAt: '2022-04-07T15:41:42.996Z',
    slug: {
      current: 'test-emails-with-cypress-io',
      _type: 'slug',
    },
    title: 'Test emails with Cypress.io ',
    body: [
      {
        style: 'h4',
        _key: 'ad2ceb059435',
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Introduction',
            _key: '4900c9b3b9330',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            text: "We will be discussing a topic that has been talked about when it comes to E2E testing. It's vital to cover complete E2E testing, even if the user receives an email confirmation.",
            _key: '4900c9b3b9331',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'eb523990f49d',
        markDefs: [],
      },
      {
        _key: '31e0c7d7bded',
        markDefs: [],
        children: [
          {
            text: '',
            _key: '8a7ea6d33f6a',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        children: [
          {
            marks: [],
            text: 'In this example, we will be looking at the forgot password feature on tes.com.\nWe will automate a test case to verify that the user receives an email to reset their password. We will be checking elements such as the From, Subject, and Body of the email.',
            _key: 'e7525c79caac0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '004b40f2dd6b',
        markDefs: [],
      },
      {
        children: [
          {
            text: '',
            _key: '16403123a8d8',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'bb878c2252cd',
        markDefs: [],
      },
      {
        markDefs: [],
        children: [
          {
            _key: '32464e235df90',
            _type: 'span',
            marks: [],
            text: 'The good news is that MailSlurp is a free API that lets you create real, randomized email addresses on demand. It also lets you send and receive email programmatically',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '6a092a66e0c9',
      },
      {
        style: 'h4',
        _key: '1844f7141564',
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Prerequisites',
            _key: '1ddbd49ea973',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '7accd57867b9',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _key: '72490d1dd175',
            _type: 'span',
            marks: [],
            text: 'Make sure you have NodeJS installed',
          },
        ],
        level: 1,
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Create a free account with MailSlurp',
            _key: 'e827d56652fd',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '0ebfe4ac37d7',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'e23266a89c9b',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Create an Inbox to get an email & Inbox ID (save it for later)',
            _key: '9871ff8f8b11',
            _type: 'span',
          },
        ],
        level: 2,
      },
      {
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Setup Cypress',
            _key: '8604062fe0130',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '08882d3ef8fe',
      },
      {
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Step 1: ',
            _key: 'c2f1f2e6a69f2',
            _type: 'span',
          },
          {
            marks: [],
            text: 'Install Cypress\nMove to your directory ',
            _key: 'c2f1f2e6a69f3',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '291e7dcae8fb',
      },
      {
        _key: 'f00771d9c930',
        code: 'cd /your/project/path',
        _type: 'code',
        language: 'powershell',
      },
      {
        children: [
          {
            text: 'Install Cypress',
            _key: 'cbeed479e9b80',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'f83179113e5a',
        markDefs: [],
      },
      {
        language: 'powershell',
        _key: 'efb46c1d6096',
        code: 'npm install cypress --save-dev ',
        _type: 'code',
      },
      {
        style: 'normal',
        _key: '1dbf612d4bc0',
        markDefs: [],
        children: [
          {
            text: '\n',
            _key: 'd29f85cafd92',
            _type: 'span',
            marks: [],
          },
          {
            marks: ['strong'],
            text: 'Step 2: ',
            _key: '71c52bbb1e771',
            _type: 'span',
          },
          {
            text: 'Opening Cypress',
            _key: '66197abbb3dc',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        code: 'npx cypress open',
        _type: 'code',
        language: 'powershell',
        _key: 'be9e5798bad0',
      },
      {
        children: [
          {
            _key: '97a6210cc4d80',
            _type: 'span',
            marks: [],
            text: 'This will generate the cypress folder where we can create a spec file\n\n',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Step 3',
            _key: '055451b4c38d',
          },
          {
            _type: 'span',
            marks: [],
            text: ': Integrate MailSlurp\n',
            _key: 'cba6ffae7fbe',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '2b5466a333b7',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: 'b5f50087b19e',
        markDefs: [],
        children: [
          {
            text: 'Install package ',
            _key: '9cba22ac536d',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        _type: 'code',
        language: 'powershell',
        _key: '5eedc90b42bb',
        code: 'npm install --save-dev cypress-mailslurp',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '7b6855ddefa60',
            _type: 'span',
            marks: [],
            text: 'Then include the plugin in your ',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'cypress/support/index.js',
            _key: '7b6855ddefa61',
          },
          {
            marks: [],
            text: ' file.',
            _key: '7b6855ddefa62',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '859ff071f09e',
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: 'fe40dd875fca',
        code: '/// <reference types="cypress-mailslurp" />\nimport "cypress-mailslurp";',
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'df1ee15150ee0',
            _type: 'span',
            marks: [],
            text: 'Set the environment variable ',
          },
          {
            _key: 'df1ee15150ee1',
            _type: 'span',
            marks: ['code'],
            text: 'CYPRESS_MAILSLURP_API_KEY',
          },
          {
            _key: 'df1ee15150ee2',
            _type: 'span',
            marks: [],
            text: ' or use the ',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'cypress.json',
            _key: 'df1ee15150ee3',
          },
          {
            text: ' file ',
            _key: 'df1ee15150ee4',
            _type: 'span',
            marks: [],
          },
          {
            _key: 'df1ee15150ee5',
            _type: 'span',
            marks: ['code'],
            text: 'env',
          },
          {
            _type: 'span',
            marks: [],
            text: ' property:',
            _key: 'df1ee15150ee6',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'fbf0f8f30118',
      },
      {
        markDefs: [],
        children: [
          {
            text: '',
            _key: '80ccf18f5768',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '0f718ef6586c',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '76d74feba81d0',
            _type: 'span',
            marks: [],
            text: '- Environment variable',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'c27cb686da7c',
      },
      {
        _key: 'b2c796ba9096',
        code: 'CYPRESS_MAILSLURP_API_KEY=your-api-key cypress run',
        _type: 'code',
        language: 'powershell',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: '- Cypress env property',
            _key: '35ff89c9fcb90',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '99b3a84db046',
        markDefs: [],
      },
      {
        _key: '45c734a56440',
        code: '{ "env": { "MAILSLURP_API_KEY": "your-mailslurp-api-key" } }',
        _type: 'code',
        language: 'json',
      },
      {
        style: 'normal',
        _key: '760378e4e400',
        markDefs: [],
        children: [
          {
            _key: '67fdff5f111f0',
            _type: 'span',
            marks: [],
            text: 'Then, we will set ',
          },
          {
            text: 'defaultCommandTimeout',
            _key: 'ece94b20123c',
            _type: 'span',
            marks: ['code'],
          },
          {
            text: ' and ',
            _key: '55af378152e4',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'requestTimeout',
            _key: 'f4b82e09fb83',
          },
          {
            _key: '3eda846efa4c',
            _type: 'span',
            marks: [],
            text: " to 30 seconds, allowing our tests enough time to wait for emails to arrive. We will also modify the Cypress browser's viewport dimensions.",
          },
        ],
        _type: 'block',
      },
      {
        _key: '5ceec3d28729',
        code: '{ \n  "defaultCommandTimeout": 30000, \n  "requestTimeout": 30000, \n  "viewportWidth": 1920,\n  "viewportHeight": 1080,\n}',
        _type: 'code',
        language: 'json',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '827ddc3f8adc',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '2a91139bda22',
      },
      {
        style: 'normal',
        _key: '26be01b7dfe8',
        markDefs: [],
        children: [
          {
            text: 'Step 4',
            _key: '1b76a2abec95',
            _type: 'span',
            marks: ['strong'],
          },
          {
            marks: [],
            text: ': Create a Spec file\nNext, create a test spec in with the following folder structure:',
            _key: 'fc4f1021b480',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        language: 'powershell',
        _key: '6323e7333437',
        code: 'cypress\n└── integration\n    └── example.spec.js',
        _type: 'code',
      },
      {
        markDefs: [],
        children: [
          {
            text: "let's write our first test in the above directory:",
            _key: 'b1817045c1d0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a83a42554118',
      },
      {
        code: "describe('Sign up', () => {\n  context('Example sign up page', () => {\n    it('can load the sign up form', () => {\n      cy.visit('https://www.tes.com/');\n      cy.contains('School Portal').click();\n      cy.get('.t-switch-form').click();\n      cy.get('.margin-bottom-md > .t-switch-form').click();\n      cy.get('#auth-identification')\n        .wait(500)\n        .type('emailAddress');\n      cy.get('.tes-btn').click();\n      cy.mailslurp()\n        .then((mailslurp) =>\n          mailslurp.waitForLatestEmail(\n            'inboxId',\n            30000,\n            true\n          )\n        )\n        .then((email) => {\n          expect(email.subject).to.contain('Tes Password Reset');\n        });\n    });\n  });\n});",
        _type: 'code',
        language: 'javascript',
        _key: '829a1fb26753',
      },
      {
        children: [
          {
            text: 'Note',
            _key: '7767895439ef',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' - Replace ',
            _key: '093771b87353',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'emailAddress',
            _key: '6bc179688f3b',
          },
          {
            _type: 'span',
            marks: [],
            text: ' & ',
            _key: 'a5f02cbde5b3',
          },
          {
            _key: '86f259085228',
            _type: 'span',
            marks: ['code'],
            text: 'inboxId',
          },
          {
            _key: '5d7d34d88789',
            _type: 'span',
            marks: [],
            text: ' with your mailslurp inbox id and email address ',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'b0e7fe456eff',
        markDefs: [],
      },
      {
        asset: {
          _ref: 'image-17a3d6361a17970774bcb50297d91d5943915b07-730x410-gif',
          _type: 'reference',
        },
        _type: 'image',
        _key: '8a9dd399b967',
      },
      {
        children: [
          {
            _key: 'e53687db15d80',
            _type: 'span',
            marks: [],
            text: 'Common methods',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'f250e4b45f0f',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '560fb5368e5d',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Receive emails in tests',
            _key: 'f6a47cd9dcdd0',
          },
        ],
      },
      {
        language: 'javascript',
        _key: '65ffa5b27c65',
        code: 'cy.mailslurp()\n    .then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true))\n    .then(email => expect(email.subject).to.contain("My email"))',
        _type: 'code',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Send emails',
            _key: 'fbdfb359573d0',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '6aa727819442',
        markDefs: [],
      },
      {
        language: 'javascript',
        _key: 'e164772c0510',
        code: "cy.mailslurp()\n    .then(mailslurp => mailslurp.sendEmail(inboxId, { to: ['test@example.com'], subject: 'test', body: '<html></html>', isHTML: true }))",
        _type: 'code',
      },
    ],
    keyword: 'Cypress, MailSlurp',
    mainImage: {
      asset: {
        _type: 'reference',
        _ref: 'image-9bb874e7a33cffca75d60ab754bde42340f4102d-800x400-svg',
      },
      _type: 'image',
    },
    _id: 'da282aeb-3460-47e3-8a54-7138332a4b67',
    comments: [],
    description:
      "We will be discussing a topic that has been talked about when it comes to E2E testing. It's vital t...",
    publish: true,
    text: '2 min read',
    minutes: 1.25,
    time: 75000,
    words: 250,
  },
  {
    publishedAt: '2022-03-17T16:49:00.000Z',
    keyword: 'automation, practice, framework, websites',
    slug: {
      _type: 'slug',
      current: 'websites-to-practice-automation-testing',
    },
    body: [
      {
        style: 'normal',
        _key: '0510daac43c4',
        markDefs: [],
        children: [
          {
            _key: 'defad63c76760',
            _type: 'span',
            marks: [],
            text: 'This list includes automation test sites that provide some unique features that other sites do not have. As a result, you can combine everything to get a complete profile of different types of automation skills.',
          },
        ],
        _type: 'block',
      },
      {
        style: 'h4',
        _key: '1232623f28cc',
        markDefs: [
          {
            _type: 'link',
            href: 'http://automationpractice.com/index.php',
            _key: '236f0d41f891',
          },
        ],
        children: [
          {
            _key: 'db30e1495161',
            _type: 'span',
            marks: ['236f0d41f891'],
            text: 'Web UI - Sample E-Commerce Site',
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Type:',
            _key: '356f533466f10',
          },
          {
            marks: [],
            text: ' UI interactions',
            _key: '356f533466f11',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '7a212388a19a',
        markDefs: [],
      },
      {
        children: [
          {
            _key: '7af3b89596d8',
            _type: 'span',
            marks: ['strong'],
            text: 'Description',
          },
          {
            text: ": You can practice various streams for online shopping on this fake e-commerce site. If you're working on a project where you need to practice various stream types, this is the site you need. You can practice",
            _key: '22e1fdd27c8a',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '3382502e6412',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'ac0ad8d5e591',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Adding items to the cart',
            _key: 'c69b835305e90',
          },
        ],
        level: 1,
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '21311aef80d3',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Checking out',
            _key: 'aa6e37dee70e0',
            _type: 'span',
          },
        ],
        level: 1,
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Validating that items have been added',
            _key: 'a15c0db2dc590',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'cddac12208e0',
      },
      {
        _type: 'image',
        _key: '58be9359113e',
        asset: {
          _ref: 'image-5ea49f8d2e94029e87756e64d68f10ef05a2e906-1900x910-png',
          _type: 'reference',
        },
      },
      {
        _key: '408ee418568a',
        markDefs: [],
        children: [
          {
            marks: [],
            text: '',
            _key: '5309ca15dbcf',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '191eb499890a',
        markDefs: [
          {
            _key: '80e5b9fe1326',
            _type: 'link',
            href: 'https://demoqa.com/',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['80e5b9fe1326'],
            text: 'Web UI - DemoQA',
            _key: '7e4ba82710520',
          },
        ],
      },
      {
        children: [
          {
            marks: ['strong'],
            text: 'Type:',
            _key: 'b5cf4de8728b',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' UI interactions',
            _key: '92e861012f29',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'eb8ccc17ff5a',
        markDefs: [],
      },
      {
        _key: '5e69e73f7fd9',
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Description',
            _key: 'dc9d946cc449',
            _type: 'span',
          },
          {
            text: ': This DemoQA contains many of the typical features found on most websites, and it is designed well to practice test automation, so that you can see how to approach each of the different things you may find, like a list that is ordered with drag and drop, user inputs of different types, and so on',
            _key: '1b164888666b',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        asset: {
          _ref: 'image-2deb0585ecffb3a6e36ac027bfef332c99e3386a-1572x1272-png',
          _type: 'reference',
        },
        _type: 'image',
        _key: '609366b00841',
      },
      {
        _key: 'd1f3935cf92c',
        markDefs: [],
        children: [
          {
            marks: [],
            text: '',
            _key: '94c3d0730bc0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '82fedc8e8d3b',
        markDefs: [
          {
            _type: 'link',
            href: 'https://github.com/public-apis/public-apis/blob/master/README.md',
            _key: 'f47aaac106bb',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['f47aaac106bb'],
            text: 'API - Public-APIs',
            _key: 'f946607282c0',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        style: 'normal',
        _key: '0bbc98239141',
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Type:',
            _key: 'e1e3e4b89b0f',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' API testing',
            _key: '4e363fcde82c',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Description',
            _key: 'faf7d8172e2a',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _type: 'span',
            marks: [],
            text: ": A collection of free APIs for use by developers & QA's. This includes APIs for using data, creating applications, and more.",
            _key: '983988bd4135',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'd6fc5d4a5c64',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '9ae9ed5bba8e',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '7c2cba5caeed',
          },
        ],
      },
      {
        markDefs: [
          {
            _key: 'b1a58aca8240',
            _type: 'link',
            href: 'https://github.com/saucelabs/sample-app-mobile',
          },
        ],
        children: [
          {
            _key: '2855d9536d5d0',
            _type: 'span',
            marks: ['b1a58aca8240'],
            text: 'Android & IOS - Sauce Labs',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'ec07323fd7b7',
      },
      {
        style: 'normal',
        _key: 'da225877a918',
        markDefs: [],
        children: [
          {
            _key: 'ee6e94c924a7',
            _type: 'span',
            marks: ['strong'],
            text: 'Type:',
          },
          {
            text: ' Mobile UI automation',
            _key: '24387564f68c',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            marks: ['strong'],
            text: 'Description',
            _key: '29441f3c9eb1',
            _type: 'span',
          },
          {
            _key: 'c45b36194eda',
            _type: 'span',
            marks: [],
            text: ': This repository contains our Sauce Labs sample app. You can use it locally or in our Real Device Cloud as a sample app for test automation.',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a586dbb85d8a',
        markDefs: [],
      },
      {
        _key: '30623e761560',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '5ce5d83b2e6f',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        children: [
          {
            _key: '6771c949c1e6',
            _type: 'span',
            marks: ['d4a7ab5a4931'],
            text: 'Web UI - Banking GlobalSQA',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '3b78e2912c5b',
        markDefs: [
          {
            _type: 'link',
            href: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
            _key: 'd4a7ab5a4931',
          },
        ],
      },
      {
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Type',
            _key: '7d331d8de52d',
          },
          {
            marks: [],
            text: ': UI interactions',
            _key: '15d5e4a25a0e',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '04ce3ad4a697',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: 'd8d204fcbc98',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Description',
            _key: 'c27900acdc17',
          },
          {
            text: ': This is a fantastic website to practice for the FinTech industries. This Angular Banking Site is a simple banking website written in Angular. There are transactions listed, as well as login behaviors. Transactions list, deposits, and withdrawals are also shown.',
            _key: 'b35a8d91ac8b',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '1ac61fb34549',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'ce488d1ee74f',
      },
      {
        asset: {
          _ref: 'image-3de853ea4d9d03869ee19d65877eb78dc96b50a5-1191x618-png',
          _type: 'reference',
        },
        _type: 'image',
        _key: '55485d051b48',
      },
    ],
    categories: [
      {
        title: 'Automation',
      },
    ],
    mainImage: {
      _type: 'image',
      asset: {
        _ref: 'image-ea344624eb6d2285854229b01d8bc9c2af77be9b-800x400-svg',
        _type: 'reference',
      },
    },
    title: 'Websites to Practice Automation Testing (UI, Mobile & API)',
    publish: true,
    _id: 'df14545e-1273-4315-9a8d-927d80527c8a',
    comments: [],
    description:
      'Testing sites are always a must, even for courses, workshops, webinars, testing new tools, and more....',
    likes: 4,
    author: {
      name: 'PJ',
      image: {
        asset: {
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
          _type: 'reference',
        },
        _type: 'image',
      },
    },
    text: '1 min read',
    minutes: 0.32,
    time: 19200,
    words: 64,
  },
  {
    keyword: 'Docker, AWS, AWS ECR, ECR, Cypress, Automation',
    publish: true,
    mainImage: {
      asset: {
        _ref: 'image-0f1f91cce736a810628392f70fef7d2b932a8e9e-800x400-png',
        _type: 'reference',
      },
      _type: 'image',
    },
    categories: [
      {
        title: 'Docker',
      },
      {
        title: 'Automation',
      },
      {
        title: 'AWS',
      },
    ],
    description:
      'In this article, we will be talking about docker (build, tag & push) to AWS ECR and how we can use it to speed up automation test runs.',
    publishedAt: '2023-03-08T00:00:00.000Z',
    author: {
      name: 'PJ',
      image: {
        asset: {
          _type: 'reference',
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
        },
        _type: 'image',
      },
    },
    slug: {
      current:
        'how-to-build-and-push-docker-images-to-aws-ecr-with-github-action',
      _type: 'slug',
    },
    body: [
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'In this article, we will be talking about docker (build, tag & push) to AWS ECR and how we can use it to speed up automation test runs.',
            _key: 'edba478df6080',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '42e95db0e7d9',
      },
      {
        style: 'normal',
        _key: 'e7192e82f98d',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Imagine if you had to build your docker image each time you trigger your automation run, this will take a longer time as the project may include many dependencies which means it may take a long time to install each dependency each time your trigger the run.',
            _key: '15d8d1678d050',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'How to speed up your test run?',
            _key: '2a5920f62be00',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '1de090463f65',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'b8c3d39ed3e7',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'We need to make sure we have the latest docker image build before we trigger the test run.',
            _key: 'e0b293fd900c0',
          },
        ],
      },
      {
        style: 'h4',
        _key: '4591b14fbe56',
        markDefs: [],
        children: [
          {
            text: 'How can we achieve this?',
            _key: '702ef00b5f5a0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'We can use a GitHub action to trigger on push to the master branch, this means that anytime you commit/merge your changes to the master branch we trigger an action.',
            _key: 'b928988cf6170',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'e129e47ce52c',
      },
      {
        style: 'normal',
        _key: '3f98d74d6cc4',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'In this case, we can trigger an action to build the docker image and push it to AWS ECR.',
            _key: '1cad5d70ae6f0',
          },
        ],
        _type: 'block',
      },
      {
        _key: 'a6343d1977c4',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'With this technique, when we run the automation test suit, we pull down the ',
            _key: '9920b51739830',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'latest',
            _key: 'fc858fd2402f',
          },
          {
            text: ' image from AWS ECR and run the test without any other actions.\nNow for the fun part, let’s go create these scenarios in our project.',
            _key: '662b03667f36',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: 'c20c5abc751c',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Prerequstion:',
            _key: '2440390cd6ca0',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        children: [
          {
            _key: 'e05b3ad50f270',
            _type: 'span',
            marks: ['strong'],
            text: 'Install Docker',
          },
          {
            marks: [],
            text: ' on your local machine',
            _key: 'e05b3ad50f271',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '15c6141019d7',
        listItem: 'number',
        markDefs: [],
      },
      {
        _key: '39d5fc3cbda0',
        listItem: 'number',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Have a ',
            _key: 'c5e77985d8370',
            _type: 'span',
          },
          {
            text: 'project',
            _key: 'c5e77985d8371',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _key: 'c5e77985d8372',
            _type: 'span',
            marks: [],
            text: ' to create a docker image hosted on ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'GitHub',
            _key: 'c5e77985d8373',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '56ebb8bd3553',
        listItem: 'number',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'You will need an ',
            _key: '04b90ca4c27d0',
          },
          {
            marks: ['strong'],
            text: 'AWS account',
            _key: '04b90ca4c27d1',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'h4',
        _key: 'd1f895146054',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Dockerfile',
            _key: '298b8dbde92b0',
          },
        ],
        _type: 'block',
      },
      {
        _key: 'f5abe72c1980',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Let’s open up a project from which you would like to build a docker image. In this example, I will be using a Cypress with Cucumber that I used for another article.',
            _key: '3de215b0260d0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: 'fb6246a855e9',
        markDefs: [],
        children: [
          {
            text: 'Create a ',
            _key: '6f104ab120890',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Dockerfile',
            _key: '6f104ab120891',
          },
          {
            _type: 'span',
            marks: [],
            text: ' at the root of your project, and the syntax should look like this:',
            _key: '6f104ab120892',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: 'FROM cypress/browsers:latest\n\nRUN mkdir /web-ui-amt\n\nWORKDIR /web-ui-amt\n\nCOPY package.json package.json\nCOPY package-lock.json package-lock.json\n\nRUN npm install\n\nCOPY . .\n\nCMD [""]\n# CMD ["npm", "cypress:run"] - to run test automatically when docker is running',
        _type: 'code',
        language: 'dockerfile',
        _key: '0e2242d56534',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '61950ae79bf2',
        markDefs: [],
        children: [
          {
            marks: [],
            text: "In the above syntax, we are using Cypress's base image that has pre-loaded with the browsers and other software we will need to run cypress. We then create a directory inside of the image and copy the package.json file to that new directory so we can perform an ",
            _key: 'c479a80a1cc10',
            _type: 'span',
          },
          {
            text: 'npm install',
            _key: 'aa2fa537efdb',
            _type: 'span',
            marks: ['code'],
          },
          {
            marks: ['strong'],
            text: '.',
            _key: 'fe8874b04f6a',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' We can add commands to be triggered the test when the docker image starts up but I will leave it blank as I have.',
            _key: 'c479a80a1cc12',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Test your image:',
            _key: 'eadb924615150',
          },
          {
            _key: 'eadb924615151',
            _type: 'span',
            marks: [],
            text: '\nWe will be using the below code to build our docker image with the tag ',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'web-ui-amt:latest',
            _key: 'eadb924615152',
          },
          {
            marks: [],
            text: ' with the file ',
            _key: 'eadb924615153',
            _type: 'span',
          },
          {
            _key: 'eadb924615154',
            _type: 'span',
            marks: ['code'],
            text: 'Dockerfile',
          },
          {
            _type: 'span',
            marks: [],
            text: ' in your root directory. ( if this command failed, it could be that you haven’t/didn’t install docker to your local machine )',
            _key: 'eadb924615155',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a60c24a94a6e',
      },
      {
        _type: 'code',
        language: 'powershell',
        _key: '66ac17728cd1',
        code: 'docker build -t web-ui-amt:latest -f Dockerfile .',
      },
      {
        style: 'normal',
        _key: 'fc1ce0033c73',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Once the docker is built, we can run it by the below code, We are starting to run the docker image with the command to run the test ',
            _key: '2f13c954d4080',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'npm run cypress:run',
            _key: '2f13c954d4081',
          },
        ],
        _type: 'block',
      },
      {
        _key: '4da68fab3b94',
        code: 'docker run web-ui-amt:latest npm run cypress:run',
        _type: 'code',
        language: 'powershell',
      },
      {
        _key: '1aa50d3f1f3d',
        markDefs: [],
        children: [
          {
            marks: [],
            text: '\nPush Image to AWS ECR locally',
            _key: '9397e48c5db20',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        style: 'normal',
        _key: 'c9e9705281f2',
        markDefs: [],
        children: [
          {
            text: 'First, you will need to log in to AWS and create a user with programmatic access to use AWS CLI if you don’t have one.',
            _key: 'a6f3e5b8e5cd0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        _key: 'e033bd4c69e7',
        asset: {
          _ref: 'image-bd5151880c1e81a43d24ad29d7be4b838fd26333-1735x922-png',
          _type: 'reference',
        },
        _type: 'image',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Configuring AWS CLI',
            _key: '8c70e0fe7cd10',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '8c0000eca6b3',
      },
      {
        _key: 'cd6d26c20f81',
        markDefs: [
          {
            _key: '3f1de2a7cd4a',
            _type: 'link',
            href: 'https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html',
          },
        ],
        children: [
          {
            marks: [],
            text: 'Once the user is created, you will need to configure AWS locally so that we can push the docker image to ECR with the right user. Type the below command in your terminal. If you get an error, you may need to ',
            _key: 'd2337e5480570',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['3f1de2a7cd4a'],
            text: 'install AWS',
            _key: 'd2337e5480571',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        language: 'powershell',
        _key: '18119acc9b16',
        code: 'aws configure',
        _type: 'code',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'a8ff5a417c2b',
        markDefs: [],
        children: [
          {
            _key: 'd1626521e5190',
            _type: 'span',
            marks: [],
            text: 'Enter the ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'access key',
            _key: 'd1626521e5191',
          },
          {
            _key: 'd1626521e5192',
            _type: 'span',
            marks: [],
            text: ' and ',
          },
          {
            marks: ['strong'],
            text: 'secret access key',
            _key: 'd1626521e5193',
            _type: 'span',
          },
          {
            _key: 'd1626521e5194',
            _type: 'span',
            marks: [],
            text: ' you got when you created a user.',
          },
        ],
      },
      {
        _type: 'image',
        _key: '5fce7f78ddcd',
        asset: {
          _ref: 'image-186f761d20beeea1bf98a72a14969360ca292e60-720x129-webp',
          _type: 'reference',
        },
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '688ab06786da',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'f6a830ecf9c5',
        markDefs: [],
      },
      {
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Create ECR Repo',
            _key: '48bd749fa7f90',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '1578e09281a5',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        _key: '878df9073fa9',
        markDefs: [],
        children: [
          {
            text: 'We will need to create an ECR Repo to add the docker images',
            _key: '08dff1c7a7f60',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        language: 'powershell',
        _key: '6b685db3cd21',
        code: 'aws ecr create-repository --repository-name <repo_name> --region <region_name>',
        _type: 'code',
      },
      {
        _key: 'c4be23d16b15',
        asset: {
          _ref: 'image-35272a57d9417d1fa3719418b0d1d63a36902549-1878x738-png',
          _type: 'reference',
        },
        _type: 'image',
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'You can verify it by going to AWS -> ECR -> Resposities, you should see your repository name',
            _key: '7d941a7f7a170',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '3a0e236302c1',
      },
      {
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Push Docker Image to ECR',
            _key: '204effee99c40',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '88af2aeddba1',
        listItem: 'bullet',
      },
      {
        _key: '631f96a8650a',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Retrieve an authentication token and authenticate your Docker client to your registry. Use the AWS CLI: (Privatekey can be found and extracted from the URL if you are inside the repository)',
            _key: 'a6d19c3cd5c90',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <privateKey>.dkr.ecr.us-east-1.amazonaws.com',
        _type: 'code',
        language: 'powershell',
        _key: 'de0b714b5183',
      },
      {
        children: [
          {
            _key: 'e9080a2462640',
            _type: 'span',
            marks: ['strong'],
            text: 'Tag Docker Image for ECR Repo',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '16d50d901b7e',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        children: [
          {
            marks: [],
            text: 'This is the format of the syntax:\n',
            _key: '9d2e178af0a10',
            _type: 'span',
          },
          {
            marks: ['code'],
            text: 'docker tag <source_image_tag> <target_ecr_repo_uri>',
            _key: '9d2e178af0a11',
            _type: 'span',
          },
          {
            marks: [],
            text: ' below you can see my real example for this repo.',
            _key: '9d2e178af0a12',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '66770310865e',
        markDefs: [],
      },
      {
        language: 'powershell',
        _key: '7da71b80f836',
        code: 'docker tag web-ui-amt-demo:latest 325398057325.dkr.ecr.us-east-1.amazonaws.com/web-ui-amt-demo:latest',
        _type: 'code',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Push Image to ECR:',
            _key: '443d8ec6b37e0',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '7077f59152a7',
      },
      {
        _key: '1fbf40c580d1',
        markDefs: [],
        children: [
          {
            _key: 'd07d7124d9510',
            _type: 'span',
            marks: [],
            text: 'This is the format of the syntax:\n',
          },
          {
            text: 'docker push <ecr-repo-uri>',
            _key: 'd07d7124d9511',
            _type: 'span',
            marks: ['code'],
          },
          {
            _type: 'span',
            marks: [],
            text: 'below you can see my real example for this repo.',
            _key: 'd07d7124d9512',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: 'docker push 325398057325.dkr.ecr.us-east-1.amazonaws.com/web-ui-amt-demo:latest',
        _type: 'code',
        language: 'powershell',
        _key: '811c43cfcfd2',
      },
      {
        style: 'normal',
        _key: '544395f688e1',
        markDefs: [],
        children: [
          {
            _key: 'df63270781280',
            _type: 'span',
            marks: [],
            text: 'Verify that the image is uploaded by going to AWS -> ECR -> Resposities -> Repository',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '4fc9a6ae3fee0',
            _type: 'span',
            marks: [],
            text: 'Push Docker Image via Github Action',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'a8a3a21e46f5',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            text: 'Create shell script to trigger in GitHub action',
            _key: 'cb8e8ec0a9810',
            _type: 'span',
            marks: ['strong'],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '3147a843a81e',
      },
      {
        style: 'normal',
        _key: 'f696f77ccb7c',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Create a shell script in the root level called ',
            _key: '0430aa1b77cb0',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'build-push.sh',
            _key: '0430aa1b77cb1',
          },
          {
            text: ' and add the below syntax. The below code will build an image with the current revision, cashing from the latest image',
            _key: '0430aa1b77cb2',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        language: 'powershell',
        _key: '536fd04f1fb3',
        code: '#!/usr/bin/env bash\nset -ex\n\nECR_PATH=325398057325.dkr.ecr.us-east-1.amazonaws.com\nUI_RUNNER_DOCKER_IMAGE=${ECR_PATH}/web-ui-amt\nUI_RUNNER_DOCKER_IMAGE_CACHE=${UI_RUNNER_DOCKER_IMAGE}:latest\nUI_RUNNER_DOCKER_IMAGE_REV=${UI_RUNNER_DOCKER_IMAGE}:${GITHUB_SHA}\n\n# Build image with current revision, caching from latest\ndocker pull -q ${UI_RUNNER_DOCKER_IMAGE_CACHE}\ndocker build \\\n  --cache-from ${UI_RUNNER_DOCKER_IMAGE_CACHE} \\\n  -t ${UI_RUNNER_DOCKER_IMAGE_REV} \\\n  .\n\ndocker push -q ${UI_RUNNER_DOCKER_IMAGE_REV}\n\nif [ $GITHUB_REF == "refs/heads/master" ]\nthen\n    docker tag ${UI_RUNNER_DOCKER_IMAGE_REV} ${UI_RUNNER_DOCKER_IMAGE_CACHE}\n    docker push -q ${UI_RUNNER_DOCKER_IMAGE_CACHE}\nfi',
        _type: 'code',
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'f669b3172f4d',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Create GitHub workflow',
            _key: 'd5503a5ac0150',
          },
        ],
      },
      {
        style: 'normal',
        _key: '0a57a157217a',
        markDefs: [],
        children: [
          {
            text: 'Create a file called ',
            _key: 'c99e1e6148970',
            _type: 'span',
            marks: [],
          },
          {
            text: 'ci.yml',
            _key: 'c99e1e6148971',
            _type: 'span',
            marks: ['code'],
          },
          {
            text: ' inside ',
            _key: 'c99e1e6148972',
            _type: 'span',
            marks: [],
          },
          {
            _key: 'c99e1e6148973',
            _type: 'span',
            marks: ['code'],
            text: '.github/workflows',
          },
          {
            _type: 'span',
            marks: [],
            text: '\nThen copy the below code into the ',
            _key: 'c99e1e6148974',
          },
          {
            text: 'ci.yml',
            _key: 'c99e1e6148975',
            _type: 'span',
            marks: ['code'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' file',
            _key: 'c99e1e6148976',
          },
        ],
        _type: 'block',
      },
      {
        _key: '59f5fdb51b20',
        markDefs: [],
        children: [
          {
            _key: '7d9e04f45e260',
            _type: 'span',
            marks: [],
            text: 'The blow code will be triggered on push to the master branch, it will then log in to AWS with the provided Secrrits then it will trigger the shell script that contains build, tag & push commands.',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        language: 'powershell',
        _key: 'c053b676ea19',
        code: "name: Docker Build & Push\non:\n  push:\n    branches: ['master']\n\njobs:\n  Docker:\n    name: Build Docker Image\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n\n      - name: Setup AWS ECR Details\n        uses: aws-actions/configure-aws-credentials@v1\n        with:\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: ${{secrets.AWS_REGION}}\n\n      - name: Login to Amazon ECR\n        id: login-pf-aws-ecr\n        uses: aws-actions/amazon-ecr-login@v1\n\n      - name: Build and push the tagged docker image to Amazon ECR\n        run: |\n          chmod +x build-push.sh\n          build-push.sh",
        _type: 'code',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'Add security to your GitHub repository',
            _key: '582e3f79a52c0',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '071941f54a5d',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Last but not least, please add three secrets to GitHub.\nGo to ',
            _key: 'ad2bf0dbbe090',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'GitHub',
            _key: 'ad2bf0dbbe091',
          },
          {
            _key: 'ad2bf0dbbe092',
            _type: 'span',
            marks: [],
            text: ' -> ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Resposiry',
            _key: 'ad2bf0dbbe093',
          },
          {
            _type: 'span',
            marks: [],
            text: ' -> ',
            _key: 'ad2bf0dbbe094',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Resposity settings',
            _key: 'ad2bf0dbbe095',
          },
          {
            _key: 'ad2bf0dbbe096',
            _type: 'span',
            marks: [],
            text: ' -> ',
          },
          {
            text: 'secrets and variables',
            _key: 'ad2bf0dbbe097',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _key: 'ad2bf0dbbe098',
            _type: 'span',
            marks: [],
            text: ' -> ',
          },
          {
            _key: 'ad2bf0dbbe099',
            _type: 'span',
            marks: ['strong'],
            text: 'New repository secret',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'e6028b51c114',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '8059708bc795',
        markDefs: [],
        children: [
          {
            _key: '411f57b679f10',
            _type: 'span',
            marks: [],
            text: 'Add the below secret with the name and value:',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'AWS_ACCESS_KEY_ID',
            _key: 'd0962256877a0',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'eec7dc652fcd',
        listItem: 'bullet',
      },
      {
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'AWS_SECRET_ACCESS_KEY',
            _key: '4da8ac8ec3330',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '6cb4d05aafc0',
        listItem: 'bullet',
      },
      {
        _key: '549988ff5b37',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            text: 'AWS_REGION',
            _key: 'c856ad19bffc0',
            _type: 'span',
            marks: ['strong'],
          },
          {
            marks: [],
            text: '\n',
            _key: '8e2f454fe7570',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        _key: 'e67dadc0406b',
        markDefs: [],
        children: [
          {
            _key: '18cb8ce084520',
            _type: 'span',
            marks: [],
            text: "Push the changes to GitHub and you should see the GitHub action get triggered on the Action section within your repository. Once it's finished you should also see your latest image on AWS ECR",
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '03f896e0fdd6',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'c369c674db62',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: '7c690e97721b',
        markDefs: [
          {
            _key: '4a7e6a9dd0ce',
            _type: 'link',
            href: 'https://github.com/pirasanthan-jesugeevegan/amt-cypress-cucumber',
          },
        ],
        children: [
          {
            _key: 'd3c1a6a31b720',
            _type: 'span',
            marks: [],
            text: 'Link to GitHub ',
          },
          {
            text: 'repo',
            _key: 'd3c1a6a31b721',
            _type: 'span',
            marks: ['4a7e6a9dd0ce'],
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '7e4b23a6b14e',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'c774f6f1c88b',
      },
      {
        children: [
          {
            text: 'If you enjoyed this article, please click the 👍 button and share to help others find it!',
            _key: 'b43ed1ae23330',
            _type: 'span',
            marks: ['strong'],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '38e15890cb7a',
        markDefs: [],
      },
    ],
    title: 'How to Build and push Docker images to AWS ECR with GitHub action',
    likes: 4,
    comments: [],
    _id: '21ec2ae8-045c-46a2-afc2-a3f0b7febe27',
    text: '4 min read',
    minutes: 3.895,
    time: 233700,
    words: 779,
  },
  {
    likes: 10,
    publish: true,
    comments: [
      {
        _updatedAt: '2023-05-23T18:38:44Z',
        approved: true,
        post: {
          _type: 'reference',
          _ref: '10f76855-e2d8-421f-b5ef-b544faf5a5c8',
        },
        _rev: '1hhl7hwrXrxdzpd9IsZ6Ih',
        name: 'Vidya',
        comment:
          'Hi Pirasanth,\n Thanks for sharing your knowledge. I need a clarification regarding selenium automation. Is it possible to integrate ChatGPT with selenium automation framework. \n\nThanks,\nVidya',
        _id: '1bAE2JRiqr88rOnGxtK642',
        email: 'vidya.xlsoft@gmail.com',
        _createdAt: '2023-05-21T18:26:40Z',
        _type: 'comment',
      },
      {
        _id: 'rlyKXP4b3I7i9tXQ0Kkcph',
        _createdAt: '2023-03-31T19:58:45Z',
        _rev: '1hhl7hwrXrxdzpd9IsZBBP',
        approved: true,
        post: {
          _type: 'reference',
          _ref: '10f76855-e2d8-421f-b5ef-b544faf5a5c8',
        },
        name: 'BF',
        _updatedAt: '2023-05-23T18:38:55Z',
        email: 'beate_falconer@yahoo.com',
        _type: 'comment',
        comment:
          'Please remove the music. It is hard to hear your voice with the background music. Maybe you could play the music and the beginning and the end instead?\nThanks for the demo!',
      },
    ],
    categories: [
      {
        title: 'Cypress',
      },
      {
        title: 'Automation',
      },
      {
        title: 'AI',
      },
    ],
    slug: {
      current: 'how-to-integrate-chatgpt-into-your-automation-framework',
      _type: 'slug',
    },
    description:
      'In this article, I will be showing how to Integrate ChatGPT into Cypress and generate test scripts a...',
    title: 'How to Integrate ChatGPT into your automation framework',
    _id: '10f76855-e2d8-421f-b5ef-b544faf5a5c8',
    body: [
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: '',
            _key: '6517522f2bd00',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '5e44ea091771',
      },
      {
        _type: 'youtube',
        _key: '0de6069d6d38',
        url: 'https://www.youtube.com/embed/jayOHZXBXu4',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'd345baad3534',
        markDefs: [
          {
            _key: 'dcd0d99ce08a',
            _type: 'link',
            href: 'https://platform.openai.com/account/api-keys',
          },
        ],
        children: [
          {
            text: 'The first step is to sign up for an API key on the ',
            _key: '0c5f28c48f0c',
            _type: 'span',
            marks: [],
          },
          {
            marks: ['dcd0d99ce08a'],
            text: 'OpenAI',
            _key: '6517522f2bd01',
            _type: 'span',
          },
          {
            text: ' website. Once you created an account, you can generate your API token and start using it in your automation framework.',
            _key: '6517522f2bd02',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        style: 'normal',
        _key: '731ee815c278',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'To use ChatGPT API, you will need to install and import OpenAI package to make requests to the OpenAI API. You can use any programming language of your choice like JavaScript or Python to access their API.',
            _key: '68ebf3fbce3a0',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: 'd36663926937',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'I have chosen to use their Node JS option where we will be creating a node script to call the API and generate Cypress test cases. Once we have generated the script we will then use Cypress to run and test the AI-generated test case.',
            _key: 'a60afff778b70',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        style: 'h3',
        _key: '503c37cc87a7',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'ChatGPT Script',
            _key: '59a683a56bae0',
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            text: 'Install openai',
            _key: '0c1cdd0bc9470',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '6bcbd90c0402',
        markDefs: [],
      },
      {
        children: [
          {
            marks: [],
            text: 'Within your Project, Create a new file (call it how you like) Im calling it ',
            _key: '9e0d9a14f2cd0',
            _type: 'span',
          },
          {
            marks: ['code'],
            text: 'chat-gpt.js',
            _key: '9e0d9a14f2cd1',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' . To use ChatGPT API, you will need to install and import OpenAI package to make requests to the OpenAI API. Run ',
            _key: '9e0d9a14f2cd2',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'npm i openai',
            _key: '9e0d9a14f2cd3',
          },
          {
            marks: [],
            text: ' to install the package.',
            _key: '9e0d9a14f2cd4',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '0baec6dbc663',
        markDefs: [],
      },
      {
        style: 'h4',
        _key: 'b99b37cd2691',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Authenticate — API Key',
            _key: '137fdf4d2c0f0',
          },
        ],
        _type: 'block',
      },
      {
        code: "const { Configuration, OpenAIApi } = require('openai');",
        _type: 'code',
        language: 'javascript',
        _key: '93a3262700ca',
      },
      {
        _key: '49e71ae18782',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Next, you will need to initiate configuration which will take in an argument, here you will add your apiKey',
            _key: 'bc51375b47d70',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: 'const configuration = new Configuration({\n  apiKey: process.env.OPENAI_API_KEY,\n});',
        _type: 'code',
        language: 'javascript',
        _key: 'ce1004fa6822',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Initiate ChatGPT',
            _key: 'd15281c5872d0',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '4bc22c28de9a',
      },
      {
        _key: 'cdf563fb45bf',
        markDefs: [],
        children: [
          {
            text: 'We will then need to initiate the openai that will take in the configuration we create above which will authenticate the user.',
            _key: '046f01662d7a0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: 'const openai = new OpenAIApi(configuration);',
        _type: 'code',
        language: 'javascript',
        _key: '459bd1d520f9',
      },
      {
        style: 'h4',
        _key: '68b83ffab6e2',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Call ChatGPT',
            _key: 'efb8b3fe39660',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: 'd4a28e6364b6',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Now we can use one of many functions from openai, in this case, we will be using ',
            _key: '5e3089a4ceb00',
            _type: 'span',
          },
          {
            text: 'createCompletion()',
            _key: '5e3089a4ceb01',
            _type: 'span',
            marks: ['code'],
          },
          {
            text: ' which takes multiple arguments as been below. After playing around I feel these arguments suited the type of response I was looking for.',
            _key: '5e3089a4ceb02',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        code: "openai\n  .createCompletion({\n    model: 'text-davinci-003',\n    prompt: `write a script in cypress to: go to google.com and search for red car`,\n    temperature: 1,\n    max_tokens: 256,\n    top_p: 0,\n    frequency_penalty: 0,\n    presence_penalty: 0,\n  })\n  .then((response) => {\n    console.log(response.data.choices[0].text)\n  })\n  .catch((error) => {\n    console.error(error);\n  });",
        _type: 'code',
        language: 'javascript',
        _key: 'b322e300d780',
      },
      {
        style: 'h4',
        _key: '093518574f64',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Test',
            _key: '7bf2dc74b7a50',
          },
        ],
        _type: 'block',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'b2198dba5c76',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Now let's test it by running ",
            _key: 'dd3c742b93050',
          },
          {
            marks: ['code'],
            text: 'node <fileName>',
            _key: 'dd3c742b93051',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' , we should see a response in the terminal like this.',
            _key: 'dd3c742b93052',
          },
        ],
      },
      {
        _key: '29b157102b06',
        asset: {
          _ref: 'image-33c8f5d5067d489ec44af4ff2014e942ac782002-1642x386-png',
          _type: 'reference',
        },
        _type: 'image',
      },
      {
        _type: 'block',
        style: 'h3',
        _key: '3919010aa7af',
        markDefs: [],
        children: [
          {
            _key: '90f7c33219890',
            _type: 'span',
            marks: [],
            text: 'Enhance Script',
          },
        ],
      },
      {
        _key: '6bbaa0347aa7',
        markDefs: [],
        children: [
          {
            _key: '9b6d10fde0510',
            _type: 'span',
            marks: [],
            text: "Now let's take it to the next level, We can see that we can give the AI instructions and it will give us the response with the code we are looking for.",
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'h4',
        _key: '8c764a8c66a3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Create a Form',
            _key: '1db76ef640040',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: 'd0bc9ec68093',
        markDefs: [],
        children: [
          {
            _key: 'e9ee3d60f82c0',
            _type: 'span',
            marks: [],
            text: 'We can make it more robust by we fill a form that takes in the ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'fileName',
            _key: 'e9ee3d60f82c1',
          },
          {
            _key: 'e9ee3d60f82c2',
            _type: 'span',
            marks: [],
            text: ' and the ',
          },
          {
            text: 'steps',
            _key: 'e9ee3d60f82c3',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _key: 'e9ee3d60f82c4',
            _type: 'span',
            marks: [],
            text: ' to generate the script.\nSo Create a json new file (call it how you like) Im calling it ',
          },
          {
            marks: ['code'],
            text: 'chat-gpt.json',
            _key: 'e9ee3d60f82c5',
            _type: 'span',
          },
          {
            text: ' , see below for the template:',
            _key: 'e9ee3d60f82c6',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        code: '{\n  "fileName": "login",\n  "steps": [\n    "go to saucedemo.com",\n    "enter username standard_user",\n    "enter password secret_sauce",\n    "click Login",\n    "url should contains inventory"\n  ]\n}',
        _type: 'code',
        language: 'json',
        _key: '3a1ce7bdf144',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '13d2afee1a97',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Modify API Call',
            _key: 'cf90fff53c950',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'd232bb9ee287',
        markDefs: [],
        children: [
          {
            _key: '0a86a35af5dd0',
            _type: 'span',
            marks: [],
            text: 'To use this, we will need to modify some of the code we created above.\nIn the below code, we are importing the ',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'fs',
            _key: '0a86a35af5dd1',
          },
          {
            text: ' npm package and the .json file we created. In our API call, we then modify the ',
            _key: '0a86a35af5dd2',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'prompt',
            _key: '0a86a35af5dd3',
          },
          {
            _type: 'span',
            marks: [],
            text: ' to take in the data from the .json file and also we are using the ',
            _key: '0a86a35af5dd4',
          },
          {
            text: 'fs.writeFile',
            _key: '0a86a35af5dd5',
            _type: 'span',
            marks: ['code'],
          },
          {
            _key: '0a86a35af5dd6',
            _type: 'span',
            marks: [],
            text: ' function to create a new file with the name provided by the .json file and save it in the ',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'cypress/e2e',
            _key: '0a86a35af5dd7',
          },
          {
            _type: 'span',
            marks: [],
            text: ' folder.',
            _key: '0a86a35af5dd8',
          },
        ],
      },
      {
        code: "const fs = require('fs');\nconst data = require('./chat-gpt.json');",
        _type: 'code',
        language: 'javascript',
        _key: 'b2a2e3af5e42',
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: '2136323fb233',
        code: "openai\n  .createCompletion({\n    model: 'text-davinci-003',\n    prompt: `write a script in cypress to: ${data.steps}`,\n    temperature: 1,\n    max_tokens: 256,\n    top_p: 0,\n    frequency_penalty: 0,\n    presence_penalty: 0,\n  })\n  .then((response) => {\n    fs.writeFile(\n      `cypress/e2e/${data.fileName}.cy.js`,\n      response.data.choices[0].text,\n      function (err) {\n        if (err) throw err;\n        console.log('File is created successfully.');\n      }\n    );\n  })\n  .catch((error) => {\n    console.error(error);\n  });",
      },
      {
        children: [
          {
            _key: '87746800181e0',
            _type: 'span',
            marks: [],
            text: 'Link to GitHub ',
          },
          {
            _key: '87746800181e1',
            _type: 'span',
            marks: ['347c3136d00b'],
            text: 'repo',
          },
          {
            text: '\nIf you enjoyed this article, please click the ',
            _key: '87746800181e2',
            _type: 'span',
            marks: [],
          },
          {
            text: '👍',
            _key: 'c459db727384',
            _type: 'span',
            marks: ['strong'],
          },
          {
            text: ' button and share to help others find it!',
            _key: '61955915af26',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '665e5f8d265a',
        markDefs: [
          {
            href: 'https://github.com/pirasanthan-jesugeevegan/cypress-demo-examples/tree/master/examples/chat-gpt',
            _key: '347c3136d00b',
            _type: 'link',
          },
        ],
      },
    ],
    author: {
      name: 'PJ',
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
        },
      },
    },
    publishedAt: '2023-03-15T00:00:00.000Z',
    keyword: 'ChatGPT, Cypress, Integrate, AI, Automation',
    mainImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-17f2202c5783d353da85a736fea3bb30275f8f1d-800x400-png',
      },
    },
    text: '2 min read',
    minutes: 1.9,
    time: 114000,
    words: 380,
  },
  {
    publishedAt: '2022-01-24T19:10:00.000Z',
    comments: [],
    keyword: 'cypress, cucumber',
    _id: '205a2805-bb83-47ab-9456-92640c8ed9a5',
    likes: 12,
    description:
      'Till now, we have written all the Cypress test scripts directly in the JavaScript files, but with th...',
    slug: {
      current: 'how-to-set-up-cucumber-with-cypress',
      _type: 'slug',
    },
    body: [
      {
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'What is Cucumber?',
            _key: 'ef2ff06a573e0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '13e67728a164',
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Cucumber is a tool that supports behavior-driven development (BDD). It runs automated acceptance tests written in BDD format. Cucumber provides a way to write tests that anybody can understand, regardless of their technical knowledge. It explains test steps and application behavior in simple English using the Gherkin language. ',
            _key: '41e88f8ba947',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '965774eccc45',
      },
      {
        style: 'h4',
        _key: '25d84204b038',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Why use Cucumber for testing?',
            _key: 'd4893a3b6e800',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'd54f1ffbf6870',
            _type: 'span',
            marks: [],
            text: 'Cucumber is an important testing tool for the following reasons:',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'fb48ea7e7ebb',
      },
      {
        _key: 'b0e912963ead',
        listItem: 'number',
        markDefs: [],
        children: [
          {
            text: "It's free to use as it's open-source.",
            _key: 'd1e1ba2acf6e0',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '65fd232c37ec',
        listItem: 'number',
        markDefs: [],
        children: [
          {
            _key: '5bd9b66419630',
            _type: 'span',
            marks: [],
            text: 'No longer need to write test scripts in multiple languages such as javascript, Python, Java, etc.',
          },
        ],
        level: 1,
      },
      {
        listItem: 'number',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'It can be integrated with many Automation tools such as Cypress, Selenium, Ruby on Rails, and other web-based testing tools.',
            _key: '84482cfd21250',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'abc75bdcc9bb',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '585f6117a1aa',
        markDefs: [],
        children: [
          {
            marks: ['strong'],
            text: 'How to configure Cucumber with Cypress?',
            _key: 'd7f34c5c775c0',
            _type: 'span',
          },
        ],
      },
      {
        children: [
          {
            _type: 'span',
            marks: ['strong', 'underline'],
            text: 'Step 1',
            _key: 'f747f13a8643',
          },
          {
            _key: '9a484d69c197',
            _type: 'span',
            marks: [],
            text: ': Install Cypress ',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '195005340eef',
        markDefs: [],
      },
      {
        _key: 'd9f86f08f2af',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Run the following command to install Cypress locally:',
            _key: '790c9219cdb6',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'e9518bf309e00',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '3faf35f1d063',
      },
      {
        _type: 'code',
        language: 'powershell',
        _key: 'ca27f7ad090a',
        code: 'npm install cypress',
      },
      {
        style: 'normal',
        _key: '2abbd1f53bb3',
        markDefs: [],
        children: [
          {
            text: '',
            _key: 'df41d739747c',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '3643d1662eb3',
            _type: 'span',
            marks: ['strong', 'underline'],
            text: 'Step 2',
          },
          {
            text: ': Install Cucumber for Cypress',
            _key: '276187ee4a6c',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'caec8f0cd724',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'c23835c984b7',
        markDefs: [],
        children: [
          {
            text: 'Run the following command to install the Cucumber for Cypress package:',
            _key: '4ca681333fa70',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        children: [
          {
            text: '',
            _key: '8130beef23af0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '2bc88ea90143',
        markDefs: [],
      },
      {
        _key: 'eac549894ce2',
        code: 'npm install –save-dev cypress-cucumber-preprocessor',
        _type: 'code',
        language: 'bash',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '4528e7c08831',
        markDefs: [],
        children: [
          {
            _key: 'de825b8c7ecb',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong', 'underline'],
            text: 'Step 3',
            _key: '26f141a836af0',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: ':',
            _key: '2a38cbbe069f',
          },
          {
            _type: 'span',
            marks: [],
            text: ' Add the configuration Cypress environment files',
            _key: '26f141a836af1',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'ebfd2420cac3',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Under ',
            _key: 'b28d8b005d650',
          },
          {
            _key: '511f340fc0fb',
            _type: 'span',
            marks: ['code'],
            text: 'plugins/Index.js',
          },
          {
            marks: [],
            text: ' file add the following:',
            _key: 'bb93995b5360',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'd1f8714239a4',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'd90e4acfc376',
        markDefs: [],
        children: [
          {
            text: '',
            _key: 'ecb6f7cd43850',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: '7a2faf82c65e',
        code: "const cucumber =require('cypress-cucumber-preprocessor').default\nmodule.exports =(on, config)=>{ \n     on('file:preprocessor', cucumber())\n}",
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'c21c62f409670',
            _type: 'span',
            marks: [],
            text: 'Within the ',
          },
          {
            marks: ['code'],
            text: 'package.json',
            _key: 'aebb051dd0cb',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' file, add the following configuration:',
            _key: 'ad1ebf1c55c3',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '937b9c34ebb0',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '6f4382bd07ea0',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '34773c599bb4',
      },
      {
        code: '"cypress-cucumber-preprocessor":{"nonGlobalStepDefinitions":true}',
        _type: 'code',
        language: 'json',
        _key: '78dd88db83ef',
      },
      {
        _key: '74d1b1893d00',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'In the spec files extension parameter in the ',
            _key: '45930de100890',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'cypress.json',
            _key: 'd736fbadcce9',
          },
          {
            text: ' file, make sure to point to the feature files:',
            _key: '5ac075162916',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'normal',
        _key: '3bee90e1a1b2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '66779fa420280',
          },
        ],
        _type: 'block',
      },
      {
        _type: 'code',
        language: 'json',
        _key: '3f902e9f7c9f',
        code: '{\n     "testFiles":"**/*.feature"\n}',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '7e6928c1155f',
        markDefs: [],
        children: [
          {
            text: 'Run Tests with Cypress and Cucumber ',
            _key: '02e1e11647a6',
            _type: 'span',
            marks: ['strong'],
          },
        ],
      },
      {
        style: 'normal',
        _key: '5bccff151dc7',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Let’s first write this test by just using Cypress:',
            _key: '29501b50692f0',
          },
        ],
        _type: 'block',
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: '26ef8fcdd3b1',
        code: "cy.visit('/login')\n  .findByPlaceholder(/email/)\n  .type(xyz@gmail.com')\n  .findByPlaceholder(/password/)\n  .type('my password')\n  .findByText('Log in')\n  .click()\n  .url()\n  .should('eq', '/')\n  .window().its('localStorage.email')\n  .should('eq', 'xyz@gmail.com)",
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '8faa24f113ef',
        markDefs: [],
        children: [
          {
            marks: [],
            text: '\n',
            _key: '1a45987eadc1',
            _type: 'span',
          },
        ],
      },
      {
        children: [
          {
            _key: 'db55f03567a70',
            _type: 'span',
            marks: [],
            text: 'This test navigates to ',
          },
          {
            text: '/login',
            _key: 'bb5e70b347b6',
            _type: 'span',
            marks: ['code'],
          },
          {
            text: ' (using the ',
            _key: '56cc9ec21e21',
            _type: 'span',
            marks: [],
          },
          {
            text: 'baseUrl',
            _key: '8754030e66e5',
            _type: 'span',
            marks: ['code'],
          },
          {
            text: ' specified in ',
            _key: 'ad7883f3ec30',
            _type: 'span',
            marks: [],
          },
          {
            _key: '848d63a14f4d',
            _type: 'span',
            marks: ['code'],
            text: 'cypress.json',
          },
          {
            _key: '5260762c1b8d',
            _type: 'span',
            marks: [],
            text: '), enters the username and the password and clicks the “',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Log in',
            _key: 'db55f03567a77',
          },
          {
            marks: [],
            text: '” button.',
            _key: 'db55f03567a78',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '6581084d5559',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'eb6f0a7209b0',
        markDefs: [],
        children: [
          {
            text: 'In Cypress, users can group multiple commands into a single custom command by creating a file called ',
            _key: '61d5863f063e0',
            _type: 'span',
            marks: [],
          },
          {
            text: 'cypress/support/commands.js',
            _key: '1064305e1906',
            _type: 'span',
            marks: ['code'],
          },
          {
            marks: [],
            text: ' and add:',
            _key: '6a35e97f10a7',
            _type: 'span',
          },
        ],
      },
      {
        style: 'normal',
        _key: '0a17cd08419e',
        markDefs: [],
        children: [
          {
            _key: '4df3eef56b7f0',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        _type: 'block',
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: '51c2c36e81f8',
        code: "Cypress.Commands.add('loginWith', ({ email, password }) =>\n  cy.visit('/login')\n    .findByPlaceholderText(/email/)\n    .type(email)\n    .findByPlaceholderText(/password/)\n    .type(password)\n    .findByText('Log in')\n    .click()\n)",
      },
      {
        style: 'normal',
        _key: '7fc201edbd12',
        markDefs: [],
        children: [
          {
            _key: '3a1f6cac21550',
            _type: 'span',
            marks: [],
            text: 'And then open ',
          },
          {
            marks: ['code'],
            text: 'cypress/support/index.js',
            _key: '9375d26e588a',
            _type: 'span',
          },
          {
            marks: [],
            text: ' and add:',
            _key: '875d47806591',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            text: '',
            _key: '18107fc5a7aa0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '8845887696ee',
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: 'c741c33316e3',
        code: "import'./commands'",
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'd43d8e0427e4',
        markDefs: [],
        children: [
          {
            _key: '22a00a9c57300',
            _type: 'span',
            marks: [],
            text: 'Now, use the custom command in the tests:',
          },
        ],
      },
      {
        style: 'normal',
        _key: '95f81fdfb64e',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: 'd1ea76d986d70',
          },
        ],
        _type: 'block',
      },
      {
        language: 'javascript',
        _key: 'b404d5e0544a',
        code: "cy.loginWith({ email: xyz@gmail.com', password: 'mypassword' })\n  .url()\n  .should('eq', '/')\n  .window().its('localStorage.email')\n  .should('eq', 'xyz@gmail.com')",
        _type: 'code',
      },
      {
        _key: 'f000d10d88aa',
        markDefs: [],
        children: [
          {
            text: 'The above code is written using Cypress. Now, on using Gherkin for Cucumber, the code goes as follows:',
            _key: '2189b6c395990',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'normal',
        _key: '5897e24a78a0',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '9bca1b7f39850',
          },
        ],
        _type: 'block',
      },
      {
        _type: 'code',
        language: 'gherkin',
        _key: '2249e73c7987',
        code: "Feature: Login App\nScenario:\nWhen I log in\nThen the url is /\nAnd I'm logged in",
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'The test comprises 3 defined steps: ',
            _key: '76026e24c42a0',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'I login’, ‘the url is {word}’, and ‘I’m logged in',
            _key: 'f28b42c1e39a',
          },
          {
            _type: 'span',
            marks: [],
            text: '. So create 3 step definitions. Create a Javascript file inside a directory named as the feature file (',
            _key: '76026e24c42a2',
          },
          {
            _key: 'f6890672aaaf',
            _type: 'span',
            marks: ['code'],
            text: 'login/login.js',
          },
          {
            _key: 'aa0473152b06',
            _type: 'span',
            marks: [],
            text: ') and write:',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '9fab640ebf73',
      },
      {
        style: 'normal',
        _key: 'd7511801853e',
        markDefs: [],
        children: [
          {
            _key: '5ff075ed417a0',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        _type: 'block',
      },
      {
        code: "import { When, Then } from 'cypress-cucumber-preprocessor/steps'\n\nWhen('I login', () => {\n  cy.loginWith({ email: 'xyz@gmail.com', password: 'mypassword'})\n})\n \nThen('the url is {word}', (url) => {\n  cy.url()\n    .should('eq', `${Cypress.config().baseUrl}${url}`)\n})\n\nThen('I\\'m logged' in, () => {\n  cy.window().its('localStorage.email')\n    .should('eq', 'xyz@gmail.com')\n})",
        _type: 'code',
        language: 'javascript',
        _key: 'fb1f531f2554',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Once this code runs, Cucumber will convert it into Cypress commands. And, that’s how it works.',
            _key: '4b4cfc815d7b0',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '992ce0f13b27',
      },
    ],
    mainImage: {
      _type: 'image',
      asset: {
        _ref: 'image-657f4977c4dd87e5d3b75ad054bcbc641c8d4dc0-800x400-svg',
        _type: 'reference',
      },
    },
    author: {
      name: 'PJ',
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
        },
      },
    },
    title: 'How to set up Cucumber with Cypress?',
    publish: true,
    categories: [
      {
        title: 'Cypress',
      },
      {
        title: 'Cucumber',
      },
    ],
    text: '2 min read',
    minutes: 1.655,
    time: 99300,
    words: 331,
  },
  {
    description:
      'We are going to go through NVM - Node Version Manager and how to setup via Homebrew...',
    _id: '8b73fc95-65f3-4af4-8f79-e0ca1f566be9',
    title: 'How To Install NVM on macOS with Homebrew',
    likes: 4,
    body: [
      {
        _key: 'e0e85230ff55',
        markDefs: [],
        children: [
          {
            _key: 'e5446c5efcce0',
            _type: 'span',
            marks: [],
            text: 'The NVM (Node Version Manager) is a shell script that is used to install and manage Node.js on a Linux-based system. Homebrew is used to install NVM on macOS.',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '0e852aa161f7',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This guide will show you how to install NVM on your macOS machine and manage',
            _key: '0abcd84bc7c50',
          },
        ],
      },
      {
        children: [
          {
            _key: '67abe9219588',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '3c5a059e53d7',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'h4',
        _key: 'eae4199289a0',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Prerequisites ',
            _key: '17ce1c7eec50',
            _type: 'span',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Install Homebrew (You must have admin privileges)',
            _key: 'c333ed2643ef',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'a0f671a85861',
        listItem: 'bullet',
      },
      {
        _key: 'fd73824a9348',
        code: 'ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ',
        _type: 'code',
        language: 'powershell',
      },
      {
        children: [
          {
            text: 'Step 1 – Remove existing Node Versions',
            _key: '7b3fd713e8ba',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '90e42468bae4',
        markDefs: [],
      },
      {
        _key: '3e43b720ef29',
        markDefs: [],
        children: [
          {
            _key: '32c2632abc530',
            _type: 'span',
            marks: [],
            text: 'If your system already has a node installed, uninstall it first. My system already has installed node via Homebrew. So uninstalling it first. Skip if not already installed.',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        language: 'powershell',
        _key: '2b9796730f37',
        code: 'brew uninstall --ignore-dependencies node \nbrew uninstall --force node ',
        _type: 'code',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '6bca5e71baf60',
            _type: 'span',
            marks: [],
            text: 'Step 2 – Install NVM on macOS',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'a85669b5f08c',
      },
      {
        children: [
          {
            text: 'Update the Homebrew package list and install NVM.',
            _key: '4ba6a6f2af8a0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'c0b56645ebd3',
        markDefs: [],
      },
      {
        _type: 'code',
        language: 'powershell',
        _key: '312a139c7031',
        code: 'brew update \nbrew install nvm ',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Next, create a directory for NVM at home.',
            _key: 'a58dd421af9c0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '966da1001735',
      },
      {
        _key: 'f860e7b0f9a9',
        code: 'mkdir ~/.nvm ',
        _type: 'code',
        language: 'powershell',
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'e31a7e65ec310',
            _type: 'span',
            marks: [],
            text: 'Now, configure the required environment variables. Edit the following configuration file in your home directory',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'e753ff606c53',
      },
      {
        language: 'powershell',
        _key: '84e921e5880a',
        code: 'open -a TextEdit ~/.bash_profile',
        _type: 'code',
      },
      {
        children: [
          {
            text: 'and, add the below lines to ',
            _key: 'ed16866d0a3e0',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: '~/.bash_profile',
            _key: 'ed16866d0a3e1',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '6612206b06a2',
        markDefs: [],
      },
      {
        code: 'export NVM_DIR=~/.nvm\nsource $(brew --prefix nvm)/nvm.sh',
        _type: 'code',
        language: 'markdown',
        _key: '95a497c8c96a',
      },
      {
        children: [
          {
            marks: [],
            text: 'Save and close the window ',
            _key: 'e41b6c099c42',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'b1cd2605190b',
        markDefs: [],
      },
      {
        children: [
          {
            marks: [],
            text: 'Next, load the variable to the current shell environment. From the next login, it will automatically loaded.',
            _key: 'c08f457d4fe10',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '467b28c6d86b',
        markDefs: [],
      },
      {
        _type: 'code',
        language: 'powershell',
        _key: '5084069cec9d',
        code: 'source ~/.bash_profile',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'cc0f1622aee8',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "That's all. Your macOS system now has the NVM installed. Continue to the following step to install Node.js versions using nvm.",
            _key: '66f19cd8da0f0',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '287b64f1ecd3',
        markDefs: [],
        children: [
          {
            text: 'Step 3 – Install Node.js with NVM',
            _key: '6800ae24c3490',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'ea9b05092eff',
        markDefs: [],
        children: [
          {
            text: "First, let's see what Node versions are available to install. By typing:",
            _key: 'd47c86ebc4280',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        language: 'powershell',
        _key: 'f1b6051f845d',
        code: 'nvm ls-remote ',
        _type: 'code',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'd3c4467842dc',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Now, you can install any version listed in the above output. You can also use aliases names like ',
            _key: 'd51c83b787020',
          },
          {
            text: 'node',
            _key: 'd51c83b787021',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _key: 'd51c83b787022',
            _type: 'span',
            marks: [],
            text: ' for the latest version, ',
          },
          {
            _key: 'd51c83b787023',
            _type: 'span',
            marks: ['strong'],
            text: 'lts',
          },
          {
            _key: 'd51c83b787024',
            _type: 'span',
            marks: [],
            text: ' for latest LTS version, etc.',
          },
        ],
      },
      {
        code: 'nvm install node     ## Installing Latest version \nnvm install 14       ## Installing Node.js 14.X version ',
        _type: 'code',
        language: 'powershell',
        _key: 'b7f09f7ee592',
      },
      {
        children: [
          {
            marks: [],
            text: 'After installing you can verify what is installed with:',
            _key: '91476a25ac880',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'd8c21f9c2bcf',
        markDefs: [],
      },
      {
        language: 'powershell',
        _key: '8caf1645c040',
        code: 'nvm ls ',
        _type: 'code',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'beb42f6f97e3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'If you have installed multiple versions on your system, you can set any version as the default version at any time. To set node 14.X as the default version, simply use:',
            _key: 'aa9853c9d1f20',
          },
        ],
      },
      {
        code: 'nvm use 14 ',
        _type: 'code',
        language: 'powershell',
        _key: 'ae1204230286',
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Similarly, you can install other versions like Node 12, 15, and 18 versions and switch between them.',
            _key: 'baf8e335bfef0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'eb625f03e67a',
      },
    ],
    publishedAt: '2022-12-06T11:24:00.000Z',
    author: {
      name: 'PJ',
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
          _type: 'reference',
        },
      },
    },
    slug: {
      current: 'how-to-install-nvm-on-macos-with-homebrew',
      _type: 'slug',
    },
    mainImage: {
      _type: 'image',
      asset: {
        _ref: 'image-3412695e32930e06421cd9a48d20b8c941e7dd45-800x400-png',
        _type: 'reference',
      },
    },
    keyword: 'VNM, Homebrew, IOS',
    publish: true,
    comments: [],
    categories: [
      {
        title: 'NVM',
      },
      {
        title: 'UNIX',
      },
    ],
    text: '2 min read',
    minutes: 1.52,
    time: 91200,
    words: 304,
  },
  {
    title: 'How to send notification to Microsoft teams from Jenkins',
    author: {
      name: 'PJ',
      image: {
        asset: {
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
          _type: 'reference',
        },
        _type: 'image',
      },
    },
    _id: 'a68624dc-d3e2-475c-bc34-14c088cab1d5',
    keyword: 'MS Teams, Jenkins, Notification',
    likes: 1,
    slug: {
      current: 'how-to-send-notification-to-microsoft-teams-from-jenkins',
      _type: 'slug',
    },
    comments: [],
    publishedAt: '2022-05-20T18:27:00.000Z',
    categories: [
      {
        title: 'Jenkins',
      },
    ],
    body: [
      {
        _type: 'block',
        style: 'normal',
        _key: '165b551efa11',
        markDefs: [],
        children: [
          {
            marks: [],
            text: "Notification is one of the key aspects of a pipeline. You don't want to keep looking at Jenkins screen to know the status. Rather you want to continue doing the next work and get an upate when the pipeline is completed.\n\nIn this article, we will learn how to use Jenkins Pipeline plugin to notify Microsoft Teams channel about pipeline status.\n",
            _key: 'e8a98673208c0',
            _type: 'span',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '1. Install Office 365 Plugin on Jenkins',
            _key: '80e83335a550',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '7c6b010efa7c',
      },
      {
        style: 'normal',
        _key: '6b25f4618082',
        markDefs: [],
        children: [
          {
            _key: '93d72d4fb9770',
            _type: 'span',
            marks: ['strong'],
            text: 'Installation options',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: 'ffdcce6bc055',
        listItem: 'number',
        markDefs: [
          {
            _type: 'link',
            href: 'https://www.jenkins.io/doc/book/managing/plugins/#from-the-web-ui',
            _key: '225000e3e95f',
          },
        ],
        children: [
          {
            marks: ['225000e3e95f'],
            text: 'Using the GUI:',
            _key: '66c13489f3b2',
            _type: 'span',
          },
          {
            text: ' \nFrom your Jenkins dashboard navigate to ',
            _key: 'b1b1ee2942eb',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Manage Jenkins > Manage Plugins',
            _key: 'b16c01c3c9f8',
          },
          {
            _type: 'span',
            marks: [],
            text: ' and select the ',
            _key: '254dd1acf992',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Available',
            _key: '7383b7ed4961',
          },
          {
            text: ' tab. Locate this plugin by searching for "Office-365-Connector".',
            _key: '6155bddae3d4',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        _key: '0f3c29e60968',
        listItem: 'number',
        markDefs: [
          {
            _key: 'f898685e88d7',
            _type: 'link',
            href: 'https://github.com/jenkinsci/plugin-installation-manager-tool',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Using ',
            _key: '98fbb82f84780',
          },
          {
            _key: '98fbb82f84781',
            _type: 'span',
            marks: ['f898685e88d7'],
            text: 'the CLI tool',
          },
          {
            text: ': \n',
            _key: '98fbb82f84782',
            _type: 'span',
            marks: [],
          },
          {
            _key: '98fbb82f84783',
            _type: 'span',
            marks: ['code'],
            text: 'jenkins-plugin-cli --plugins Office-365-Connector:4.17.0',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '7cc4053f5731',
        markDefs: [],
        children: [
          {
            text: '2. Configure MS Teams Channel to send Jenkins Notification',
            _key: '33465f7859e1',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        children: [
          {
            text: 'Create a Team channel for your notification to appear in ',
            _key: '939a0b904e520',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '924c1bf4b58d',
        listItem: 'number',
        markDefs: [],
      },
      {
        listItem: 'number',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Now, go to that channel, and from the top-right corner, click on 3 dot arrows and select ',
            _key: '3b66c23d77ae0',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: '“Connectors”',
            _key: '3b66c23d77ae1',
          },
          {
            text: ' ',
            _key: '3b66c23d77ae2',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '94e85b855b78',
      },
      {
        listItem: 'number',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Select “',
            _key: '88a0d47de6030',
            _type: 'span',
          },
          {
            _key: '27f56500df1c',
            _type: 'span',
            marks: ['strong'],
            text: 'Jenkins Plugin',
          },
          {
            _key: '40fd19758ae7',
            _type: 'span',
            marks: [],
            text: '” from the options given, click on “',
          },
          {
            text: 'Add',
            _key: '84cc2077cf2e',
            _type: 'span',
            marks: ['strong'],
          },
          {
            text: '” and then “',
            _key: 'c0a9b4d1c856',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Configure',
            _key: '769efa2a246b',
          },
          {
            _type: 'span',
            marks: [],
            text: '” it',
            _key: 'f1793ffce9d5',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '4766df07ccf6',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '097d174a38f1',
        listItem: 'number',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Create a Name for the connection and click "',
            _key: '4ceb65fb83f6',
          },
          {
            text: 'Create',
            _key: 'b6e0b4544bd2',
            _type: 'span',
            marks: ['strong'],
          },
          {
            marks: [],
            text: '"',
            _key: 'cdd4d10b4379',
            _type: 'span',
          },
        ],
        level: 1,
      },
      {
        children: [
          {
            _key: '267f0fa6d0dc0',
            _type: 'span',
            marks: [],
            text: 'Copy the URL that is given as ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'webhook URL',
            _key: '267f0fa6d0dc1',
          },
          {
            marks: [],
            text: ' and have it with you at a safe place',
            _key: '267f0fa6d0dc2',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'f095e8fa92c9',
        listItem: 'number',
        markDefs: [],
      },
      {
        markDefs: [],
        children: [
          {
            _key: '60b7c52d44cc',
            _type: 'span',
            marks: [],
            text: '3. Configure your Jenkinsfile',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '9ccba8db6818',
      },
      {
        children: [
          {
            text: 'You can configure it in two ways; Options or in a Stage \n\n',
            _key: '064329362091',
            _type: 'span',
            marks: [],
          },
          {
            _key: 'd0348c2a8597',
            _type: 'span',
            marks: ['strong'],
            text: '- Options',
          },
          {
            marks: [],
            text: ' at the top, where you will be notified about failure and success results at the end of the pipeline',
            _key: 'da686c4233b8',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '5b57fa5dff09',
        markDefs: [],
      },
      {
        _type: 'code',
        language: 'groovy',
        _key: '32b1f42ab22a',
        code: 'pipeline {\n    environment {\n        WEB_HOOK_URL = credentials(\'webhook\')   \n    }\n    ......\n    options {\n        office365ConnectorWebhooks([\n            [name: "Office 365", url: "${WEB_HOOK_URL}", notifyBackToNormal: true, notifyFailure: true, notifyRepeatedFailure: true, notifySuccess: true, notifyAborted: true]\n        ])\n    }\n}',
      },
      {
        _key: 'ef4aaff02a38',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Create a secret as a text in Jenkins and called it `webhook` and add the Webhook URL that you got from ',
            _key: 'b91ab5975b6e',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'MS Teams Channel',
            _key: '708837791ec5',
          },
          {
            _type: 'span',
            marks: [],
            text: ' in the previous step',
            _key: '198e8dadc0fe',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'normal',
        _key: '914dcdd8b5c8',
        markDefs: [],
        children: [
          {
            text: 'This will notify channel for listed statuses',
            _key: '4c3cbd45821f',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'notifyFailure',
            _key: 'fa2950cfd731',
          },
          {
            text: ' – Notify if the current build has failed',
            _key: '1297fc062f04',
            _type: 'span',
            marks: [],
          },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
        _key: '3c27a1e40c4c',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            text: 'notifyRepeatedFailure',
            _key: '93c7080dc0b6',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _key: '450ceba2fbd9',
            _type: 'span',
            marks: [],
            text: ' – Notify if 2 or more consecutive builds have failed',
          },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
        _key: '97ea611ad8e0',
      },
      {
        _key: '98f83e484809',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            text: 'notifySuccess',
            _key: 'c65c16bc7dce',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _key: 'ce1df8045166',
            _type: 'span',
            marks: [],
            text: ' – Notify if the current build is successful',
          },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'd592761abe1e',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            text: 'notifyBackToNormal',
            _key: '30230d8ca367',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _key: '90d96a892c92',
            _type: 'span',
            marks: [],
            text: ' – Notify if, after failed builds, the current build got successful',
          },
        ],
        level: 2,
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'notifyAborted – Notify if the build is aborted by the user',
            _key: '50ab4d9431b5',
          },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
        _key: '5dda20b8878f',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '89eb48159c3c',
        markDefs: [],
        children: [
          {
            text: '',
            _key: '06d11c088950',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '2b8dd67a9e98',
        markDefs: [],
        children: [
          {
            text: '- Stage',
            _key: 'f3266e8669d1',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' you will be notified when this stage is ',
            _key: 'dfde3480a9e4',
          },
          {
            text: '“Successful”,',
            _key: '5107dc56d711',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' you can have ',
            _key: '8f307a24cee0',
          },
          {
            _key: '09eff04fdc4a',
            _type: 'span',
            marks: ['strong'],
            text: 'failure and aborted status',
          },
          {
            text: ' as well',
            _key: '0f63d05e8a7b',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '2ee3c58704cd',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Create a secret as a text in Jenkins and called it `webhook` and add the Webhook URL that you got from ',
            _key: 'bf074130eb36',
          },
          {
            text: 'MS Teams Channel',
            _key: '02b50166b749',
            _type: 'span',
            marks: ['strong'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' in the previous step',
            _key: 'e8951b3d0d8f',
          },
        ],
      },
      {
        _key: '76762d0a8b03',
        code: "pipeline {\n    environment {\n        WEB_HOOK_URL = credentials('webhook')   \n    }\n    ......\n    stages {     \n        stage(\"Deploy\")\n        {\n            steps {\n                office365ConnectorSend webhookUrl: \"${WEB_HOOK_URL}\",\n                message: 'Code is deployed',\n                status: 'Success'            \n            }\n        }\n    }\n}",
        _type: 'code',
        language: 'groovy',
      },
      {
        markDefs: [],
        children: [
          {
            text: '\n\n',
            _key: '317fa27c1db6',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '928aa4fd63ac',
      },
    ],
    publish: true,
    mainImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-7e4aef5935a92474e23a93c14302eeaf5e4a0bf1-800x400-svg',
      },
    },
    description:
      'In this article, we will learn how to use Jenkins Pipeline plugin to notify Microsoft Teams channel ...',
    text: '2 min read',
    minutes: 1.265,
    time: 75900,
    words: 253,
  },
  {
    likes: 3,
    slug: {
      _type: 'slug',
      current: 'how-to-set-up-cucumber-in-cypress-10',
    },
    title: 'How to set up Cucumber in Cypress 10?',
    comments: [],
    description:
      'As not long ago we were introduced to Cypress v10 with breaking changes. The process of installation of cypress is quite simple and easy but we’ll look at how to install and configure cucumber with it.',
    _id: '68729195-2a38-4f15-9620-1eb9be8814bd',
    categories: [
      {
        title: 'Cypress',
      },
      {
        title: 'Cucumber',
      },
    ],
    mainImage: {
      asset: {
        _ref: 'image-cae207d447b90bde20cddd22719a4d12215e7ce1-800x400-png',
        _type: 'reference',
      },
      _type: 'image',
    },
    author: {
      name: 'PJ',
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
          _type: 'reference',
        },
      },
    },
    keyword: 'Cucumber, Cypress 10',
    body: [
      {
        style: 'normal',
        _key: '28c75a61d0c7',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Before we start, let's talk about what cucumber is and why we use it here",
            _key: '8d430189cbc00',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            text: '',
            _key: '64227c89e129',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '4f28a5337872',
      },
      {
        style: 'normal',
        _key: '914fc96cb4aa',
        markDefs: [],
        children: [
          {
            text: 'What is Cucumber?',
            _key: 'dc046d0ee5ef0',
            _type: 'span',
            marks: ['strong'],
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            text: 'Cucumber is a tool that supports behavior-driven development (BDD). It runs automated acceptance tests written in BDD format. Cucumber provides a way to write tests that anybody can understand, regardless of their technical knowledge. It explains test steps and application behavior in simple English using the Gherkin language.',
            _key: 'd59a715335d90',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '1a9707202862',
        markDefs: [],
      },
      {
        markDefs: [
          {
            _type: 'link',
            href: 'https://cucumber.io/docs/cucumber/',
            _key: '5401308795b0',
          },
        ],
        children: [
          {
            text: 'You can read further about cucumber ',
            _key: '7450769092ed0',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['5401308795b0'],
            text: 'here',
            _key: '7450769092ed1',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'f65d9b468133',
      },
      {
        _key: '8a0be1182c73',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '4a1146530609',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Let's add cucumber to cypress and automate a simple login flow",
            _key: '172f77e2f7840',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a15229daf3ce',
      },
      {
        _key: '68e537f11a60',
        markDefs: [],
        children: [
          {
            text: 'There are a few prerequisites before we can start installing cucumber, you need to have these tools to initiate project setup.',
            _key: 'b7ec258004b20',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'normal',
        _key: 'e8005dc634d2',
        markDefs: [],
        children: [
          {
            marks: [],
            text: '',
            _key: '04cb7573e5a3',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        _key: '6a940d5abd31',
        markDefs: [],
        children: [
          {
            _key: '38c934dce8b10',
            _type: 'span',
            marks: [],
            text: 'Prerequisites',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'fab7d34caf97',
        listItem: 'bullet',
        markDefs: [
          {
            _type: 'link',
            href: 'https://code.visualstudio.com/download',
            _key: '01b23ce52dbe',
          },
          {
            _key: '013af931255d',
            _type: 'link',
            href: 'https://nodejs.org/en/download/',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['01b23ce52dbe'],
            text: 'VS Code',
            _key: 'a32a93379c7e0',
          },
        ],
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            href: 'https://nodejs.org/en/download/',
            _key: '013af931255d',
            _type: 'link',
          },
        ],
        children: [
          {
            text: 'Node.js',
            _key: '2ee82b6ff19b0',
            _type: 'span',
            marks: ['013af931255d'],
          },
          {
            marks: [],
            text: ' 12 or 14 and above',
            _key: '2ee82b6ff19b1',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'a41d55bdf998',
      },
      {
        _key: 'a57eb706e9ba',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _key: '1b67614ae71c0',
            _type: 'span',
            marks: [],
            text: 'Cypress project',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '873ece3310fc',
        listItem: 'bullet',
        markDefs: [
          {
            _key: '607e0207580f',
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['607e0207580f'],
            text: 'Cucumber',
            _key: '667b4a17d5cd',
          },
          {
            _type: 'span',
            marks: [],
            text: ' VS code extension ',
            _key: '262c783647db',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '2382fd695ba2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Step 1: Install cucumber',
            _key: '9a301c637c290',
          },
        ],
      },
      {
        children: [
          {
            _key: '1f91c7cdec85',
            _type: 'span',
            marks: [],
            text: 'Type the below command on the terminal to install cucumber',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'a93d8a78e207',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        _type: 'code',
        language: 'powershell',
        _key: '237c122096c1',
        code: 'npm i @badeball/cypress-cucumber-preprocessor\nnpm i cypress @bahmutov/cypress-esbuild-preprocessor esbuild',
      },
      {
        children: [
          {
            text: 'The next step is to set the configurations in ',
            _key: '21317fe855dd0',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'cypress.config.js',
            _key: '31e53e210e80',
          },
          {
            _key: '8711599c02d8',
            _type: 'span',
            marks: [],
            text: ' file',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'cef3a5b8e4fb',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: '6da2ce1b65fa',
        code: "const { defineConfig } = require('cypress');\nconst createBundler = require('@bahmutov/cypress-esbuild-preprocessor');\nconst addCucumberPreprocessorPlugin =\n  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;\n\nconst createEsBuildPlugin =\n  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;\n\nmodule.exports = defineConfig({\n  e2e: {\n    baseUrl: 'https://opensource-demo.orangehrmlive.com/', //setting BaseUrl\n    viewportWidth: 1920, // Setting the size of the browser\n    viewportHeight: 1080, // Setting the size of the browser\n    async setupNodeEvents(on, config) {\n      // implement node event listeners here\n      const bundler = createBundler({\n        plugins: [createEsBuildPlugin(config)],\n      });\n      on('file:preprocessor', bundler);\n      await addCucumberPreprocessorPlugin(on, config);\n      return config;\n    },\n    specPattern: 'cypress/e2e/*.feature', // select all feature file from e2e folder\n  },\n});\n",
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Create a new file named ',
            _key: '7b0d339d0ece0',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['code'],
            text: '.cypress-cucumber-preprocessorrc.json',
            _key: 'bafcf951c8dd',
          },
          {
            text: ' inside the root directory of your project and specify the location of step definitions as follows',
            _key: 'c97397747cf8',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'c3b9d45928ff',
        listItem: 'bullet',
      },
      {
        code: '{\n  "stepDefinitions": ["cypress/support/step_definitions/*.js"]\n}\n',
        _type: 'code',
        language: 'json',
        _key: '375db7659514',
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'cc8f32999716',
            _type: 'span',
            marks: ['strong'],
            text: 'Step 2: Write scripts',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '710b85b15bfd',
      },
      {
        _key: 'ba5d36529602',
        markDefs: [
          {
            _key: 'dcdcc6ee082b',
            _type: 'link',
            href: 'https://opensource-demo.orangehrmlive.com/',
          },
        ],
        children: [
          {
            _key: 'cbd50e4887fd',
            _type: 'span',
            marks: [],
            text: 'As we are finished with the basic configuration, we are now ready to write up the script. We will be using ',
          },
          {
            marks: ['dcdcc6ee082b'],
            text: 'https://opensource-demo.orangehrmlive.com/',
            _key: '53119b5aa03e',
            _type: 'span',
          },
          {
            marks: [],
            text: ' for this purpose and automating the Login test case for demonstration.',
            _key: '8695b7c776b4',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Create a file called ',
            _key: '83ff9f5e49a70',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'login.feature',
            _key: '74832a4200c1',
          },
          {
            _key: 'e4a824154918',
            _type: 'span',
            marks: [],
            text: ' in the ',
          },
          {
            _key: '3b6f204e02d8',
            _type: 'span',
            marks: ['code'],
            text: 'e2e',
          },
          {
            marks: [],
            text: ' folder, see the snippet below',
            _key: '0884833e2b53',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '8fdfb9fecccc',
      },
      {
        code: 'Feature: Login\n    Scenario: Login user with correct email and password\n        Given the user navigate to the login page\n        When the user enter login credentials\n        Then the user should be logged in',
        _type: 'code',
        _key: 'd6d5968cc3ef',
      },
      {
        _key: 'f41a5bf807c1',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: ' Then create a file called ',
            _key: 'e2f04852e95d',
          },
          {
            _key: '7a2f4d052d2e',
            _type: 'span',
            marks: ['code'],
            text: 'login.js',
          },
          {
            text: ' in the following directory ',
            _key: 'b098434790d5',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['code'],
            text: 'cypress/support/step_definitions',
            _key: '1c975b7261ca',
          },
          {
            _key: 'cb301d9f5684',
            _type: 'span',
            marks: [],
            text: ', see the snippet below',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: 'b2450718dfab',
        code: "import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';\nGiven('the user navigate to the login page', () => {\n  cy.visit('/web/index.php/auth/login');\n});\nWhen('the user enter login credentials', () => {\n  cy.contains('Login').should('be.visible');\n  cy.get('input[name=\"username\"]').type('Admin');\n  cy.get('input[name=\"password\"]').type('admin123');\n  cy.get('button[type=\"submit\"]').click();\n});\nThen('the user should be logged in', () => {\n  cy.get('.oxd-topbar-header-title')\n    .should('be.visible')\n    .and('contain', 'Dashboard');\n});\n",
      },
      {
        children: [
          {
            _key: '905cdf5eba02',
            _type: 'span',
            marks: ['strong'],
            text: 'Step 3: Run scripts',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '6509754807af',
        markDefs: [],
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'At this point, add the script in your ',
            _key: '750dec1e3a280',
          },
          {
            _key: '56210aeb74d0',
            _type: 'span',
            marks: ['code'],
            text: 'package.json',
          },
          {
            marks: [],
            text: ' to run cypress. You can directly open cypress Launchpad from here',
            _key: '87edfa3cc365',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '54ff5af45b4c',
        markDefs: [],
      },
      {
        code: '"cypress:open": "cypress open"',
        _type: 'code',
        language: 'json',
        _key: '99c188c1d276',
      },
      {
        children: [
          {
            _key: '68091e2877170',
            _type: 'span',
            marks: [],
            text: 'Now we can run the below command to open cypress UI',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '62fb03c98c4f',
        markDefs: [],
      },
      {
        _key: 'd59ec3549bc3',
        code: 'npm run cypress:open',
        _type: 'code',
        language: 'powershell',
      },
      {
        _key: '4bac895fdca3',
        markDefs: [],
        children: [
          {
            text: 'and select ',
            _key: 'd911e80eea830',
            _type: 'span',
            marks: [],
          },
          {
            text: 'login.feature',
            _key: 'd852c0f357b2',
            _type: 'span',
            marks: ['code'],
          },
          {
            _key: '1c6276651ddb',
            _type: 'span',
            marks: [],
            text: ' from your feature files inside the Spec Explorer',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'image',
        _key: '4c62985f91ff',
        asset: {
          _type: 'reference',
          _ref: 'image-5695c37379d73d2f132cacb2e7e6133c2b0139f5-3436x1018-png',
        },
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'b85eb308bed0',
        markDefs: [],
        children: [
          {
            text: '',
            _key: '381aecabbc1f',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        markDefs: [
          {
            href: 'https://github.com/pirasanthan-jesugeevegan/amt-cypress-cucumber',
            _key: 'b777d4d028e4',
            _type: 'link',
          },
        ],
        children: [
          {
            text: 'I hope you found this article helpful. Follow the above steps and run your first test case with cypress and let me know how it went in the comments.\n\nLink to ',
            _key: '2ab7a5338b7c0',
            _type: 'span',
            marks: [],
          },
          {
            _key: '44ec9b155b76',
            _type: 'span',
            marks: ['b777d4d028e4'],
            text: 'GitHub',
          },
          {
            text: ' code ',
            _key: '8dcb02e7b156',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '08f3596344e5',
      },
    ],
    publish: true,
    publishedAt: '2022-12-20T00:00:00.000Z',
    text: '2 min read',
    minutes: 1.94,
    time: 116400,
    words: 388,
  },
  {
    likes: 1,
    publishedAt: '2022-12-13T00:00:00.000Z',
    categories: [
      {
        title: 'Cheat Sheets',
      },
    ],
    mainImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-318bbce38e4e5db022a143ad32faaea4ac913705-800x400-png',
      },
    },
    _id: '861e515c-c586-4d0f-9bc1-2227133fadd5',
    body: [
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'As there are many different IDE, I feel like Visual studio code is the right one for me for many reasons but the biggest one of all is the number of extensions available to make coding easy.\n\nBelow you can find my most helpful VS code extensions as an Automation engineer in no particular order.\n',
            _key: '19bd0de29229',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '66c337a10ed2',
        markDefs: [],
      },
      {
        markDefs: [
          {
            _key: '8152fa88800a',
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments',
          },
        ],
        children: [
          {
            marks: ['8152fa88800a'],
            text: 'Better Comments',
            _key: '0b3d3e420b80',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' ',
            _key: '55c856b6ae7c',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'a1a4d99ff5bb',
      },
      {
        _key: 'f676ed9fdc4b',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'The Better Comments extension will help you create more human-friendly comments in your code.\nWith this extension, you will be able to categorise your annotations into:',
            _key: '8041f2ebe2390',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '828826908221',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Alerts',
            _key: '83f12ae1c7d40',
            _type: 'span',
          },
        ],
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'dd7183991ebb',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Queries',
            _key: '2eba42ef9a020',
            _type: 'span',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            text: 'TODOs',
            _key: 'b4cdc31e65030',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'cd538544f13a',
        listItem: 'bullet',
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '6a3d786959ad',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Highlights',
            _key: '55e0f35d91a50',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Commented out code can also be styled to make it clear the code shouldn't be there",
            _key: 'aa7b90bfbc340',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '11b024b71c2d',
        listItem: 'bullet',
      },
      {
        _key: '3a9444210df3',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _key: '02ffe283fa250',
            _type: 'span',
            marks: [],
            text: "Any other comment styles you'd like can be specified in the settings",
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'image',
        _key: 'ceccbd90affb',
        asset: {
          _type: 'reference',
          _ref: 'image-dae10bbc96f1acd7f2b0d1a7df0d804e3102b33c-782x199-png',
        },
      },
      {
        children: [
          {
            text: 'Material Icon',
            _key: 'e36ed4cddd030',
            _type: 'span',
            marks: ['076e8c89cbc9'],
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'f572dc7ceb40',
        markDefs: [
          {
            _key: '076e8c89cbc9',
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Material Icons for all your file extensions. It really makes identifying the files at a quick glance easy and stand out.',
            _key: 'a65d1c32e20a0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '4bdfce90f51d',
      },
      {
        asset: {
          _ref: 'image-62d12b50c1afe01bf344aa0e441096077648f788-782x199-png',
          _type: 'reference',
        },
        _type: 'image',
        _key: 'a475ad5b102f',
      },
      {
        _key: '43cc4488fdba',
        markDefs: [
          {
            _key: 'adb7e71ef66c',
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['adb7e71ef66c'],
            text: 'Path Intellisense',
            _key: '8665724c86ae0',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Most of the time we create new files that will need to be imported into a parent file, this plugin helps import files much easier by autocompleting filenames.',
            _key: '01bd6a4ee8560',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '9f020de810dc',
      },
      {
        _type: 'image',
        _key: 'e31c04622daf',
        asset: {
          _ref: 'image-0c36542a264089efec9de8ce170b7ed4a01405b6-782x199-png',
          _type: 'reference',
        },
      },
      {
        style: 'h4',
        _key: '6debb1a3c526',
        markDefs: [
          {
            _key: 'bfd5f1b711fc',
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=pnp.polacode',
          },
        ],
        children: [
          {
            _key: 'cdd385fde6990',
            _type: 'span',
            marks: ['bfd5f1b711fc'],
            text: 'Polacode',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Fancy screenshots of your code just by selecting it. The screenshot has rounded edges to make it look professional.',
            _key: '71ab16aabec30',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'deeb3d8cdb62',
      },
      {
        _type: 'image',
        _key: 'c76daeea0eba',
        asset: {
          _ref: 'image-f7462aec79b3a309961d94cd101400cb6b299418-782x199-png',
          _type: 'reference',
        },
      },
      {
        _key: '566bdea9a6a1',
        markDefs: [
          {
            href: 'https://marketplace.visualstudio.com/items?itemName=Shelex.vscode-cy-helper',
            _key: '8ac20639530f',
            _type: 'link',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['8ac20639530f'],
            text: 'Cypress Helper',
            _key: '34fe14141def0',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '7278ab4619bf',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Cypress Helper provides shortcuts to navigate between cypress customs. It really comes in handy when debugging through complex code in less time.',
            _key: '6045c0e9d2f60',
            _type: 'span',
          },
        ],
      },
      {
        _key: '4ff5466a5813',
        asset: {
          _ref: 'image-93ee2d6f159b63962e1feea4d67baf2d7d059ba3-782x199-png',
          _type: 'reference',
        },
        _type: 'image',
      },
      {
        _key: '9d372371bdc1',
        markDefs: [
          {
            _key: '4a7cb4422e6e',
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['4a7cb4422e6e'],
            text: 'Docker',
            _key: '927c7c940fd70',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'dfe02d0300ec0',
            _type: 'span',
            marks: [],
            text: 'If you love working with docker, This plugin is for you. It gives a visual sidebar with details like Containers, Images, Registries, Networks and Volumes. It really comes in handy when you want to know what is happening over your docker environments.',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '924b535c4ab8',
      },
      {
        _key: 'e43716bb8a3a',
        asset: {
          _ref: 'image-59eb895727ae1585ffa96a5a63c3d5c872c2dc72-782x199-png',
          _type: 'reference',
        },
        _type: 'image',
      },
      {
        _key: '9367b087ba09',
        markDefs: [
          {
            _key: '1004b719a507',
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
          },
        ],
        children: [
          {
            _key: '75ebe9a9c0fe0',
            _type: 'span',
            marks: ['1004b719a507'],
            text: 'Git Lens',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        children: [
          {
            _key: 'cd16bc11909f0',
            _type: 'span',
            marks: [],
            text: 'This plugin helps you tell who made the code changes without having to go anywhere. It would even provide you various contributors for a particular file. Simple hover over a line and it tells the code changes made. A lot of amazing git features are bought to your code editor.',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '9a5871b05fe4',
        markDefs: [],
      },
      {
        _type: 'image',
        _key: 'def86703e853',
        asset: {
          _ref: 'image-4840f52f419d82de53fe8ab663065a41acfab00e-782x199-png',
          _type: 'reference',
        },
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '2d6f02d5da5e',
        markDefs: [
          {
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete',
            _key: '0b382c927232',
          },
        ],
        children: [
          {
            text: 'Cucumber (Gherkin) Full Support ',
            _key: '35e3bb60f698',
            _type: 'span',
            marks: ['0b382c927232'],
          },
        ],
      },
      {
        children: [
          {
            marks: [],
            text: 'This will only apply if you have integrated cucumber to your automation framework, it will simply:',
            _key: '624ec074fdae',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '7b3598ba4aee',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'b6cb4d233bfc',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Syntax highlight',
            _key: '204ba0f88bce0',
          },
        ],
        level: 1,
      },
      {
        markDefs: [],
        children: [
          {
            _key: '8b958763e1fa0',
            _type: 'span',
            marks: [],
            text: 'Basic Snippets support',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'c328ab87fc8f',
        listItem: 'bullet',
      },
      {
        _key: 'e5d0d6d723fa',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _key: 'e20c529b42170',
            _type: 'span',
            marks: [],
            text: 'Auto-parsing of feature steps from paths, provided in settings.json',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '8653253e29d6',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Autocompletion of steps',
            _key: 'adfbb47fa0fd0',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Ontype validation for all the steps',
            _key: '2ab8b74744310',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '4b2301182688',
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '0557f60fe426',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Definitions support for all the steps parts',
            _key: '322c7f15ccb60',
          },
        ],
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            text: 'Document format support, including tables formatting',
            _key: '5ff8cfaf682b0',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'df6eea5e6ce9',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '212ca03c5f97',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _key: '8711ba9736530',
            _type: 'span',
            marks: [],
            text: 'Supporting of many spoken languages',
          },
        ],
        level: 1,
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Gherkin page objects native support',
            _key: 'b86195da93d00',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '5e9d9de7f024',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Multiple programming languages, JS, TS, Ruby, Kotlin etc.',
            _key: '0e8fa93d3cc00',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '35b665cfb95e',
      },
      {
        _key: 'e023a2e5fcb6',
        asset: {
          _ref: 'image-206af658fa7275d0202f289d3eb0bbad395605b1-782x199-png',
          _type: 'reference',
        },
        _type: 'image',
      },
      {
        markDefs: [
          {
            _key: '450c3444f0f5',
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare',
          },
        ],
        children: [
          {
            text: 'Live Share',
            _key: '7879540472970',
            _type: 'span',
            marks: ['450c3444f0f5'],
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '4c86d007cb70',
      },
      {
        style: 'normal',
        _key: '08a8389100e6',
        markDefs: [],
        children: [
          {
            _key: '2b5ed052a6210',
            _type: 'span',
            marks: [],
            text: 'As the name implies, this extension helps you share and collaborate your code among your team in real-time with real-time editing and chat. This helps and boosts teams’ productivity when working on a project.',
          },
        ],
        _type: 'block',
      },
      {
        asset: {
          _ref: 'image-675d7ccd925a3e1dae615893a1583e4572c0a919-782x199-png',
          _type: 'reference',
        },
        _type: 'image',
        _key: '7d8b9732f654',
      },
      {
        style: 'h4',
        _key: '5f2fd6d2a1a3',
        markDefs: [
          {
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
            _key: 'f8a252cd8f5d',
          },
        ],
        children: [
          {
            _key: '98987162be9a',
            _type: 'span',
            marks: ['f8a252cd8f5d'],
            text: 'Prettier',
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            text: 'Prettier is a code formatter compatible with many languages. It beautifies the code block with nice indentations, thus making the code more readable.',
            _key: 'fde9c389d40a0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'e0bf1d076a48',
        markDefs: [],
      },
      {
        _key: 'a0089b0cb2fa',
        asset: {
          _type: 'reference',
          _ref: 'image-0fd4bb1f7c687cfca95c399d4daaa4a32aed57f9-782x199-png',
        },
        _type: 'image',
      },
    ],
    publish: true,
    title: 'Top Visual Studio Code extensions for Automation Engineers in 2022',
    keyword: 'Visual Studio, Plugins, Automation',
    slug: {
      current:
        'top-visual-studio-code-extensions-for-automation-engineers-in-2022',
      _type: 'slug',
    },
    author: {
      image: {
        asset: {
          _type: 'reference',
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
        },
        _type: 'image',
      },
      name: 'PJ',
    },
    description:
      'Top 10 Visual Studio Code extensions for Automation Engineers',
    comments: [
      {
        approved: true,
        post: {
          _ref: '861e515c-c586-4d0f-9bc1-2227133fadd5',
          _type: 'reference',
        },
        _updatedAt: '2022-12-13T15:18:35Z',
        _createdAt: '2022-12-13T12:13:52Z',
        _rev: 'kRRL1UTtNnmkRKjyKkmS6K',
        name: 'Kathy C.',
        comment: 'Thanks so much PJ very helpful article! ',
        _id: 'kRRL1UTtNnmkRKjyKkGOls',
        email: 'kathy.cercel@gmail.com',
        _type: 'comment',
      },
    ],
    text: '3 min read',
    minutes: 2.035,
    time: 122100,
    words: 407,
  },
  {
    likes: 0,
    body: [
      {
        markDefs: [],
        children: [
          {
            text: 'Cypress basic commands are listed below in no particular order  −',
            _key: 'e7f17170ae8a0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '5054f35a2f71',
      },
      {
        style: 'h4',
        _key: '2af7f43ff89d',
        markDefs: [],
        children: [
          {
            text: 'get',
            _key: 'fc06359327e4',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        _key: '22efe890c6b3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Get single or multiple elements by the locator.',
            _key: 'a875254f66b00',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'normal',
        _key: 'dfbb5080a19e',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
            _key: '7281a23f85150',
          },
        ],
        _type: 'block',
      },
      {
        code: "cy.get('.list > li') // Yield the <li>'s in .list",
        _type: 'code',
        language: 'javascript',
        _key: '75fe612bea3a',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '22e19aaa4426',
        markDefs: [],
        children: [
          {
            text: 'first',
            _key: 'fac88979ad5d0',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'df54eba13fcf',
        markDefs: [],
        children: [
          {
            text: 'Get the first elements of a particular locator.',
            _key: 'a4396be9eb1c0',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        _key: '140e4a013b6a',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
            _key: '565f04a988300',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        language: 'javascript',
        _key: '2a0292540060',
        code: "cy.get('nav a').first() // Yield first link in nav",
        _type: 'code',
      },
      {
        style: 'h4',
        _key: '7663f1efe4db',
        markDefs: [],
        children: [
          {
            text: 'click',
            _key: '58f291b572c30',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'It clicks an element in Document Object Model (DOM).',
            _key: '19effc09c4490',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '17c8fde972c5',
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'f1dd715ef01f0',
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'f0895c42ff56',
      },
      {
        code: "cy.get('element').click()",
        _type: 'code',
        language: 'javascript',
        _key: 'cd2211e73f3d',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '364db0ecfcea',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'contains',
            _key: 'a7618f9b66380',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'It obtains an element having a specific text. The element can have more than the text and still match.',
            _key: 'e0885a2234e90',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '686bea926d92',
      },
      {
        style: 'normal',
        _key: 'd5e6830d302a',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
            _key: 'afde22dabaca0',
          },
        ],
        _type: 'block',
      },
      {
        language: 'javascript',
        _key: '07769a575973',
        code: "cy.get('element').contains('Tutor')",
        _type: 'code',
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'and',
            _key: '64367bdbf6740',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '3d0c8c1a4853',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '6ac48b80ea6b',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'It is used to create an assertion and is an alias of .should ().',
            _key: 'd6b63d3306cf0',
          },
        ],
      },
      {
        style: 'normal',
        _key: '64abcb8a6773',
        markDefs: [],
        children: [
          {
            _key: 'fadff9b595db0',
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
          },
        ],
        _type: 'block',
      },
      {
        code: "cy.get('element').should('be.visible').and('be.enabled') \ncy.contains('Subject').and('be.checked')",
        _type: 'code',
        language: 'javascript',
        _key: '8d0b449681de',
      },
      {
        _key: 'e6da2cb7df9d',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'visit',
            _key: '00153aa6d5820',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        children: [
          {
            text: 'It launches an URL.',
            _key: '1b916f670a6e0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '4d02330ea0dc',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'ad5ecc252b35',
        markDefs: [],
        children: [
          {
            _key: 'f43bbba92add0',
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
          },
        ],
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: 'b9f4bd2f17a7',
        code: "cy.visit('https://www.pirasanth.com/blog')",
      },
      {
        _key: 'da07f041f146',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'as',
            _key: '2367035e483a',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'It provides an alias for later usage.',
            _key: 'd3a28ca8e9060',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '5c79ec7a3097',
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'The usage is as follows −',
            _key: 'ff34da4d9a580',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'abd720e0ce38',
      },
      {
        language: 'javascript',
        _key: '1cb8dfb43874',
        code: "cy.get('element').find('li').first().as('parent')",
        _type: 'code',
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'd77f674a60ca0',
            _type: 'span',
            marks: [],
            text: 'clear',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: 'a11f46d07dfd',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'It removes the value from textarea or input.',
            _key: '00dd22bd42890',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '72c4c7e66ce1',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'f1ed2a456ba7',
        markDefs: [],
        children: [
          {
            _key: '65097299d4b10',
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
          },
        ],
      },
      {
        code: "cy.get('element'). type('abc').clear()",
        _type: 'code',
        language: 'javascript',
        _key: 'e592aca9383d',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: 'bcd53332b33c',
        markDefs: [],
        children: [
          {
            _key: '621103ed21c10',
            _type: 'span',
            marks: [],
            text: 'clearCookie',
          },
        ],
      },
      {
        style: 'normal',
        _key: '63ddcf321629',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'It removes a particular browser cookie.',
            _key: '3775b8207e5b0',
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            text: 'The usage is as follows −',
            _key: '6e1f014a53d00',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'd928f8c3f9e4',
        markDefs: [],
      },
      {
        code: "cy.clearCookie('cookie_name')",
        _type: 'code',
        language: 'javascript',
        _key: '85c09286ce2f',
      },
      {
        _type: 'block',
        style: 'h4',
        _key: '05fc0b72c5df',
        markDefs: [],
        children: [
          {
            text: 'clearCookies',
            _key: 'd78c6256b8bb0',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        style: 'normal',
        _key: 'c7208d456472',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'It removes the browser cookies from an existing domain and subdomain.',
            _key: '600f8c557fc50',
          },
        ],
        _type: 'block',
      },
      {
        _key: '8fe25f0a83ee',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'The usage is as follows −',
            _key: 'b3a46baa0a6b0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: 'cy.clearCookies()',
        _type: 'code',
        language: 'javascript',
        _key: '8f912adb6734',
      },
      {
        _key: 'e11eeeb81086',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'each',
            _key: '5d03e970ce60',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'h4',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'cf00c4e16959',
        markDefs: [],
        children: [
          {
            text: 'It iterates through an array having the property length.',
            _key: '8a9713d9c75b0',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'The usage is as follows −',
            _key: '824a2ed3cae20',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '8feb4b99c025',
      },
      {
        code: "cy.get('li').each(() => {...})",
        _type: 'code',
        language: 'javascript',
        _key: 'a6e45c217645',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '8473d50c8dac0',
            _type: 'span',
            marks: [],
            text: 'find',
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '4daf01af6bd6',
      },
      {
        children: [
          {
            marks: [],
            text: 'It obtains the descendant elements of a particular locator.',
            _key: '539c10efb8b50',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '3f2b74582648',
        markDefs: [],
      },
      {
        _key: '9a0ca38a402d',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
            _key: 'f5362644c8120',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '048972e6da9b',
        code: "cy.get('tr').find('td')",
        _type: 'code',
        language: 'javascript',
      },
      {
        style: 'h4',
        _key: 'b9ba0e45366e',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'should',
            _key: '4aa5fd3f89a90',
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'It is used to create an assertion and is an alias of .and ().',
            _key: 'f1f7142b72df0',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'bc77b85f4b4a',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: '16efc4684df1',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'The usage is as follows −',
            _key: '831d28e3a8d90',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        code: "cy.get('element').should('be.visible').and('be.enabled')",
        _type: 'code',
        language: 'javascript',
        _key: '1a329ca321f9',
      },
      {
        children: [
          {
            text: 'getCookie',
            _key: 'b2c02a27721d0',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h4',
        _key: '1ef628231c29',
        markDefs: [],
      },
      {
        children: [
          {
            marks: [],
            text: 'It obtains a particular browser cookie by its name.',
            _key: 'b8a560b9c8ca0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '61900c4d79be',
        markDefs: [],
      },
      {
        _key: 'fff8e92f8f58',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
            _key: '8b269c1de8f70',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: 'd4fe9c6396e6',
        code: "cy.getCookie('cookie_name')",
      },
      {
        style: 'h4',
        _key: 'b2d48615cede',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'getCookies',
            _key: '83b9bcae27a00',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'It obtains all the cookies',
            _key: 'f4e1e7f405ae0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '17688acb3772',
      },
      {
        _key: '71227a647d21',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The usage is as follows −',
            _key: 'a32d917cea340',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'code',
        language: 'javascript',
        _key: '44c50de049c5',
        code: 'cy.getCookies()',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: 'f4bbbb8f5198',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '667cd43d7e11',
        markDefs: [],
      },
      {
        children: [
          {
            _key: 'ae8fdec48101',
            _type: 'span',
            marks: ['strong'],
            text: 'If you feel like there is a command that should be on this list, please leave a comment below!',
          },
        ],
        _type: 'block',
        style: 'blockquote',
        _key: '1b4ec6dc1a49',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: '3df06b85a504',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: 'c4d45861f226',
          },
        ],
        _type: 'block',
      },
    ],
    publish: true,
    author: {
      name: 'PJ',
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-587f2d39c654eef3daa04a9001373a002b23b2a5-400x400-png',
          _type: 'reference',
        },
      },
    },
    keyword: 'cypress',
    _id: '6b766fb5-7802-44df-aa66-84622fa6e4c9',
    publishedAt: '2022-12-27T00:00:00.000Z',
    comments: [],
    categories: [
      {
        title: 'Cypress',
      },
      {
        title: 'Cheat Sheets',
      },
    ],
    slug: {
      current: 'cypress-most-common-commands',
      _type: 'slug',
    },
    mainImage: {
      asset: {
        _type: 'reference',
        _ref: 'image-87b7560f0c178e211a7a1c17152d921cddefa7c9-800x400-png',
      },
      _type: 'image',
    },
    title: 'Cypress most common commands',
    description:
      'Cypress is a fast, easy and reliable testing tool for anything that runs in a browser. It’s becoming...',
    text: '2 min read',
    minutes: 1.24,
    time: 74400,
    words: 248,
  },
];
