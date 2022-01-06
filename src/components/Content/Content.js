import React, { useState } from "react";
import "./Content.css";

function Content() {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const [base, setBase] = useState({
    imgSrc1: "",
    link1: "",

    imgSrc2: "",
    link2: "",

    imgSrc3: "",
    link3: "",

    imgSrc4: "",
    link4: "",

    imgSrc5: "",
    link5: "",

    imgSrc6: "",
    link6: "",

    imgSrc7: "",
    link7: "",

    imgSrc8: "",
    link8: "",

    imgSrc9: "",
    link9: "",

    imgSrc10: "",
    link10: "",

    imgSrc11: "",
    link11: "",

    imgSrc12: "",
    link12: "",

    imgSrc13: "",
    link13: "",

    imgSrc14: "",
    link14: "",

    imgSrc15: "",
    link15: "",

    imgSrc16: "",
    link16: "",

    imgSrc17: "",
    link17: "",

    imgSrc18: "",
    link18: "",

    imgSrc19: "",
    link19: "",

    imgSrc20: "",
    link20: "",
  });
  const API_KEY = "tG7z3e9k7XxtjSLR0JHge6bvap6vLmm6";
  const getGif = async (name) => {
    const url = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${name}&limit=20&offset=0&rating=g&lang=en`
    );
    const random = await url.json();
    console.log(random);
    setToggle(true);
    setBase({
      imgSrc1: random.data[0].images.downsized.url,
      link1: random.data[0].url,

      imgSrc2: random.data[1].images.downsized.url,
      link2: random.data[1].url,

      imgSrc3: random.data[2].images.downsized.url,
      link3: random.data[2].url,

      imgSrc4: random.data[3].images.downsized.url,
      link4: random.data[3].url,

      imgSrc5: random.data[4].images.downsized.url,
      link5: random.data[4].url,

      imgSrc6: random.data[5].images.downsized.url,
      link6: random.data[5].url,

      imgSrc7: random.data[6].images.downsized.url,
      link7: random.data[6].url,

      imgSrc8: random.data[7].images.downsized.url,
      link8: random.data[7].url,

      imgSrc9: random.data[8].images.downsized.url,
      link9: random.data[8].url,

      imgSrc10: random.data[9].images.downsized.url,
      link10: random.data[9].url,

      imgSrc11: random.data[10].images.downsized.url,
      link11: random.data[10].url,

      imgSrc12: random.data[11].images.downsized.url,
      link12: random.data[11].url,

      imgSrc13: random.data[12].images.downsized.url,
      link13: random.data[12].url,

      imgSrc14: random.data[13].images.downsized.url,
      link14: random.data[13].url,

      imgSrc15: random.data[14].images.downsized.url,
      link15: random.data[14].url,

      imgSrc16: random.data[15].images.downsized.url,
      link16: random.data[15].url,

      imgSrc17: random.data[16].images.downsized.url,
      link17: random.data[16].url,

      imgSrc18: random.data[17].images.downsized.url,
      link18: random.data[17].url,

      imgSrc19: random.data[18].images.downsized.url,
      link19: random.data[18].url,

      imgSrc20: random.data[19].images.downsized.url,
      link20: random.data[19].url,
    });
  };
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
          <a target="_blank" rel="noreferrer" href={base.link1}>
            <img alt="gif" src={base.imgSrc1} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link2}>
            <img alt="gif" src={base.imgSrc2} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link3}>
            <img alt="gif" src={base.imgSrc3} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link4}>
            <img alt="gif" src={base.imgSrc4} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link5}>
            <img alt="gif" src={base.imgSrc5} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link6}>
            <img alt="gif" src={base.imgSrc6} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link7}>
            <img alt="gif" src={base.imgSrc7} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link8}>
            <img alt="gif" src={base.imgSrc8} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link9}>
            <img alt="gif" src={base.imgSrc9} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link10}>
            <img alt="gif" src={base.imgSrc10} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link11}>
            <img alt="gif" src={base.imgSrc11} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link12}>
            <img alt="gif" src={base.imgSrc12} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link13}>
            <img alt="gif" src={base.imgSrc13} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link14}>
            <img alt="gif" src={base.imgSrc14} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link15}>
            <img alt="gif" src={base.imgSrc15} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link16}>
            <img alt="gif" src={base.imgSrc16} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link17}>
            <img alt="gif" src={base.imgSrc17} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link18}>
            <img alt="gif" src={base.imgSrc18} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link19}>
            <img alt="gif" src={base.imgSrc19} />
          </a>
          <a target="_blank" rel="noreferrer" href={base.link20}>
            <img alt="gif" src={base.imgSrc20} />
          </a>
        </div>
      </form>
    </div>
  );
}

export default Content;
