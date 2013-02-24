@App=
  
  init: ->
    @bind()

  getCurrentSection: (page) ->
    switch page
      when 'hours' then 'index'
      when 'location' then 'index'
      when 'stump' then 'about'
      when 'santos' then 'about'
      when 'collings' then 'about'
      else page

  highlightActiveSection: (bodyClass) ->
    section = @getCurrentSection(bodyClass)
    console.log section
    $("[data-page=#{section}]").attr("id", "current")

  bind: ->
    @highlightActiveSection $("body").attr("class")

$ ->
  App.init()