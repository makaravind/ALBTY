const Promisify = require('bluebird');
const fs = Promisify.promisifyAll(require('fs'));
const request = require('request');
const github = require('github-api');

function configure() {
    return fs.readFileAsync('conf.json', 'utf8').then(conf => {
        const _conf = JSON.parse(conf);
        return getGitHubBridge(_conf);
    });
}

function getGitHubBridge(conf) {
    return {
        gh: new github({
            username: conf.USERNAME,
            password: conf.PASSWORD
        }),
        conf
    };
}

const getAllCommentsOnIssue = () => {
    const options = {
        url: 'https://api.github.com/repos/amulyametku/test/issues/1/comments',
        headers: {
            'User-Agent': 'test'
        },
    };

    request.get(
        options,
        (error, response, body) => {
            {
                (!error && response.statusCode / 100 === 2) &&
                console.log(body);
            }
        }
    )
};

const confWraper = (conf, fn, ...args) => {
    return fn(conf, ...args);
};

const updateLog = ({created_at: createdAt, body}) => {
    // v1: to file,
    // v2: log information to google sheets
    // headers createdAT, content
    var logEntry = `${createdAt},${body}\n`;
    return fs.appendFileAsync('./log.txt', logEntry, {});
};

const postNewCommentOnIssue = (conf, data) => {
    const options = {
        url: `${conf.GITHUB_API_URL}/repos/${conf.USERNAME}/${conf.REPO}/issues/${conf.ISSUE_NUMBER}/comments`,
        headers: {
            'User-Agent': `${conf.USERNAME}`,
            'Authorization': `token ${conf.TOKEN}`
        },
        body: {body: data},
        json: true
    };

    return new Promise((resolve, reject) => {
        request.post(
            options,
            (error, response, body) => {
                {
                    (!error && response.statusCode === 201) &&
                    resolve(body);
                }
                reject(error);
            }
        )
    })
};

const getContentFromSrc = (conf) => {
    return fs.readFileAsync(conf.SRC, 'utf8').then(src => {
        // todo: add the popped to done array; refactor
        return JSON.parse(src).new.pop().content;
    });
};


configure().then(({gh, conf}) => {
    /**
     * get data from src, v1: json array markdown string, v2: google sheet
     * */
    confWraper(conf, getContentFromSrc).then(content => {
        console.log('step 1: got content');
        return confWraper(conf, postNewCommentOnIssue, content);
    }).then(response => {
        console.log('step 2: got success response from github api');
        return updateLog(response);
    }).then(() => {
        console.log('created new comment successfully...')
    }).catch(err => {
        console.error('error adding new comment to the issue ', err);
    });
});