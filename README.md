# Heap Profiler Example

This is an example of a small real world-ish program.

The only setup required after cloning is to run `npm install`.

There are 3 iterations of a server that responds with a JSON payload containing
an millisecond timestamp date, and an ID.

1. Responds with a payload generated by a sub-optimal function
1. Responds with a payload generated by an optimal function
1. Responds with a payload generated by with a smaller call-graph
1. Responds with a payload generated without a serializer (without `JSON.stringify`)

Each should produce different Flame results indicating the stack profiles of each. 

Upon profiling `1` you should see a very few request per second.

Running `2` you should see much higher requests per second, about 50x faster than `1`.

Running `3` you should see around double the amount of requests per second versus `2`.

Running `4` you should see roughly a 10% improvement versus `3`.


To get started, generate a flame graph for the first server:

```sh
clinic flame --autocannon [ / ] -- node 1-server-with-slow-function.js
```
