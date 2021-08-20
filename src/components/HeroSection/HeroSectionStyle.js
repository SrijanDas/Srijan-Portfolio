import styled from "styled-components";

const HeroStyle = styled.div`
  .hero {
    height: 100vh;
    background: none !important;
    display: flex;
    padding: 10rem;
    justify-content: space-around;
    align-items: center;
    position: relative;
    gap: 4rem;
  }
  .hero_left {
    width: 50%;
  }
  .hero_btn {
    margin-top: 3rem;
  }
  .hero__heading {
    font-size: 2rem;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      color: var(--white);
      margin-bottom: 2rem;
    }
  }

  .isFmvA {
    /* margin-bottom: 3rem; */
  }

  .hero__right {
    display: flex;
    justify-content: center;
    width: 50%;
    border-radius: 20px;
    border: 2px solid var(--gray-2);
    overflow: hidden;
    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      /* width: 16px; */
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          /* transform: rotate(-90deg); */
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 975px) {
    .hero {
      margin-top: 2rem;
      padding: 2rem 2rem 0 2rem;
      flex-direction: column;
      gap: 0;
      height: auto;
    }
    .hero__right {
      width: 100%;
      margin-top: 2rem;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__heading {
      font-size: 1.4rem;

      .hero__name {
        font-size: 4.5rem;
      }
    }
    .isFmvA {
      margin-left: 0;
    }
    .hero__left {
      padding-top: 2rem;
      button {
        margin-top: 1rem;
      }
    }

    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
export default HeroStyle;
