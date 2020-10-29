import * as Tone from 'tone'

const graphToText = graphObject => {
  let text = ''
  const { nodes, relationships } = graphObject
  text += `The graph has ${nodes.length === 0 ? 'no' : nodes.length} ${relationships.length === 0 ? 'unconnected' : ''} nodes`
  text += `and ${relationships.length === 0 ? 'no' : relationships.length} relationships.`
  return text
}

export default class GraphSonification {
  constructor (graphObject) {
    this.graphObject = graphObject
  }

  sonify () {
    console.log('playing:', this.graphObject)
    const synth = new Tone.Synth().toDestination()
    const now = Tone.now()

    const { nodes, relationships } = this.graphObject
    let time = 0
    nodes.forEach((n, i) => {
      synth.triggerAttackRelease("C4", "8n", now + time)
      time += 0.5
    })

    relationships.forEach((r, i) => {
      synth.triggerAttackRelease("E4", "8n", now + time)
      time += 0.5
    })
  }

  speak () {
    console.log('speaking:', this.graphObject)
    const msg = new SpeechSynthesisUtterance();
    msg.text = graphToText(this.graphObject)
    window.speechSynthesis.speak(msg);
  }
}
