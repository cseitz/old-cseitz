import { resolve } from 'path';
import express from 'express';
import { access, cp, mkdir, readdir } from 'fs/promises';
import { promisify } from 'util';

import { exec as _exec, execSync } from 'child_process';
const exec = promisify(_exec);

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

const doBuild = argv?.build || false;

const app = express();
if (!doBuild) app.listen(4080);

interface Config {
    name: string;
    repo?: string;
    path?: string;
}

async function findRecursive(dir) {
    const files = await readdir(dir, { withFileTypes: true });
    let results = [];
    for (const file of files) {
        if (await file.isDirectory()) {
            results = results.concat(await findRecursive(resolve(dir, file.name)))
        } else {
            results.push(resolve(dir, file.name))
        }
    }
    return results;
}

async function Setup(opts: Config) {
    const { name } = opts;
    const {
        repo = `cseitz-portfolio/${name}`,
    } = opts;
    // Create Project Folder
    const __project = resolve(__dirname, 'projects', name);
    try {
        await access(__project);
    } catch (err) {
        await mkdir(__project);
    }

    // Clone Repository
    const __repo = resolve(__project, '.repo');
    try {
        await access(__repo);
    } catch (err) {
        execSync(`git clone https://github.com/${repo} .repo`, {
            cwd: __project,
            stdio: 'inherit'
        })
    }
}

async function Build(opts: Config) {
    const { name } = opts;
    // Ensure Setup
    const __project = resolve(__dirname, 'projects', name);
    const __repo = resolve(__project, '.repo');
    try {
        await access(__repo);
    } catch (err) {
        await Setup(opts)
    }

    // Fetch & Pull
    execSync(`git stash && git fetch && git pull`, {
        cwd: __repo,
        stdio: 'inherit'
    })

    // Install Dependencies
    execSync(`npm install`, {
        cwd: __repo,
        stdio: 'inherit'
    })

    // Overwrite Files
    const __overwrite = resolve(__project, 'overwrite');
    const overwrites = (await findRecursive(__overwrite)).map(o => o.slice(__overwrite.length + 1));
    for (const file of overwrites) {
        await cp(resolve(__overwrite, file), resolve(__repo, file), {
            force: true
        })
    }

    // Build Project
    execSync(`npm run build`, {
        cwd: __repo,
        stdio: 'inherit'
    })
}

async function Serve(opts: Config) {
    const { name } = opts;
    const {
        path = `/${name}`
    } = opts;
    const __project = resolve(__dirname, 'projects', name);
    const serve = (await import(__project)).default;
    app.use(path, serve)
}


;(async() => {
    const projects: Config[] = [
        {
            name: 'hacksu-2021'
        }
    ];
    for (const project of projects) {
        if (doBuild && (argv._.length == 0 || argv._.includes(project.name))) {
            await Build(project);
        } else {
            await Serve(project);
        }
    }

})();

