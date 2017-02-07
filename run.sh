docker run traefik-dev:master ls -alF static/app/sections
docker run containous/traefik ls -alF static/app/sections

exit

docker run -d -p 8080:8080 -p 443:443 -p 80:80 \
-v /opt/traefik/traefik.toml:/etc/traefik/traefik.toml \
-v /opt/traefik/acme.json:/etc/traefik/acme.json \
-v /var/run/docker.sock:/var/run/docker.sock \
containous/traefik

