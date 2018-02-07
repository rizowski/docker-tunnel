# Test docker network tunneling

I wanted to see if it was possible to route network traffic through a container.

## Requirements

You need an account with [Private Internet Access](https://www.privateinternetaccess.com).

You need to put your credentials in a `.conf` file documented in [docker-compose.yml](./docker-compose.yml#L17).

The format would be:

```conf
username
password
```

## Playground

  1. `docker-compose up`
  2. open browser at http://localhost:8080
    - Notice your Public IP address
  3. open browser at http://localhost:9090
    - Notice that your ip is different
