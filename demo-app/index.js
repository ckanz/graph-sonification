import GraphSonification from '../lib'
import { queryData } from './auraConnector'

const triggerDataQuery = () => {
  queryData().then(r => {
    const myNewGS = new GraphSonification(r)
    console.log('111', myNewGS)
    console.log('222', r)
    document.getElementById('result').innerHTML = JSON.stringify(r)
    document.getElementById('speak').addEventListener('click', () => myNewGS.speak())
    document.getElementById('play').addEventListener('click', () => myNewGS.sonify())
  })
}

document.getElementById('getData').addEventListener('click', () => triggerDataQuery())
