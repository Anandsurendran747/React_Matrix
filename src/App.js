import { useState, useEffect } from 'react'
import './App.css';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
 
`;
const Cubes = styled.div`
  width: calc(33.33% - 20px); 
  margin: 10px; 
  box-sizing: border-box;
  background-color: lightblue; 
  padding: 20px;
  text-align: center;
`;

export const App = () => {
  const idIterator = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [id, setId] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(-1);

  useEffect(() => {
    console.log("ci" + currentIndex);
    if (currentIndex !== -1 && currentIndex < 9) {
      document.getElementById(id[currentIndex]).style.backgroundColor = 'orange'
      setTimeout(() => {
        setcurrentIndex(currentIndex + 1);
      }, 1000);
    }
    if (currentIndex === 9) {
      setcurrentIndex(-1)
      setId([])

    }
  }, [currentIndex,id])


  const clickEvent = (i) => {
    if (!id.includes(i)) {
      setId([...id, i]);
      document.getElementById(i).style.backgroundColor = 'green'
    }
    if (id.length === 8) {
      console.log(true);
      setcurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {
            idIterator.map((id) => (
              (
                <Cubes id={id} onClick={() => clickEvent(id)}>{id}</Cubes>
              )
            ))
          }
        </Container>
      </header>
    </div>
  );


}


