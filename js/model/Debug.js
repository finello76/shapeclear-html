// 和Scratch版的D臭蟲的功能是一樣的
function Debug() {
    this.allowIllegalMove = false;
    this.disableMatching = false;
    this.showMatching = false;
}

Debug.prototype.runCommand = function (cmd) {
    if (!cmd) return;
    switch (cmd) {
      case 'allow illegal move':
        this.allowIllegalMove = true; return ;
      case 'disallow illegal move':
        this.allowIllegalMove = false; return ;
      case 'enable matching':
        this.disableMatching = false; return ;
      case 'disable matching':
        this.disableMatching = true; return ;
      case 'show matching':
        this.showMatching = true; return ;
      case 'hide matching':
        this.showMatching = false; return ;
      case 'help': case '?':
        alertBox("Can't help you"); return ;
    }
    if (/^get /.test(cmd)) {
        return this.runGetCommand(cmd.substr(4));
    }
    console.log('Unknown command: ' + cmd);
};

Debug.prototype.runGetCommand = function (cmd) {
    if (cmd == 'inner height') {
        alertBox(window.innerHeight);
    }
    else if (cmd == 'body client height') {
        var rect = document.body.getClientRects()[0];
        alertBox(rect.height);
    }
};
