(function() {
  const button = document.getElementById('download-button');
  const textArea = document.getElementById('edit-text');
  function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  button.addEventListener('click', () => {
    if (!textArea.value) return;
    download('NoteIT.txt', textArea.value);
  });
})();
