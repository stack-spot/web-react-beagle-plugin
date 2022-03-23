import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import BeagleService from './beagle/beagle-service'

const App = () => {
  return (
    <>
      <BeagleProvider value={BeagleService}>
      {% if sample %}
        <BeagleRemoteView route={'public/payload.json'} />
      {% endif %}
      {% if not sample %}
        <BeagleRemoteView route={'/'} />
      {% endif %}
      </BeagleProvider>
    </>
  )
}

export default App
