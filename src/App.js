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
    const data = newsData.map((news) => ({ ...news }));
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
      <main>
        <section>
          {results.length > 0 ? (
            results.map((news) => (
              <section key={news.id}>
                <section>
                  <h2>{news.date}</h2>
                  <Heart />
                </section>
                <section>
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                </section>
              </section>
            ))
          ) : (
            <section>
              <h2>Não encontramos nenhum resultado para sua pesquisa</h2>
            </section>
          )}
        </section>
      </main>
    </>
  );
}
