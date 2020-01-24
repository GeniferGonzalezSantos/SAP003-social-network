function Textarea(props) {
  const template = `
    <p class='erro'> </p>
    <textarea class = ${props.class}
    maxlength = '150'
    placeholder= ${props.placeholder}>
    </textarea>
  
  `;
  return template;
}

export default Textarea;
