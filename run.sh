docker run -d -p 8080:8080 -p 443:443 -p 80:80 \
-v /opt/traefik/traefik.toml:/etc/traefik/traefik.toml \
-v /var/run/docker.sock:/var/run/docker.sock \
containous/traefik

