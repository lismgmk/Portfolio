import style from './Header.module.scss'

export function NavLinc(props) {

  const clickHandler = ()=>{
      console.log(props.linc)
      props.linc.current.scrollIntoView({block: "center", behavior: "smooth"})
  }

  return (
    <div className={style.nav}>
      <div onClick={clickHandler}>{props.name}</div>
    </div>
  );
}

