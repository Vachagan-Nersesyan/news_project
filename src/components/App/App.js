import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import HeaderComp from '../Header'
import NewsCardComp from '../NewsCardComp'
import UserCardComp from '../UserCardComp'

import { Container, Row } from 'react-bootstrap'
import { useState } from 'react';


function App() {


  const [showInfo, setShowInfo] = useState(false)
  const [showInfoObj, setShowInfoObj] = useState({})

  const [showInfoNum, setShowInfoNum] = useState(null)



  const cardInfoArr = [
    {
      id: 0,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      picture: '/static/images/1.jpg',
      fullText: 'news full text 1',
      publishDate: '17.03.2021'
    },
    {
      id: 1,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      picture: '/static/images/2.jpg',
      fullText: 'news full text 2',
      publishDate: '4.10.2022'

    },
    {
      id: 2,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      picture: '/static/images/3.jpg',
      fullText: 'news full text 3',
      publishDate: '25.07.2023'

    },
    {
      id: 3,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      picture: '/static/images/4.jpg',
      fullText: 'news full text 4',
      publishDate: '22.01.2023'

    },
  ]


  const showFullText = (obj) => {


    if (obj.id !== showInfoNum) {
      setShowInfo(true)
      setShowInfoObj(obj)
      setShowInfoNum(obj.id)

    } else {
      setShowInfo(false)
      setShowInfoNum(null)

    }
  }


  return (
    <div className="App">
      <HeaderComp />

      <Container className='mb-5'>
        <h1>My Peronal blog</h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
      </Container>

      <Container>
        <Row>
          {
            cardInfoArr.map((val) => {
              return <NewsCardComp showFullText={showFullText} info={val} />
            })
          }


        </Row>

      </Container>


      <Container className='mb-5 bg-primary text-white p-4'>
        {
          showInfo ?
            <div>
              <div>
                {showInfoObj.id}

              </div>
              <div>
                <img src={showInfoObj.picture} style={{ width: '20%' }} />

              </div>
              <div>
                {showInfoObj.fullText}
              </div>
              <div>
                {showInfoObj.publishDate}
              </div>
            </div>

            : null
        }

      </Container>

      <Container className='mb-5'>

        <UserCardComp />

      </Container>



      <Container fluid className='bg-dark text-white p-3 text-center'>
        <Container>
          &copy; 2023 News protal.All Rights Reserved.
        </Container>
      </Container>


    </div>
  );
}

export default App;
