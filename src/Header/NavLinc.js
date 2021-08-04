import style from './Header.module.scss'

export function NavLinc(props) {

  const clickHandler = ()=>{
      console.log(props.linc)
      props.linc.current.scrollIntoView({block: "center", inline: "nearest"})
  }

  return (
    <div className={style.nav}>
      {/*<div onClick={clickHandler}>{props.name}</div>*/}
        <a href={`#${props.name}`} >{props.name}</a>
    </div>
  );
}

