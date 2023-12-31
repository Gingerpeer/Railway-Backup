#!/bin/bash

user=$1
host=$2
port=$3
db=$4
fileName=$5
pass=$6


echo "Starting Backup" $fileName
PGPASSWORD=$pass pg_dump -U $user -h $host -p $port -Fc -d $db > ./backups/$fileName

echo "Backup Completed" $fileName