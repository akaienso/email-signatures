function CopyToClipboard(id) {
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  document.getElementById("copy-button").innerHTML = 'Copied! Now you can paste it into <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#settings/general" target="signature" style="font-weight: bold; color: white; text-decoration:none;">Gmail</a>. <i class="fas fa-paste"></i>';
  document.getElementById("copy-button").className = 'button button-green';

  var inst = document.getElementById("further-instructions");
  inst.style.display = inst.style.display === 'none' ? '' : 'none';
}

function onClick(element) {
  document.getElementById("sigvid").src = element.src;
  document.getElementById("sigvid-modal").style.display = "block";
}
