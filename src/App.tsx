import './App.css'
import Quotes from './components/core/Quotes'

function App() {
  return (
    <div>
      <h1 className='text-7xl text-center font-diphylleia'>
        Quote Of The Day
      </h1>
      <div className='flex justify-center h-[500px] items-center'>
        <Quotes />
      </div>
    </div>
  )
}

export default App
