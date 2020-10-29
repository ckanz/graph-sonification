import GraphSonification from '../lib'

const myNewGS = new GraphSonification({ nodes: [{}, {}], rels: [{}, {}, {}]})

document.getElementById('speak').addEventListener('click', () => myNewGS.speak())

document.getElementById('play').addEventListener('click', () => myNewGS.sonify())
