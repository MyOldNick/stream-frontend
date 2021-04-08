//react
import { useState, useEffect } from 'react'
import { ReactFlvPlayer } from 'react-flv-player'

const Home = ()  => {
    const [streams, setStreams] = useState({})

    useEffect(() => {

        if(Object.keys(streams).length <= 0) {

            fetch(`http://127.0.0.1:8888/api/streams`)
                .then(res => res.json())
                .then(res => setStreams(res.live))

        }

    }, [streams])

    return (
        <div>
            {Object.keys(streams).length > 0 ? Object.keys(streams).map(stream => (<div>
                <ReactFlvPlayer
                    url={`http://127.0.0.1:8888/live/${stream}.flv`}
                    heigh = "800px"
                    width = "800px"
                    isMuted={true}
                />
            </div>)) : 'Пусто'}
        </div>
    )
}

export default Home
