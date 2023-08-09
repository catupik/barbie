import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [facts, setFacts] = useState(data);
  const [showText, setShowText] = useState(false);

  const removeFact = (id) => {
    let newArray = facts.filter(fact => fact.id !== id);
    setFacts(newArray);
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore;
    setShowText(!showText)
  }

  return (
    <div >
      <h1 className='container'>{facts.length} Things You Need to Know About Game Developer Barbie</h1>
      {facts.map((item=>{
        const {id, fact, description, image, showMore} = item;
        return(
          <div  key={id}>
            <h2 className='container'>{id} - {fact}</h2>

            <div className='container'>
            <img  src={image} width='300' alt='barbie'/>
            </div>
            <div className='container'>
            <p >
              {showMore ? description : description.substring(0, 250) + '...'}
              <button onClick={()=> showTextClick(item)}>{showMore ? 'Show less' : 'Show more'}</button>
            </p>
            </div>

            <div className='container'>
              <button className='btn' onClick={()=> removeFact(id)}>Delete Fact</button>
            </div>

            <br/> <br/> <br/>

          </div>
        )
      }))}

    </div>
  );
}

export default App;
