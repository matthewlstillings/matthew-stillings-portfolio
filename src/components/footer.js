import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-media__links-container is-expanded">
                <a className="social-media-bar__contact__link is-email is-expanded"  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=matthewlstillings@gmail.com" target="_blank"><p className="link-text is-expanded">Email</p></a>
                <a href="https://twitter.com/AngstGehirn" className="social-media-bar__contact__link is-twitter is-expanded"><p className="link-text is-expanded">Twitter</p></a>
                <a href="https://www.linkedin.com/in/matthew-stillings-4a2582141/" className="social-media-bar__contact__link is-linkedin is-expanded"><p className="link-text is-expanded">LinkedIn</p></a>
                <a href="https://github.com/matthewlstillings" className="social-media-bar__contact__link is-github is-expanded"><p className="link-text is-expanded">Github</p></a>
            </div>
        </footer>
    )
}

export default Footer;