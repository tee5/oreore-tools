
(function () {
    // 任意のアプリケーションの実行可能パスを指定する
    const execPath = "/System/Volumes/Data/Applications/Fork.app/Contents/MacOS/Fork";

    const finder  = Application("Finder");
    const frontWindow = finder.windows().filter(function (w) {return w.index() == 1;})[0];
    const cwd = $.NSURL.alloc.initWithString(frontWindow.target().url()).fileSystemRepresentation;
    const app = Application.currentApplication()
    app.includeStandardAdditions = true
    cmd = `open -a "${execPath}" "${cwd}"`;
    result = app.doShellScript(cmd, {
        administratorPrivileges: false,
        withPrompt: '',
        alteringLineEndings: false
    });
    console.log(result);
})();
