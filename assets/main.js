const html = String.raw;

fetchData();
async function fetchData() {
  let response = await fetch('./assets/projects_data.json');
  let data = await response.json();
  useProjectData(data);
}

function useProjectData(data) {
  data.forEach(project => {
    let { title, description, date, tags, slug } = project;

    let allTags = '';
    tags.forEach(tag => {
      allTags = html`<span>${tag}</span>`;
    });

    date = new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    let template = html`
      <div class="container">
        <div class="project">
          <div class="screenshot">
            <img src="./assets/screenshots/${slug}.jpg" alt="${title}" />
          </div>
          <h4 class="title">${title}</h4>
          <div class="description">${description}</div>
          <div class="date">
            <iconify-icon icon="line-md:calendar"></iconify-icon>
            ${date}
          </div>
          <div class="tags">${allTags}</div>
          <a href="https://vidhatrihr.github.io/js-projects/${slug}" target="_blank"
            >Open Live Preview
            <iconify-icon icon="mage:preview-fill"></iconify-icon>
          </a>
        </div>
      </div>
    `;

    document.querySelector('.container').innerHTML += template;
  });
}
