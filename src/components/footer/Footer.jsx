import { IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoLinkedin, logoTwitter, logoWhatsapp, logoYoutube } from 'ionicons/icons'; 
import '../footer/footer.css'
const Footer = () => {
  return (
    <footer>
    <div className="footer0"><h1>Wonder World</h1></div>
    <div className="footer1">
        Connect with us at
        <div className="social-media">
            <a href="#"> <IonIcon icon={logoFacebook}  /></a>
            <a href="#"> <IonIcon icon={logoWhatsapp} /></a>
            <a href="#"> <IonIcon icon={logoInstagram} /></a>
            <a href="#"> <IonIcon icon={logoTwitter} /></a>
            <a href="#"> <IonIcon icon={logoYoutube} /></a>
            <a href="#"> <IonIcon icon={logoLinkedin} /></a>
       

        </div>
    </div>
    <div className="footer2">
        <div className="product">
            <div className="heading">Products</div>
            <div className="div">Sell your Products</div>
            <div className="div">Advertise</div>
            <div className="div">Pricing</div>
            <div className="div">Product Buisness</div>
        </div>
        <div className="services">
            <div className="heading">Services</div>
            <div className="div">Return</div>
            <div className="div">Cash Back</div>
            <div className="div">Affiliate Marketing</div>
            <div className="div">Others</div>
        </div>
        <div className="Company">
            <div className="heading">Company</div>
            <div className="div">Complaint</div>
            <div className="div">Careers</div>
            <div className="div">Affiliate Marketing</div>
            <div className="div">Support</div>
        </div>
        <div className="Get Help">
            <div className="heading">Get Help</div>
            <div className="div">Help Center</div>
            <div className="div">Privacy Policy</div>
            <div className="div">Terms</div>
            <div className="div">Login</div>
        </div>
    </div>
    <div className="footer3">
        Copyright ©
        <h4>Wonder World</h4>
        2021-2028
    </div>
</footer>
  )
}

export default Footer;

