function Button(props) {
  const template = `
    <button 
      type='${props.type}'
      class='${props.class}' 
      onclick="button.handleClick(event, ${props.onClick})" >
      ${props.title}
    </button>
  `;
  return template;
}

window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback(event);
  },
};

export default Button;