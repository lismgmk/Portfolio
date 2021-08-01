import style from "./Footer.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {faVk} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faViber} from '@fortawesome/free-brands-svg-icons';
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {IconSocial} from "./IconSocial";


export function Footer() {
    const links = {
        gitHub: 'https://github.com/lismgmk',
        linkedIn: '',
        vk: '',
        instagram: '',
        viber: '',
        telegram: '',
    }

    return (
        <div className={elseStyle.rawBox}>
            <div className={`${style.footer} ${elseStyle.container}`}>

                <div className={style.footerBox}>

                    <IconSocial link={links.gitHub} name={faGithubAlt}/>
                    <IconSocial link={links.linkedIn} name={faLinkedin}/>
                    <IconSocial link={links.vk} name={faVk}/>
                    <IconSocial link={links.instagram} name={faInstagram}/>
                    <IconSocial link={links.viber} name={faViber}/>
                    <IconSocial link={links.telegram} name={faTelegramPlane}/>

                </div>
            </div>
        </div>
    );
}


