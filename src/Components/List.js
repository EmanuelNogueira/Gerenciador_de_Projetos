import Style from "./Frase.module.css";
import Item from "./Item";

function List() {
  return (
    <>
      <h1 className={Style.frase_Container}> Minhas lista </h1>
      <ul>
        <Item marca="Lamborguini" />
        <Item marca="Xiaomi" />
      </ul>
    </>
  );
}

export default List;
