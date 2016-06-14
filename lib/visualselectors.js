(function() {

  var VisualSelector = function() {
    var form = document.createElement("form");
    form.classList.add("visual-selector");

    var input = document.createElement("input");
    input.setAttribute("type", "text");

    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("name", "Next");

    form.appendChild(input);
    form.appendChild(submit);

    var body = document.querySelector("body");
    body.insertBefore(form, body.firstChild);

    this.highlighedClass = "visual-selector-highlighted";

    this.form  = form;
    this.input = input;

    form.addEventListener("submit", this.onSubmit.bind(this));
    input.addEventListener("keydown", this.onInput.bind(this));
  };

  VisualSelector.prototype = {
    // Deals with form submission.
    onSubmit: function(event) {
      event.preventDefault();
      this.highlight();
    },

    // Debounces keydown events.
    onInput: function(event) {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(this.highlight.bind(this), 100);
    },

    // Updates the highlighting for the elements matching the current
    // selector.
    highlight: function() {
      try {
        // Remove all highlighting so far:
        var existing = document.getElementsByClassName(this.highlighedClass);

        Array.from(existing).forEach(function(e) {
          e.classList.remove(this.highlighedClass);
        }.bind(this));

        // Add it on to all current matches:
        if (this.input.value.match(/^\s*$/)) return;
        var matches = document.querySelectorAll(this.input.value);

        Array.from(matches).forEach(function(e) {
          e.classList.add(this.highlighedClass);
        }.bind(this));
      } catch(e) { /* IGNORE console.debug(e); */ }
    },
  };

  new VisualSelector();
})();
