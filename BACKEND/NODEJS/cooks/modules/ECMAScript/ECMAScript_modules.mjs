import * as fs from 'node:fs';
import * as path from 'node:path';
import * as http from 'node:http';

const PORT = 8000;

const STATIC_PATH = path.join(process.cwd(), './static');

const toBool = [() => true, () => false];

