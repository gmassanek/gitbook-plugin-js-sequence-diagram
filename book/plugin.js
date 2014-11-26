require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", function() {
    element = $('code.lang-sequence');
    element.sequenceDiagram({theme: 'simple'});
    wrapper = $("<div class='scroll'></div>");
    wrapper.html(element.html());
    element.parent().replaceWith(wrapper);
  });
});
