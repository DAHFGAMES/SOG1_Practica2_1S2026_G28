echo "Iniciando Backend"
cd ./server && npm run start & 
echo "Iniciando Frontend"
cd ./client && npm run dev
trap "exit" INT TERM
trap "kill 0" EXIT