if ! [[ -d './logs' ]] 
then
    touch logs
fi

if ! [[ -d './frontend/static' ]]
then
    touch static
fi

chmod 755 ./scripts/diagnostic.sh ./scripts/get-dojo.sh
