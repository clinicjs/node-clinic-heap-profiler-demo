# Heap Profiler Example

This is an example of a small real world-ish program.

The only setup required after cloning is to run `npm install`.

To get started, generate a flame graph for the first server:

```sh
clinic heapprofiler --autocannon [ / ] -- node 1-server-with-many-allocations.js
```
