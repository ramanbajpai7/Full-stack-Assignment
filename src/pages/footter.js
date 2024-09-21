import "./footer.css";
export default function footter() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Rapid Innovation</h4>
        <p>
          Rapid Innovation is the help desk software that helps you create a
          seamless support experience...
        </p>
        <button className="demo-button">Get a demo</button>
      </div>
      <div className="footer-column">
        <h4>Product</h4>
        <ul>
          <li>Self Service</li>
          <li>Help Desk</li>
          <li>Pricing</li>
          <li>Product Updates</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Partners</li>
          <li>Open Positions</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Compare</h4>
        <ul>
          <li>Gorgias</li>
          <li>Zendesk</li>
          <li>Re:amaze</li>
          <li>Kustomer</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Support</h4>
        <ul>
          <li>Onboarding Guide</li>
          <li>Learn LogicTech</li>
          <li>LogicTech Status</li>
          <li>Developers</li>
        </ul>
      </div>
    </footer>
  );
}
