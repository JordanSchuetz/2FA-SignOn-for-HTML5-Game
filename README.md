# JavaScript voting app sample w/Auth0 & Twilio & PubNub <3 

This sample demonstrates how to add authentication to a JavaScript application with Auth0 and 2FA with Twilio. 
The sample makes use of PubNub realtime updates to power the voting system within the applicaiton. 

## Getting Started

### Auth0 
[Sign up](https://auth0.com) for your free Auth0 account. Once you have signed up, navigate to the [dashboard](https://manage.auth0.com  and create a new application. 

![applications1](https://user-images.githubusercontent.com/5739370/40819032-35cabee2-6528-11e8-93c6-8b61d13e7a8a.PNG)

Next, under settings find the **domain** and **client ID**.

![application2](https://user-images.githubusercontent.com/5739370/40819203-715fc93e-6528-11e8-8ced-3fd28e76251e.PNG)

Still under settings, scroll down and add the URL (if running locally for example `http://localhost:3000/`) for your application to the **Allowed Callback URLs** box. 

![application3](https://user-images.githubusercontent.com/5739370/40819380-c5344a08-6528-11e8-93bd-aea5dccb3826.PNG)

Next up, in the project find `auth0-variables.js` and provide the **client ID** and **domain** in there.

### Twilio

[Sign up](https://twilio.com) for your free trial Twilio account.

Add the full instructions. 

### PubNub 

[Sign up](https://pubnub.com) for your free PubNub account.

Add the full instructions. 

Lastly, run

```bash
cd 01-Login
npm install
```

## Run the Application

The `serve` module provided with this sample can be run with the `start` command.

```bash
npm start
```

The application will be served at `http://localhost:3000`.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## What is Twilio?

// add description here 

## What is PubNub? 

// add description here 


## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. 

## Author



## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.



