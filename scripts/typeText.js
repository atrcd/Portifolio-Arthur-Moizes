document.addEventListener("DOMContentLoaded", function() {
    const rawText = `Arthur Moizes, Programador junior e estudante na área de Front-end e Back-end ...`;
    
    const highlightWords = {
      "LGPD": '<span class="highlight">LGPD</span>',
      "SQLscript": '<span class="highlight">SQLscript</span>',
      "SAP B1": '<span class="highlight">SAP B1</span>',
      "HANA": '<span class="highlight">HANA</span>',
      "MySQL": '<span class="highlight">MySQL</span>',
      "inteligência artificial": '<span class="highlight">inteligência artificial</span>',
      "deep learning": '<span class="highlight">deep learning</span>',
      "agentes inteligentes": '<span class="highlight">agentes inteligentes</span>',
      "gestão de equipes": '<span class="highlight">gestão de equipes</span>',
      "projetos de software": '<span class="highlight">projetos de software</span>'
    };
  
    let i = 0;
    const speed = 100;
    const descriptionElement = document.getElementById('description');
  
    function typeWriter() {
      let currentText = rawText.substring(0, i);
      for (let [word, html] of Object.entries(highlightWords)) {
        currentText = currentText.replace(new RegExp(word, 'g'), html);
      }
      descriptionElement.innerHTML = currentText;
      if (i < rawText.length) {
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });