import React, { useEffect, useState } from "react";

//GlobalStyle
import GlobalStyle from "./global/style";

//Styles
import * as S from "./style";

//Images
import magnifyingGlass from "./img/magnifyingGlass.svg";

//Components
import Heart from "./components/Heart";
import newsData from "./news.json";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const getNews = () => {
    const data = newsData.map((news) => ({
      ...news,
    }));
    setResults(data);
  };

  useEffect(() => {
    getNews();
    AOS.init({});
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

  function handleHeartClick(newsId) {
    const newsContainer = document.querySelector(
      `.NewsContainer[data-id="${newsId}"]`
    );
    if (newsContainer) {
      newsContainer.classList.toggle("active");
    }
  }

  return (
    <>
      <GlobalStyle />
      <S.Header>
        <S.HeaderContainer>
          <S.BoxOne
            className="BoxOne"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>
              <span>Code</span>lândia
            </h1>
          </S.BoxOne>
          <S.BoxTwo
            className="BoxTwo"
            data-aos="fade-up"
            data-aos-duration="1250"
          >
            <img src={magnifyingGlass} alt="search" id="magnifyingGlass" />
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
              <S.NewsContainer
                key={news.id}
                className="NewsContainer"
                data-id={news.id}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <S.Informations>
                  <h2>{news.date}</h2>
                  <Heart onHeartClick={() => handleHeartClick(news.id)} />
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
        <p>
          Copyright © {getCurrentYear()}
          <a
            href="https://www.instagram.com/iuricode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @iuricode
          </a>
        </p>
      </S.Footer>
    </>
  );
}
