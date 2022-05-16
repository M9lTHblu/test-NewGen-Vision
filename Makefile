install:
	npm ci
start:
	npx webpack  serve --mode=development
test:
	npm jest
build:
	rm -rf dist
	npx webpack --mode=production
lint:
	npx eslint .
fixLint:
	npx eslint . --fix
.PHONY: test
