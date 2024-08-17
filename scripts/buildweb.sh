cd ..
cd web
npm run build
if [ $? -eq 0 ]; then
    echo BUILD DONE
else
    echo BUILD FAILED
fi
