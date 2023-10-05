import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';



class MyElement extends LitElement {

  constructor() {
    super()
    //this.mood = "cadena";
    console.log(`ejecute code ${this.mood}`)
    this.show = false
  }

  static get properties() {
    return {
      mood: {type: String},
      show: {type: Boolean}
    }
  }
  
  static get styles() {
    return css`
    .mood { 
      color: green; 
    }
    `;
  }

  _clickHandler() {
    //alert("clicked")
    this.show = !this.show
  }

  render() {
   

    return html`
      <div>
        Web Components are 
        <span class="mood">${this.mood}</span>!
        <div>
          <button @click=${this._clickHandler}>elemento</button>
        </div>
        
        <div>${this.show ? html`<div>contenido a mostrarse</div>` : html`` }</div>

        <div>
          <slot name="inner"></slot>
        </div>
      </div>


      `;
  }

}

export default MyElement