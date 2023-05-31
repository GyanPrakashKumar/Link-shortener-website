import './App.css'

function App() {
  return (
    <>
      <h1>Short Your Link</h1>
      <div>
        <input type="text" placeholder="Paste your link" />
        <button>Short</button>
        <div className='result'>
          <input type="text" value="abs" disabled />
          <button>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
