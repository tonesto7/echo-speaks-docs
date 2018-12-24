rm -rf docs
test -d docs && mkdir /docs
cp -r dist/ docs/
