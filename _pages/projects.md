---
layout: page
permalink: /projects/
title: Projects
description: Research and engineering projects — click any title to open its full write-up.
nav: true
nav_order: 4
---

<div class="projects">
  {% assign sorted_projects = site.projects | sort: 'year' | reverse %}
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>
