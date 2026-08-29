    import './Footer.css'
    function Footer({ ownerName }) {
      const year = new Date().getFullYear()
      return (
        <footer className="footer">
          <div className="footer__container">
            <p className="footer__copy">© {year} {ownerName}. Built by DAT</p>
            <a href="#hero" className="footer__links">Back to Top</a>
          </div>
        </footer>
      )
    }
    export default Footer
 
