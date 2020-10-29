const graphToText = graphObject => {
  let text = ''
  const { nodes, rels } = graphObject
  text += `The graph has ${nodes.length === 0 ? 'no' : nodes.length} ${rels.length === 0 ? 'unconnected' : ''} nodes`
  text += `and ${rels.length === 0 ? 'no' : rels.length} relationships.`
  return text
}

export default class GraphSonification {
  constructor (graphObject) {
    this.graphObject = graphObject
  }

  sonify () {
    console.log('making music', this.graphObject)
  }

  speak () {
    console.log('speaking', this.graphObject)
    const msg = new SpeechSynthesisUtterance();
    msg.text = graphToText(this.graphObject)
    window.speechSynthesis.speak(msg);
  }
}
