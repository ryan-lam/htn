#!/bin/bash

rm database.sqlite3
npx sequelize-cli db:migrate
node seeders/seed.js
