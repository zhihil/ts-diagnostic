
if [ $# -eq 1 ] && [ $1 = '--debug' ] 
then
  curl 'http://download.dojotoolkit.org/release-1.16.0/dojo-release-1.16.0-src.tar.gz' --output dojo.zip
else
  curl 'https://download.dojotoolkit.org/release-1.16.0/dojo-release-1.16.0.tar.gz' --output dojo.zip
fi

tar -xzf dojo.zip
mv 'dojo-release-1.16.0/dojo' .
mv 'dojo-release-1.16.0/dijit' .
mv 'dojo-release-1.16.0/dojox' .
rm dojo.zip
rm -rf 'dojo-release-1.16.0'
