// Array of Roads
const roads = [
  "Alice House-Bob House", "Alice House-Cabin",
  "Alice House-Post Office", "Bob House-Town Hall",
  "Daria House-Ernie House", "Daria House-Town Hall",
  "Ernie House-Grete House", "Grete House-Farm",
  "Grete House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
  // Creates a map object, that for each node (place) stores an array of connected nodes
  let graph = Object.create(null);

  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  // Roads have "Start-End" form, separate each place and call addEdge method twice (since its two way)
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);