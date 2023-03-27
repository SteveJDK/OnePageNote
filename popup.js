const simplemde = new SimpleMDE({
    element: document.getElementById("editor"),
    autosave: {
      enabled: false 
    }
});
 
chrome.storage.sync.get('note', function(result) {
if (result.note) {
    simplemde.value(result.note);
}
});
 
simplemde.codemirror.on("change", function() {
    const note = simplemde.value();
    chrome.storage.sync.set({note: note}, function() {
        console.log('Note saved to Chrome storage.');
    });
});

