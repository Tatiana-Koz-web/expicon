<template>
  <footer class="footer">
    <div class="container footer">
      <a href="##" class="suport">       
        <svg class="mail-icon"
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
      </a>
      <span class="logo">EXP|CON</span>
      <span class="copy"
        >2019 © All Rights Reserved | Speer Technologies Incorporated</span
      >
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {  
  min-height: 500px;
  font-size: 1.5rem;
  background: #5E33D1;  
  color: #fff;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    height: 300px;
    justify-content: center;
  }  
  & .suport {
    font-size: 1.9rem;
    letter-spacing: 3.5px;
    margin-top: 100px;    
    color: #fff;
    text-decoration: none;
    @media (max-width: 960px) {
      margin-top: 20px;
      font-size: 1rem;
    }
    @media (max-width: 700px) {
      text-align: center;
      margin-top: 15px;
      font-size: 1rem;
    }
  }
  & .logo {
    font-size: 2.5rem;
    text-align: center;
    margin: 80px 0 50px 0;
    @media (max-width: 960px) {
      margin: 50px 0 50px 0;
    }
  }
  & .copy {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 2.4px;
    @media (max-width: 960px) {
      font-size: 0.8rem;
    }
  }
  & .mail-icon{
    max-width: 36px;
    fill:#fff;    
    margin: 0 1rem; 
  } 
  
}
</style>
