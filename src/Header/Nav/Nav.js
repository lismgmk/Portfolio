import style from '../Header.module.scss'

export function Nav() {
  return (
    <div className={style.nav}>
      <a id='mainHeader' href='#main'>Main</a>
      <a href='#skils'>Skils</a>
      <a id='mainHeader2' href='#progects'>Progects</a>
      <a className={style.anchor} href='#contacts'>Contacts</a>
    </div>
  );
}

