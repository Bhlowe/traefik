rm -rf static

make build           # Generate Docker image
make generate-webui  # Generate static contents in `traefik/static/` folder.


make binary image
