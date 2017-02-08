rm -rf static
cd webui
gulp
cd ..
make binary

# make build           # Generate Docker image
# make generate-webui  # Generate static contents in `traefik/static/` folder.


# make binary image
