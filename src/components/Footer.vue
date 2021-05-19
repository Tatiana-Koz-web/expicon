<template>
  <div class="bg">
    <footer class="footer">
      <div class="footer">
        <div class="mail">
          <svg
            class="mail-icon"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 16 13"
            style="enable-background: new 0 0 16 13"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M13.7,1.5H3.1c-0.7,0-1.3,0.6-1.3,1.3v7.9c0,0.7,0.6,1.3,1.3,1.3h10.5c0.7,0,1.3-0.6,1.3-1.3V2.8 C15,2.1,14.4,1.5,13.7,1.5z M13.9,4.1l-5.3,4l-5.7-4V2.8l5.7,4l5.3-4V4.1z"
            />
          </svg>
          <span>support@experienceconcerts.co</span>
        </div>
        <span class="logo">EXP|CON</span>
        <span class="copy"
          >2019 © All Rights Reserved | Speer Technologies Incorporated
        </span>
      </div>
    </footer>
  </div>
</template>
<style lang="scss">
.bg {
  background-color: #5e33d1;
  max-width: 1920px;
  padding: 9rem 9rem 0 9rem;
  min-height: 538px;
  margin: 0 auto;
}
.footer {
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 1.7rem;
  @media (max-width: 960px) {
    max-height: 300px;
    justify-content: center;
  }
  .mail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .8rem;
    max-width: 40%;    
    align-items: center;
    font-size: 2.1rem;
    letter-spacing: 3.5px;
    letter-spacing: 3.5px;
    font-weight: 400;
    @media (max-width: 960px) {
    }
    @media (max-width: 700px) {
    }
  }
  .logo {
    font-size: 3rem;
    text-align: center;
    letter-spacing: 4.8px;
    padding-top: 5.3rem;
    @media (max-width: 960px) {
      
    }
  }
  .copy {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 2.4px;
    margin-top: 2rem;
    @media (max-width: 960px) {
    }
  }
  & .mail-icon {
    width: 36.7px;
    fill: #fff;
    margin: 0 1rem;
  }
}
</style>
