#!/usr/bin/env bash

NODE_ENV=development nohup npx nx run-many --target=serve --projects=${@} --parallel --maxParallel=10 > my.log 2>&1 &
echo $! > dev-pid.txt
