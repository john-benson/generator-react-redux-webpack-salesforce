# Configuring Salesforce Data Layer

This template includes a library I wrote to switch between the Salesforce REST
API and Salesforce VisualForce Remote Objects. Under the /env folder, you'll
find all the deafult settings you'll need to get started except for an appId
under the /env/development.js file.

Please follow the instructions here to generate an appId:
(https://help.salesforce.com/apex/HTViewHelpDoc?id=connected_app_create.htm)

You'll also need to add callback URLs for the application (which defaults to
https://localhost:8080/callback); and additionaly enable CORS for
https://localhost:8080 (instructions here: https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/extend_code_cors.htm).
If there are any additional domains that will need access (Heroku, Firebase, etc)
add those as well.

The REST API should only be used if you are not hosting the app on Force.com.
Because of limits, VisualForce Remote Objects should be used as the primary
method of data access on Force.com. Additionally, the API component that has been
implemented in the Data Layer is exceptionally minimalistic and will create a login
prompt on the first API call; or anytime an API call fails (not a good
user experience). If you are going to be primarly running your app OUTSIDE of Salesforce,
you should use a full featured Salesforce REST API implementation such as
jsforce (https://jsforce.github.io/) or forcesj (https://github.com/ccoenraets/forcejs)

# NPM scripts and Builds
This project relies primarly on webpack for packaging and deployment. The webpack
configuration relies on checking the current NPM script's name. There are two build
tasks:

1. npm run build - builds a typical project (no Salesforce references on the index).
2. npm run build:salesforce - builds a Visualforce compatiable index that can be
imported into your Orgs.

Additionally, the following test tasks are provided:

1. npm run stasrt - stats a webpack-dev-server with HRM
2. npm run test - runs test (through karma) once.
3. npm run tdd - runs test repeatidely (for test-driven development)
4. npm run stats - builds the webpack stats file to be analyzed

This project does NOT make use of file chunks (because I was to lazy to figure out
how to nicely make that mesh with pushing static resources to SF). This could
(and should) be fixed.

The NODE_ENV is used to select which configuration file is loaded. If anything
other then "production" is passed; the "development" env will be used. "common"
is used as the base for both production and development.
