import React from 'react'
import './Header.css'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import StoreIcon from '@material-ui/icons/Store';
import PaymentIcon from '@material-ui/icons/Payment';
import DevicesIcon from '@material-ui/icons/Devices';

function Header() {
    return (
        <div className="header">
            <h1>Demo Store</h1>
            <p>Store Pickup Click and Collect</p>
            <div className="header_body">
                <div className="header_body_item">
                    <CardGiftcardIcon className="header_icon" style={{fontSize:2.2+"em"}}/>
                    <p>Je choissis mes articles sur click and collect</p>
                </div>
                <div className="header_body_item">
                    <StoreIcon className="header_icon" style={{fontSize:2.2+"em"}}/>
                    <p>Je selectionne retrait en magasin et vérifie la disponibilité du produit</p>
                </div>
                <div className="header_body_item">
                    <PaymentIcon className="header_icon" style={{fontSize:2.2+"em"}}/>
                    <p>Je valide ma commande, je paye en ligne ou en boutique</p>
                </div>
                <div className="header_body_item">
                    <DevicesIcon className="header_icon" style={{fontSize:2.2+"em"}}/>
                    <p>Je reçois un sms, un email et une notification de confirmation de sa disponibilité en moins 1H ouvert</p>
                </div>
            </div>
            <div className="header_button">
                <button>Voir touts les produits</button>
            </div>
        </div>
    )
}

export default Header
