# Practica de codigo html


visualizacion de las practicas atravez de este enlace [https://davicioeu.github.io/practice_html/](https://davicioeu.github.io/practice_html/)


### Editor Visual Studio Code

extensiones utilizadas para mejorar la experiencia de codificacion

1. [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
2. [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
3. [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
4. [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)
5. [Github theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)




### Comandos basicos de git

` git init `

` git add . `

` git commit -m "Mensaje descriptivo de los cambios realizados" `


` git push origin master `


### navegadores soportados para CSS nesting
 1. Edge  apartir de v112
 2. Chrome apartir de v112
 3. Firefox apartir de v117

mas informacion en [css nesting](https://drafts.csswg.org/css-nesting-1/)

```scss
/* css nesting */
div.parent {
  /* properties */
  & div.child {
    /* properties */
  }

  /* media */
  @media (min-width > 1024px) {
    max-inline-size: 1024px;
  }

}


```

