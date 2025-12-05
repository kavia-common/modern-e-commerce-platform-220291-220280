#!/bin/bash
cd /home/kavia/workspace/code-generation/modern-e-commerce-platform-220291-220280/ecommerce_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

