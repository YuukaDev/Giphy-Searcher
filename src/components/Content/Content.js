import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./Content.css";

function Content() {
    const [toggle, setToggle] = useState(false);
    const [error, setError] = useState("");
    const [dataGif, setData] = useState([]);

    const getGif = async (name) => {
        const API_KEY = process.env.REACT_APP_API_KEY
        const url = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${name}&limit=20&offset=0&rating=g&lang=en`
        );
        const random = await url.json();
        setToggle(true);
        setData(random.data);
    };

    const { data, status } = useQuery('gifs', getGif);

    console.log(data);

    return (
        <div className="container">
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    const value = e.target.elements.input.value;
                    if (!value) {
                        setError("Enter name of the gif");
                    } else {
                        setError("");
                        getGif(value);
                    }
                }}
            >
                <div className="wrapper-form">
                    <input type="text" id="input" placeholder="Enter name..." />
                    &nbsp;&nbsp;&nbsp;
                    <button type="submit">Submit</button>
                </div>
                <p className="error">{error}</p>
                <div className={toggle ? "grid-wrapper" : "img-error"}>
                    {dataGif.map((item) => (
                        <div key={item.id}>
                            <a target="_blank" rel="noreferrer" href={item.url}>
                                <img alt="gif" loading="lazy" src={item.images.original.url} />
                            </a>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default Content;