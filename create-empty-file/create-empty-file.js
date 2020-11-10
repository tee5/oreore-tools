
(function () {
    const finder  = Application("Finder");
    const frontWindow = finder.windows().filter(function (w) {return w.index() == 1;})[0];
    const cwd = $.NSURL.alloc.initWithString(frontWindow.target().url()).fileSystemRepresentation;
    const app = Application.currentApplication()
    app.includeStandardAdditions = true
    cmd = `touch ${cwd}/Untitled`;
    result = app.doShellScript(cmd, {
        administratorPrivileges: false,
        withPrompt: '',
        alteringLineEndings: false
    });
    console.log(result);
})();
