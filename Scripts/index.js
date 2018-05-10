var Promisify = require('bluebird');
var fs = Promisify.promisifyAll(require('fs'));
var github = require('github-api');

function configure() {
  return fs.readFileAsync('conf.json', 'utf8').then(conf => {
    const _conf = JSON.parse(conf);
    return getGitHubBridge(_conf); 
  });
}

function getGitHubBridge(conf) {
  return new github({
    username: conf.USERNAME,
    password: conf.PASSWORD
  });
}

configure().then(gh => {
  var me = gh.getUser();
  me.listStarredRepos(function(err, repos) {
    // look at all the starred repos!
    console.log(repos)
  });
});