import http from 'node:http';
import { config } from 'dotenv';
 import { insert } from './data.js';

console.log('Hello from Backend..');

config({ path: './.env' });
console.log(process.env.PORT, "Processs..");

const server = http.createServer((req, res) => {
    console.log(req.method, 'Requesting to Server...' );

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requesting, content-type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Corrected Allow-Methods

    if (req.url === '/submit' && req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    else if (req.url === '/submit' && (req.method === 'POST' || req.method === 'OPTIONS')) {
        console.log('got the url **.....');
        
        let body = '';
        let parsedBody ={};
        req.on('data', (chunk) => {
            body += chunk.toString();
            console.log(chunk.toString());
            parsedBody = JSON.parse(body)
        });
        req.on('end', () => {
            console.log('got the url.....');
            console.log(parsedBody);
            const {fn, em, pn, ps} = parsedBody
            insert(fn,em,pn,ps)
            // Parsing body as JSON
            // const parsedBody = JSON.parse(body);
            // console.log(parsedBody);

            res.writeHead(200, { "Content-Type": 'application/json' });
            res.end(JSON.stringify({ message: "Data received successfully"}));
        });
    } else {
        res.writeHead(404, { "Content-Type": 'text/html' });
        res.end("<h1>Page NOT Found from backend</h1>");
    }
});

server.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on ${process.env.PORT}`);
});
