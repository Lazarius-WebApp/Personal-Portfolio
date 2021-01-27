const projectName = 'portfolio';

o.assert.isAbove(document.querySelectorAll("#projects .project-tile").length,0);

- name: NPM install cache
  uses: c-hive/gha-npm-cache@v1

