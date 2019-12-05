
if [ $# -eq 1 ] && [ $1 = '--debug' ] 
then
  curl 'http://download.dojotoolkit.org/release-1.16.0/dojo-release-1.16.0-src.tar.gz' --output dojo.tar.gz
else
  curl 'https://download.dojotoolkit.org/release-1.16.0/dojo-release-1.16.0.tar.gz' --output dojo.tar.gz
fi

tar -xzf dojo.tar.gz
mv 'dojo-release-1.16.0/dojo' .
mv 'dojo-release-1.16.0/dijit' .
mv 'dojo-release-1.16.0/dojox' .
rm dojo.tar.gz
rm -rf 'dojo-release-1.16.0'
