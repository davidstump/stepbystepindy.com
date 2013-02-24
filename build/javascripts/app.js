(function() {

  this.App = {
    init: function() {
      return this.bind();
    },
    getCurrentSection: function(page) {
      switch (page) {
        case 'hours':
          return 'index';
        case 'location':
          return 'index';
        case 'stump':
          return 'about';
        case 'santos':
          return 'about';
        case 'collings':
          return 'about';
        default:
          return page;
      }
    },
    highlightActiveSection: function(bodyClass) {
      var section;
      section = this.getCurrentSection(bodyClass);
      return $("[data-page=" + section + "]").attr("id", "current");
    },
    bind: function() {
      return this.highlightActiveSection($("body").attr("class"));
    }
  };

  $(function() {
    return App.init();
  });

}).call(this);
