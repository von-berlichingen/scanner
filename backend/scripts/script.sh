#!/bin/bash
#./Report/Details/SSL_Certificat_Grade.html
echo "--$1--"
sudo curl https://www.ssllabs.com/ssltest/analyze.html?d=$1 -o /home/anis/PersonalProjects/script-launcher/backend/scripts/SSL_Certificat_Grade.html
#echo 'In progress'
