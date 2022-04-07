import React, { useEffect, useState } from "react";
import './index.css'

function App() {
    const [nutri, setNutri] = useState([])

    // when the page loads
    useEffect(() => {

        const loadApi = async() => {
            const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

            fetch(url)
            .then((res) => {
                res.json()
                .then((r) => {
                    setNutri(r)
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }

        loadApi()
    }, [])

    return (
        <div className="container">
            <header>
                <strong>React Nutri</strong>
            </header>

            {nutri.map((item) => {
                return(
                    <article key={item.id} className="posts">
                        <strong className="title">{item.titulo}</strong>
                        <img src={item.capa} alt={item.titulo} className="capa"/>
                        <p className="subtitle">
                            {item.subtitulo}
                        </p>
                        <a className="button">Access</a>
                    </article>
                )
            })}
        </div>
    );
}

export default App;
