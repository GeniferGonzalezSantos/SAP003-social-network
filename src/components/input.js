function Input(props) {
  const template = `
    <input class='${props.class}' 
      placeholder=${props.placeholder} 
      type=${props.type}
      required  
    >
  `;
  return template;
}

export default Input;
