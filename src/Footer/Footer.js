import style from "./Footer.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {faVk} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {IconSocial} from "./IconSocial";
import codeWars from "../assets/images/codewars.svg"



export function Footer() {
    const links = {
        gitHub: 'https://github.com/lismgmk',
        linkedIn: 'https://www.linkedin.com/in/uladzimir-lis-8497a41a1/',
        vk: 'https://vk.com/id8610315#',
        instagram: '',
        codeWars: 'https://www.codewars.com/users/lismgmk',

    }

    return (
        <div className={elseStyle.rawBox}>
            <div className={style.footer}>
                <div className={style.footerBox}>
                    <IconSocial link={links.gitHub} name={faGithubAlt}/>
                    <IconSocial link={links.linkedIn} name={faLinkedin}/>
                    <div className={style.footerBoxSocial}>
                        <a href='' target="_blank">
                            <div className={style.faCircle}>
                                <img src={codeWars}></img>
                            </div>
                        </a>
                    </div>
                    <IconSocial link={links.vk} name={faVk}/>
                    <IconSocial link={links.instagram} name={faInstagram}/>

                </div>
            </div>
        </div>
    );
}


