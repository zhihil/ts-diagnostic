
if [ $# -eq 1 ] && [ $1 = '--debug' ] 
then
  echo "Getting uncompressed source Dojo"
  curl 'https://download.dojotoolkit.org/release-1.16.0/dojo-release-1.16.0-src.tar.gz' --output dojo.tar.gz
else
  echo "Getting compressed release version Dojo"
  curl 'https://download.dojotoolkit.org/release-1.16.0/dojo-release-1.16.0.tar.gz' --output dojo.tar.gz
fi

tar -xzf dojo.tar.gz

if [ $# -eq 1 ] && [ $1 = '--debug' ] 
then
  mv 'dojo-release-1.16.0-src/dojo' .
  mv 'dojo-release-1.16.0-src/dijit' .
  mv 'dojo-release-1.16.0-src/dojox' .
  rm -rf 'dojo-release-1.16.0-src'
else
  mv 'dojo-release-1.16.0/dojo' .
  mv 'dojo-release-1.16.0/dijit' .
  mv 'dojo-release-1.16.0/dojox' .
  rm -rf 'dojo-release-1.16.0'
fi

rm dojo.tar.gz
