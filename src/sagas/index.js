import { delay } from 'redux-saga'


export default function *main() {
  yield delay(1000)
  console.log('Saga started')
}

