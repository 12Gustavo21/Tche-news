import React, { useEffect, useState } from "react";
import GlobalStyle from "./global/style";
import * as S from "./style";
import Lupa from "./img/Lupa.svg";
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
  

  return (
    <>
      <GlobalStyle />
      <S.Header>
        <S.HeaderContainer>
          <S.BoxOne>
            <h1>Codelândia</h1>
            <p>blog</p>
          </S.BoxOne>
          <S.BoxTwo>
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
        <S.MainContainer>
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
      <S.Footer>
        <p>Copyright &copy {getCurrentYear()} <a href="https://www.instagram.com/iuricode/" target="_blank"
          rel="noopener noreferrer">  @iuricode </a> </p>
      </S.Footer>
    </>
  );
}
