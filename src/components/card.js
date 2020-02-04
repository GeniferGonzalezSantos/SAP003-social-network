function Card(props) {
  const template = `
    <div class='${props.class}' id=${props.id}>
    ${props.children}
    </div>
  `;
  return template;
}

export default Card;
