#!/bin/bash

rm database.sqlite3
echo "DELETED DATABASE"

npx sequelize-cli db:migrate
echo "CREATED AND MIGRATED DATABASE!"

node seeders/seed.js
echo "DONE SEEDING DATABASE"
