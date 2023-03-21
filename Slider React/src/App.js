import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [item, setItem] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (item < 0) {
      setItem(lastIndex)
    }
    if (item > lastIndex) {
      setItem(0)
    }
  }, [item, people])
  useEffect(() => {
    let slider = setTimeout(() => {
      setItem(item + 1)
    }, 3000);
    return (() => clearInterval(slider))
  }, [item])
  return <section className='section'>
    <div className="title">
      <h2><span>/
      </span>reviews</h2>
    </div>
    <div className="section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        let position = 'nextSlide'
        if (personIndex == item) {
          position = 'activeSlide'
        } if (personIndex == item - 1 ||
          (item == 0 && person.length - 1)) {
          position = 'lastSlide'
        }
        return <article className={position} key={id}>
          <img src={image} alt={name} className='person-img' />
          <h4>{name}</h4>
          <p className="title">
            {title}
          </p>
          <p className="text">
            {quote}
          </p>
          <FaQuoteRight className='icon' />
        </article>

      })}
      <button className="prev" onClick={() => setItem(item - 1)}><FaChevronLeft></FaChevronLeft></button>
      <button className="next" onClick={() => setItem(item + 1)}><FaChevronRight></FaChevronRight></button>
    </div>
  </section>;
}

export default App;
