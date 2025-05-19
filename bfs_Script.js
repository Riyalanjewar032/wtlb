function performBFS() {
  const graph = JSON.parse(document.getElementById('graphInput').value);
  const start = parseInt(document.getElementById('startNode').value);
  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      if (graph[node]) {
        for (let neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }

  document.getElementById('outputArea').innerText = "BFS Order: " + result.join(" → ");
}

function performDFS() {
  const graph = JSON.parse(document.getElementById('graphInput').value);
  const start = parseInt(document.getElementById('startNode').value);
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      if (graph[node]) {
        for (let neighbor of graph[node]) {
          dfs(neighbor);
        }
      }
    }
  }

  dfs(start);

  document.getElementById('outputArea').innerText = "DFS Order: " + result.join(" → ");
}
