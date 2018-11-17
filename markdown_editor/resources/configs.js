
/**
 * @overview configs of ccm component markdown_editor
 * @author Manfred Kaul <manfred.kaul@h-brs.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "demo": {
    key: "demo",
    markdown: '# Hello Markdown!<br>## Please edit here.',
    html: {
      inner: [
        { id: 'markdown', inner: '%markdown%' },
        { id: 'preview', inner: '%preview%' }
      ]
    },
    showdownjs: ["ccm.load", "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.7/showdown.min.js"],
    css: [ 'ccm.load',  'https://ccmjs.github.io/mkaul-components/markdown_editor/resources/default.css' ]
  },
  "localhost": {
    key: "localhost",
    css: [ 'ccm.load',  '../markdown_editor/resources/default.css' ],
    language: 'de',
    labels: {
      de: {
        intro: "Entscheiden Sie sich schnell, ohne lange nachzudenken:<br><b>Was ist Ihnen am wichtigsten:</b>",
        label: "Fertig!"
      }
    },
    onfinish: function( instance, results ){ console.log( results ); }
  }
};
