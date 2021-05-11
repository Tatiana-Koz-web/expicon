<template>
  <div class="slide">
    <h2 class="title">PRICCING</h2>
    <span
      class="subtitle"
    >Test out our app today! Choose from three subscription Based payment models.</span>
    <div class="plans">
      <div class="basic plan">
        <h3>basic</h3>
        <h2>monthly</h2>
        <span class="price">$9</span>
        <ul>
          <li>Very good Amazing</li>
          <li>Perfect job</li>
          <li>Love this</li>
          <li>It’s so good Features</li>
          <li>It’s so good Features</li>
          <li>It’s so good Features</li>
        </ul>
        <a class="href" href="##">
          <span>select</span>
        </a>
      </div>
      <div class="advanced plan">
        <h3>advanced</h3>
        <h2>yerly</h2>
        <span class="price">$99</span>
        <ul>
          <li>Very good Amazing</li>
          <li>Perfect job</li>
          <li>Love this</li>
          <li>It’s so good Features</li>
          <li>It’s so good Features</li>
          <li>It’s so good Features</li>
        </ul>
        <a class="href" href="##">
          <span>select</span>
        </a>
      </div>
      <div class="pro plan">
        <h3>pro</h3>
        <h2>yerly</h2>
        <span class="price">$120</span>
        <ul>
          <li>Very good Amazing</li>
          <li>Perfect job</li>
          <li>Love this</li>
          <li>It’s so good Features</li>
          <li>It’s so good Features</li>
          <li>It’s so good Features</li>
        </ul>
        <a class="href" href="##">
          <span>select</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.slide {
  background: #000;
  color: #fff;
  margin-bottom: 100px;
}
.subtitle {
  display: block;
  font-size: 2rem;
  max-width: 65%;
  width: 100%;
  margin: 50px 0;
  @media (max-width: 1440px) {
    max-width: 100%;
  }
}
.plans {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.plan {
  text-transform: uppercase;
  & h3 {
    font-size: 2rem;
    position: relative;
    margin-bottom: 15px;
    &::before {
      content: "";
      position: absolute;
      bottom: -5px;
      width: 100px;
      height: 3px;
      background: #fff;
    }
  }
  & h2 {
    font-size: 2.5rem;
  }
  & .price {
    font-size: 8rem;
  }
  & li {
    position: relative;
    margin: 15px 20px;
    &::before {
      content: "";
      position: absolute;
      left: -20px;
      width: 15px;
      height: 15px;
      background: url(../assets/s.svg) no-repeat;
    }
  }
  & .href {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    background: #fff;
    border-radius: 30px;
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 900px) {
      margin: 2rem;
  }
}
.basic {
  & h3,
  h2,
  .price {
    color: #d44a49;
    &::before {
      background: #d44a49;
    }
  }
  & .href {
    background: #d44a49;
  }
}
.advanced {
  & h3,
  h2,
  .price {
    color: #f0b043;
    &::before {
      background: #f0b043;
    }
  }
  & .href {
    background: #f0b043;
  }
}
.pro {
  & h3,
  h2,
  .price {
    color: #1ee2e9;
    &::before {
      background: #1ee2e9;
    }
  }
  & .href {
    background: #1ee2e9;
  }
}
</style>