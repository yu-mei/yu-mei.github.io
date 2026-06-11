---
layout: page
permalink: /projects/
title: Projects
description: Research and engineering projects — click any card to open its full write-up.
nav: true
nav_order: 4
_styles: >
  .projects-preface {
    font-size: 1.2rem;
    line-height: 1.7;
    color: var(--global-text-color);
    max-width: 48rem;
    margin: 0.5rem 0 2.5rem;
    padding: 1.5rem 1.75rem;
    border-left: 4px solid var(--global-theme-color);
    background-color: var(--global-card-bg-color);
    border-radius: 0 10px 10px 0;
  }
  .projects-preface p { margin-bottom: 0; }
  .projects-preface p + p { margin-top: 0.8rem; }
  .projects .card-title { font-size: 1.15rem; }
  .projects .card-text { color: var(--global-text-color-light); }
---

<div class="projects-preface">
  <p>A collection of my research and engineering projects across soft robotics,
  sensing, and learning-based modeling and control.</p>
  <p>Each card links to a dedicated page with the full technical write-up —
  motivation, methods, results, and code.</p>
</div>

<div class="projects">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    {% assign sorted_projects = site.projects | sort: 'importance' %}
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
