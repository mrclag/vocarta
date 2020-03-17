import styled from 'styled-components';

export const FindWordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  .top {
    padding-left: 30px;
    padding-top: 8px;
    width: 850px;
    .search {
      background: white;
      border: 0.5px solid #333;
      border-radius: 15px;
      padding: 20px;
    }
    @media screen and (max-width: 800px) {
      margin-left: 0px;
      padding-left: 30px;
      padding-top: 8px;
      padding-bottom: 12px;
      width: unset;
      border-bottom: 1px solid #333;
    }

    h3 {
      font-size: 16px;
      @media screen and (max-width: 800px) {
        margin-left: 10vw;
      }
    }
    #submit-button {
      color: #107bbd;
      margin-left: 10px;
      margin-top: 5px;
      height: 42px;
      width: 50px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #107bbd;
      outline: none;
      cursor: pointer;
      @media screen and (max-width: 800px) {
        width: 50px;
        height: 30px;
      }
    }
    input {
      height: 40px;
      width: 300px;
      padding-left: 20px;
      @media screen and (max-width: 800px) {
        height: 25px;
        margin-left: 30px;
        margin-top: 10px;
        border: 1px solid #333;
        width: 60%;
      }
    }
  }

  .results {
    margin-top: 3vh;
    margin-left: 30px;

    &-title {
      margin-bottom: 0px;
    }
    &-url {
      margin-bottom: 2vh;
      text-decoration: none;
      color: black;
      a {
        text-decoration: none;
        color: black;
      }
    }
    &-words {
      max-height: 75vh;
      overflow: scroll;
      width: 440px;
      .search-moreWords {
        height: 40px;
        line-height: 40px;
        color: white;
        box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.1);
        border: 0.5px solid #555;
        border-radius: 0px 7px 7px 0px;
        margin-top: 5px;
        margin-bottom: 5px;
        transform: translateX(-5px);
        text-align: center;
        cursor: pointer;
        background: #107bbd;
        width: 20px;
        @media screen and (max-width: 800px) {
          width: 30px;
        }
      }
    }
  }
  .moreWords {
    height: 75vh;
    padding-left: 10px;
    padding-right: 10px;
    width: 420px;
    overflow: scroll;
  }
  .both-results {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    #submit-button {
      @media screen and (max-width: 800px) {
        width: 25vw;
        margin-left: 0px;
      }
    }
    .results-words {
      width: 100vw;
    }
  }
`;
