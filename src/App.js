
import {useRef, useState} from 'react'

import './App.scss';

const strPub = {
  "а": ["ы", "е", "у", "ой", "е"],
  "(ш/ж/к/ч)а": ["%и", "%е", "%у", "%ой", "%е"],
  "б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х": ["%а", "%у", "%а", "%ом", "%е"],
  "и": ["ей", "ям", "%", "ями", "ях"],
  "ый": ["ого", "ому", "%", "ым", "ом"],
  "й": ["я", "ю", "я", "ем", "е"],
  "о": ["а", "у", "%", "ом", "е"],
  "с/ш": ["%а", "%у", "%", "%ом", "%е"],
  "ы": ["ов", "ам", "%", "ами", "ах"],
  "ь": ["я", "ю", "я", "ем", "е"],
  "уль": ["ули", "уле", "улю", "улей", "уле"],
  "(ч/ш/д/т)ь": ["%и", "%и", "%ь", "%ью", "%и"],
  "я": ["и", "е", "ю", "ей", "е"]
}
const cases = [
  { id: 0, name: 'Р.п.' },
  { id: 1, name: 'Д.п.' },
  { id: 2, name: 'В.п.' },
  { id: 3, name: 'Т.п.' },
  { id: 4, name: 'П.п.'}
]

function App() {

  const inputRef = useRef(null)
  const [answer, setAnswer] = useState('Введите слово в поле')

  var ans = '';

  const caseTranslate = (id) => {
    const newWord = inputRef.current.value
     
    for (var i = 1; i <= 3; i++) {
      if (newWord.slice(-i) in strPub) {
        ans = newWord.slice(-i)

      }
    }

    ans = newWord.slice(0, -ans.length) + strPub[ans][id]
    setAnswer(ans)
  }
  

  return (
    <div className="App">
      <input
        ref={inputRef}
        placeholder='введите слово'
        type="text" />
      <div className='buttons'>
        {cases.map((item) => (
          <button
            key={item.id}
            onClick={() => caseTranslate(item.id)}>
            {item.name}
          </button>
        ))}
      </div>
      <h3>{ answer }</h3>
    </div>
  );
}

export default App;
