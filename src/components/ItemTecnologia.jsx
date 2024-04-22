import "../App.css";

function ItemTecnologia(props) {
  console.log(document.getElementById("spn-tecnologia"));

  return (
    <>
      <div id="div-square-tecnologia">
        <img id="img-tecnologia" src={props.srcImg} style={{ width: props.width }} />
        <span id="spn-tecnologia">{props.tecnologia}</span>
      </div>
    </>
  );
}

export default ItemTecnologia;
