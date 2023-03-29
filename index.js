const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {
    const field = core.getInput('field');
    const option = core.getInput('option');
    console.log(`Adding option ${option} to field ${field}...`)
    console.log('API key exist: ' + process.env.HEIGHT_API_KEY !== undefined);
    axios.post(`https://api.height.app/fieldTemplates/${field}/options`, {
        value: option
    }, {
        headers: {
            Authorization: `api-key ${process.env.HEIGHT_API_KEY}`
        }
    }).then(response => {
        console.log(response);
        core.setOutput("status", response.status);
    }).catch(error => {
        console.error(error);
        core.setOutput("status", error.status);
    });
} catch (error) {
    core.setFailed(error.message);
}
