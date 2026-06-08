function renderTOC() {
  const container = document.getElementById('toc-list');
  if (!container) return;
  container.innerHTML = portfolioData.toc.map(item => `
    <li>
      <span class="toc-num">${item.num}</span>
      <span class="toc-name">${item.name}</span>
      <span class="toc-dot"></span>
      <span class="toc-page">${item.page}</span>
    </li>
  `).join('');
}

function renderStats() {
  const container = document.getElementById('stats');
  if (!container) return;
  container.innerHTML = portfolioData.stats.map(stat => `
    <div class="stat-item">
      <div class="stat-num">${stat.num}${stat.sup ? `<sup>${stat.sup}</sup>` : ''}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

function renderVisionMission() {
  const container = document.getElementById('vision-mission');
  if (!container) return;
  container.innerHTML = portfolioData.vision_mission.map(vm => `
    <div class="vm-card">
      <h3>${vm.title}</h3>
      <p>${vm.content}</p>
    </div>
  `).join('');
}

function renderPillars() {
  const container = document.getElementById('pillars');
  if (!container) return;
  container.innerHTML = portfolioData.pillars.map(pillar => `
    <div class="pillar">
      <div class="pillar-icon">${pillar.num}</div>
      <div class="pillar-text">
        <h4>${pillar.title}</h4>
        <p>${pillar.description}</p>
      </div>
    </div>
  `).join('');
}

function renderServices() {
  const container = document.getElementById('services');
  if (!container) return;
  container.innerHTML = portfolioData.services.map(service => `
    <div class="service-card">
      <div class="service-num">${service.num}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `).join('');
}

function renderProcess() {
  const container = document.getElementById('process');
  if (!container) return;
  container.innerHTML = portfolioData.process.map((step, idx) => `
    <div class="process-step" ${idx > 0 ? 'style="padding-left:28px;"' : ''}>
      <span class="step-num">${step.num}</span>
      <h4>${step.title}</h4>
      <p>${step.description}</p>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  container.innerHTML = portfolioData.projects.map(chapter => `
    <div class="project-chapter" data-category="${chapter.chapter}">
      <div class="ch-num">${chapter.num}</div>
      <div class="project-chapter-text">
        <h2>${chapter.title}</h2>
        <p>${chapter.subtitle}</p>
      </div>
    </div>
    ${chapter.projects.map((project, idx) => `
      <div class="project-overview" style="margin-top:${idx > 0 ? '2px' : '0'};">
        <span class="section-label">Project ${project.id}</span>
        <h3>${project.title}</h3>
        <div class="project-meta-grid">
          ${Object.entries(project).filter(([key]) => !['id', 'title', 'description'].includes(key)).map(([key, value]) => `
            <div class="meta-item">
              <label>${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
              <span>${value}</span>
            </div>
          `).join('')}
        </div>
        <p>${project.description}</p>
      </div>
      <div class="gallery-note">↑ Full imagery and documentation in companion materials.</div>
    `).join('')}
  `).join('');
}

function renderContact() {
  const container = document.getElementById('contact-details');
  if (!container) return;
  container.innerHTML = portfolioData.contact.map(item => `
    <div class="contact-row">
      <div class="contact-icon">${item.icon}</div>
      <div class="contact-row-text">
        <label>${item.label}</label>
        <span>${item.value}</span>
      </div>
    </div>
  `).join('');
}

function renderTags() {
  const container = document.getElementById('tags');
  if (!container) return;
  container.innerHTML = portfolioData.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function init() {
  renderTOC();
  renderStats();
  renderVisionMission();
  renderPillars();
  renderServices();
  renderProcess();
  renderProjects();
  renderContact();
  renderTags();
  enableEditing();
}

function enableEditing() {
  const editables = document.querySelectorAll('[contenteditable]');
  editables.forEach(el => {
    el.addEventListener('blur', function() {
      localStorage.setItem('content_' + this.className, this.innerHTML);
    });
    const saved = localStorage.getItem('content_' + el.className);
    if (saved) el.innerHTML = saved;
  });
}

document.addEventListener('DOMContentLoaded', init);