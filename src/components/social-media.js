import React from 'react';
import Fade from 'react-reveal/Fade';

export const SocialMedia = (props) => (
    <div className="social-media-bar" >
        <Fade right distance={"50px"}>
            <h3
                onClick={(e)=>{
                    if( props.linkDisplay == false) {
                        props.displayLinks() 
                    } 
                }}
                className={"social-media__title " + (props.linkDisplay == true && "is-shrunk" )}
            >Contact Me!</h3>
        </Fade>
        <div 
        className={"social-media__links-container " + (props.linkDisplay == true && " is-expanded" )} 
        onClick={(e)=>{
            if( props.linkDisplay == false) {
                props.displayLinks() 
            } 
        }}
        >
            <a className={"social-media-bar__contact__link is-email " + (props.linkDisplay == true && " is-expanded" )} href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=matthewlstillings@gmail.com" target="_blank"><p className={"link-text " + (props.linkDisplay == true && " is-expanded" )}>Email</p></a>
            <a href="https://twitter.com/AngstGehirn" className={"social-media-bar__contact__link is-twitter " + (props.linkDisplay == true && " is-expanded" )}><p className={"link-text " + (props.linkDisplay == true && " is-expanded" )}>Twitter</p></a>
            <a href="https://github.com/matthewlstillings" className={"social-media-bar__contact__link is-github " + (props.linkDisplay == true && " is-expanded" )}><p className={"link-text " + (props.linkDisplay == true && " is-expanded" )}>Github</p></a>
            <a href="https://www.linkedin.com/in/matthew-stillings-4a2582141/" className={"social-media-bar__contact__link is-linkedin "  + (props.linkDisplay == true && " is-expanded" )}><p className={"link-text " + (props.linkDisplay == true && " is-expanded" )}>LinkedIn</p></a>
        </div>
    </div> 
)

export default SocialMedia;