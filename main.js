const html = String.raw;

fetchData();
async function fetchData() {
  let response = await fetch('./projects_data.json');
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
            <img src="https://picsum.photos/300/200" alt="img" />
          </div>
          <h4 class="title">${title}</h4>
          <div class="description">${description}</div>
          <div class="date">${date}</div>
          <div class="tags">${allTags}</div>
          <a href="https://vidhatrihr.github.io/js-projects/${slug}">Open Live Preview</a>
        </div>
      </div>
    `;

    document.querySelector('.container').innerHTML += template;
  });
}
