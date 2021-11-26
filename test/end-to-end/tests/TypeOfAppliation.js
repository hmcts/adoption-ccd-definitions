Feature('Type of Application');

Scenario('Create a case and Submit the Type of Application workflow @smoke-tests', async I => {
  await I.loginAsSolicitor();
}).retry({ retries: 3, minTimeout: 30000 });
