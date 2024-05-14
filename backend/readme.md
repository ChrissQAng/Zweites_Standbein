# A.- Install backend

Wenn diese Template runtergelden wird:

1.- unzip

2.- npm i

3.- dein echte .env hinzufügen (muster in .env.sample)

# B.-WIE BAUT MAN EIN BASIC BACKEND:

## npm i express cors multer dotenv morgan mongodb mongoose express-validator

## npm install --save-dev nodemon

# C.- MIAS BACKEND NOTITZEN:

Backend mit Express

### package.json anlegen mit assume yes for all questions

npm init -y

evtl. in package.json ergänzen

type: module

### Express installieren

express import in index.js

npm install express
import express from "express";

### .gitignore erstellen und node_modules eintragen

.gitignore → node_modules

### cors

cors import in index.js

npm install cors

import cors from "cors";

app.use(cors());

### multer für formData

multer import in index.js

npm install multer

import multer from "multer";

### express validator für Datenvalidierung

import in index.js npm install express-validator

import { body, param, validationResult } from "express-validator";

### nodemon, damit Server automatisch neu startet

npm install --save-dev nodemon

in package.json - scripts ergänzen:

    "dev": "nodemon src/index.js"

im Terminal: npm run dev

### dotenv-Modul installieren,

falls .env-Dateien

dotenv import in index.js

.gitignore erstellen und .env eintragen
npm i dotenv
import dotenv from “dotenv”;
dotenv.config();
.gitignore → .env

### logging middleware morgan

import morgan npm install morgan
import morgan from “morgan”;
app.use(morgan(”dev”));

### MongoDb Node.js Driver

Treiber importieren
npm install mongodb
import mongodb from “mongodb”;
import { MongoClient } from "mongodb";

### Mongoose

Mongoose importieren npm install mongoose
import mongoose from "mongoose";
# zweites_standbein
