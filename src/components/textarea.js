function Textarea(props) {
  const template = `
  
    <textarea class = ${props.class} 
   
    maxlength = "150" ${props.maxlength}
    placeholder=${props.placeholder}>
    </textarea>
  
  `;
  return template;
}

export default Textarea;
