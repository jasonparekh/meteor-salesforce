Package.describe({
  summary: "Login service for Salesforce accounts",
  version: "0.0.3",
  git: "https://github.com/jasonparekh/meteor-salesforce"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('oauth', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('service-configuration', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files(
    ['salesforce_configure.html', 'salesforce_configure.js'],
    'client');

  api.add_files('salesforce_common.js', ['client', 'server']);
  api.add_files('salesforce_server.js', 'server');
  api.add_files('salesforce_client.js', 'client');

  api.export('Salesforce');
});
