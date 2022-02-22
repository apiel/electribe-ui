// Because writting doesnt work well on linux, let's create a server for this...
// But still doesnt work because of "Device or resource busy"

const { execSync } = require('child_process');
const express = require('express')

const app = express();
app.use(express.text())

const port = 3000;

// fetch('http://localhost:3000/', { method: 'POST', mode: 'no-cors', body: 'FB F8' }).then(console.log);

app.post('/', (req, res) => {
    if (!req.body) {
        res.send('Missing hex parameter');    
    } else {
        const cmd = `amidi -p hw:3 -S "${req.body}"`;
        // console.log('run cmd:', cmd);
        console.log('run cmd');
        const output = execSync(cmd);
        // console.log(output.toString());
        console.log('done', output.toString());
        res.send('done');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
