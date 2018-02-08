# Test docker network tunneling

I wanted to see if it was possible to route network traffic through a container.

## Playground

  1. `docker-compose up`
  2. open browser at http://localhost:8080
      - Notice the logs for plain-http
  3. open browser at http://localhost:9090
      - Notice the logs for http-vpn
