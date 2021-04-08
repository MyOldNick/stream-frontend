//react
import { useState, useEffect } from "react";
import { ReactFlvPlayer } from "react-flv-player";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//constants
import { API, STREAMS_API } from '../../constants/API'

const Home = () => {
  const [streams, setStreams] = useState();
  const [users, setUsers] = useState()

  useEffect(() => {

    //немного лапши и говнокода
    if (!streams) {
      fetch(`${STREAMS_API}streams`)
        .then((res) => res.json())
        .then(async (res) => { 

            if(res && Object.keys(res).length !== 0) {

                const keys = Object.keys(res.live)

                const obj = {keys}

                const json = await JSON.stringify(obj)
    
    
                fetch(`${API}findUsers`, {
                    method: "POST",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(data => data.json())
                .then(data  => {
                    setUsers(data)
                    setStreams(res.live)
                })
            }
        });
    }

  }, [streams]);



  return (
    <Container>
      <Row className="mt-5">
        {streams && Object.keys(streams).length > 0
          ? Object.keys(streams).map((stream, index) => (
              <Col md xl={4} key={index}>
                <ReactFlvPlayer
                  url={`http://127.0.0.1:8888/live/${stream}.flv`}
                  isMuted={true}
                />
                <p>{users[index].login}</p>
              </Col>
            ))
          : "Пусто"}
      </Row>
    </Container>
  );
};

export default Home;
