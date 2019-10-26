function ImgLink(props) {
    const template = `
    <div class="img-sair">
    <img class="sair-svg" onclick="div.handleClick(event, ${props.onClick})"   src=${props.src}>
  </div>
      `;
    return template;
  }
  
  window.div = {
    handleClick: (event, callback) => {
      event.preventDefault();
      callback(event);
    },
  };
  
  export default ImgLink;