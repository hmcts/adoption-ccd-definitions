Feature('Admin Web');

Scenario('Dummy functional test @pipeline', I => {
  I.loginToAdminConsole();
}).retry({ retries: 3, minTimeout: 30000 }); // eslint-disable-line no-magic-numbers