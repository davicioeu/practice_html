import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';


class ElementInner extends LitElement {

  constructor() {
    super()
    //this.mood = "cadena";
  }

  static get properties() {
    return {
      content: {type: String},
      
    }
  }
  
  render() {
   

    return html`
      <hr/>
      <div>
        <code>${this.content}</code>
        <div>
          <slot name="elementInner"></slot>
        </div>
      </div>


      `;
  }

}

export default ElementInner