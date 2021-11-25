Feature('Admin Web');

Scenario('add all the roles @pipeline', I => {
  I.loginToAdminConsole();
  I.createRole('caseworker-solicitor');
  I.createRole('caseworker-courtadmin');
  I.createRole('caseworker-judge');
  I.createRole('caseworker-la');
  I.createRole('caseworker-superuser');
  I.click('Manage User Roles');
  I.see('caseworker-solicitor');
  I.see('caseworker-courtadmin');
  I.see('caseworker-judge');
  I.see('caseworker-la');
  I.see('caseworker-superuser');
}).retry({ retries: 3, minTimeout: 30000 }); // eslint-disable-line no-magic-numbers

Scenario('upload Adoption Config file @pipeline', I => {
  I.loginToAdminConsole();
  I.uploadConfig(`../../definitions/adoption-private/xlsx/${process.env.CCD_FILE_NAME}`);
  I.see('Case Definition data successfully imported');
}).retry({ retries: 3, minTimeout: 30000 }); // eslint-disable-line no-magic-numbers
