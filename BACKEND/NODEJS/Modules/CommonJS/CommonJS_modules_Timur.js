'use strict';

const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const PORT = 8000;

const STATIC_PATH = path.join(process.cwd(), './static');
// const STATIC_PATH = path.join(__dirname, './static'); alias


const toBool = [() => true, () => false];

