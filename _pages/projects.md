---
layout: page
permalink: /projects/
title: Projects
description: Research and engineering projects — click any title to open its full write-up.
nav: true
nav_order: 4
---

{% include project_search.liquid %}

<div class="projects">
  {% assign projects_by_year = site.projects | group_by: 'year' | sort: 'name' | reverse %}
  {% for year_group in projects_by_year %}
    <h2 class="year">{{ year_group.name }}</h2>
    {% for project in year_group.items %}
      {% include projects.liquid %}
    {% endfor %}
  {% endfor %}
</div>
