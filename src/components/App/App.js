import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import HeaderComp from '../Header'
import NewsCardComp from '../NewsCardComp'

import { Container, Row } from 'react-bootstrap'


function App() {

  const cardInfoArr = [
    {
      id: 0,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content."
    },
    {
      id: 1,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content."
    },
    {
      id: 2,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content."
    },
    {
      id: 3,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content."
    },
  ]


  return (
    <div className="App">
      <HeaderComp />

      <Container>
        <h1>My Peronal blog</h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
      </Container>

      <Container>
        <Row>
          {
            cardInfoArr.map((val) => {
              return <NewsCardComp />
            })  
          }
          

        </Row>

      </Container>


    </div>
  );
}

export default App;
