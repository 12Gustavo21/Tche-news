import React, { useEffect, useState } from "react";
import GlobalStyle from "./global/style";
import * as S from "./style";
import Lupa from "./assets/Lupa.svg";
import Heart from "./components/Heart";
import newsData from "./news.json";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const getNews = () => {
    const data = newsData.map((news) => ({
      ...news
    }));
    setResults(data);
  };

  useEffect(() => {
    getNews();
  }, []);

  function handleSearch(event) {
    const query = event.target.value;
    setQuery(query);

    const filteredNews = newsData.filter((news) => {
      if (news.title.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
      return "";
    });

    setResults(filteredNews);
  }

  function getCurrentYear() {
    const year = new Date().getFullYear();
    return year;
  }

  const ScrollReveal = require("scrollreveal").default;

  ScrollReveal().reveal(".BoxOne", {
    delay: 75,
    origin: "top",
    distance: "25px",
    duration: 500,
    reset: true,
  });

  ScrollReveal().reveal(".BoxTwo", {
    delay: 200,
    origin: "top",
    distance: "25px",
    duration: 500,
    reset: true,
  });

  ScrollReveal().reveal(".MainContainer", {
    delay: 300,
    origin: "top",
    distance: "25px",
    duration: 500,
    reset: true,
  });

  ScrollReveal().reveal(".Footer", {
    delay: 75,
    origin: "top",
    distance: "25px",
    duration: 500,
  });

  return (
    <>
      <GlobalStyle />
      <S.Header>
        <S.HeaderContainer>
          <S.BoxOne className="BoxOne">
            <h1>Codelândia</h1>
            <p>blog</p>
          </S.BoxOne>
          <S.BoxTwo className="BoxTwo">
            <img src={Lupa} alt="search" id="Lupa" />
            <input
              type="text"
              placeholder="Pesquisar no blog"
              value={query}
              onChange={handleSearch}
            />
          </S.BoxTwo>
        </S.HeaderContainer>
      </S.Header>
      <S.Main>
        <S.MainContainer className="MainContainer">
          {results.length > 0 ? (
            results.map((news) => (
              <S.NewsContainer key={news.id}>
                <S.Informations>
                  <h2>{news.date}</h2>
                  <Heart />
                </S.Informations>
                <S.Description>
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                </S.Description>
              </S.NewsContainer>
            ))
          ) : (
            <S.ErrorContainer>
              <h4>We didn't find anything, sorry :(</h4>
            </S.ErrorContainer>
          )}
        </S.MainContainer>
      </S.Main>
      <S.Footer className="Footer">
        <p>Copyright © {getCurrentYear()}<a href="https://www.instagram.com/iuricode/" target="_blank"
          rel="noopener noreferrer">@iuricode</a></p>
      </S.Footer>
    </>
  );
}
