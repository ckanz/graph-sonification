const neo4j = require("neo4j-driver");
const USERNAME = 'reader'
const PASSWORD = 'reader'

const query = 'Match (p:Person)-[r:REVIEWED]->(m:Movie) RETURN p,r,m'

let myNewGS

export const queryData = () => {
  const AURA_ENDPOINT = document.getElementById('auraEndpoint').value
  const driver = neo4j.driver(AURA_ENDPOINT, neo4j.auth.basic(USERNAME, PASSWORD), { encrypted: true });
  const session = driver.session();
  return session.readTransaction(tx => tx.run(query)).then(response => {
    const mappedResponse = (response ? response.records : []).map(r => r.toObject());
    const mappedGraph = {
      nodes: [],
      relationships: []
    };
    response.records.forEach(r => {
      const recordObj = r.toObject();
      for (const key in recordObj) {
        const graphEl = recordObj[key];
        if (graphEl.labels) {
          mappedGraph.nodes.push(graphEl);
        } else {
          mappedGraph.relationships.push(graphEl);
        }
      }
    });
    return mappedGraph
  }).catch(e => e).finally(() => {
    session.close();
    driver.close();
  });
}
